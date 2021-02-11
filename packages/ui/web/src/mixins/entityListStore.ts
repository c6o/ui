import { PolymerElement } from '@polymer/polymer'
import { observe } from 'mobx'

export interface EntityListStoreMixin extends PolymerElement {
    listStore: any
    storeProperty: string
    entityChanged(): void
    entityStoresChanged(): void
}

export const EntityListStoreMixin = (base) => class EntityListStoreMixinClass extends base {
    _listStoreDisposers = []

    static get properties() {
        return {
            listStore: { type: Object, observer: 'listStoreChanged' },
            storeProperty: { type: 'string', value: 'entityStores', observer: 'listStoreChanged' }
        }
    }

    // Property can be set to a valid string when something binds to ${null} or ${undefined}
    get safeProperty() { return !this.storeProperty || this.storeProperty === 'null' || this.storeProperty === 'undefined' ? 'entityStores' : this.storeProperty }

    listStoreChanged() {
        // Cannot use => notation in base class!?!
        // Do nothing in the base
        // Override this if you want to handle listStoreChanged events
        // Dispose previous subscriptions
        for (const disposer of this._listStoreDisposers)
            disposer()
        this._listStoreDisposers = []

        if (this.listStore) {
            this._listStoreDisposers.push(observe(this.listStore, this.safeProperty, () => {
                this.entityStoresChanged()

                const entityStoreList = this.listStore[this.safeProperty]
                if (entityStoreList) {
                    for(const entityStore of entityStoreList)
                        this._listStoreDisposers.push(observe(entityStore, () => this.entityChanged()))
                }

                // We're observing both the entityStores and the entities - this may be overkill
                // and result in too many render calls. We can consider removing this
                this._listStoreDisposers.push(observe(this.listStore, 'entities', () => {
                    for (const entity of this.listStore.entities)
                        this._listStoreDisposers.push(observe(entity, () => this.entityChanged() ))
                }, true))
            }, true))
        }
    }

    entityStoresChanged() {
        this.items = this.listStore?.[this.safeProperty]
        this.render()
    }

    entityChanged() {
        this.render()
    }
}