import { observe } from 'mobx'

export interface EntityListStoreMixin {
    listStore: any
}

export const EntityListStoreMixin = (base) =>  class EntityListStoreMixinClass extends base {
    entityListStoreDisposers = []

    static get properties() {
        return {
            listStore: { type: Object, observer: 'listStoreChanged' },
            storeProperty: { type: 'string', value: 'entityStores' }
        }
    }

    // Property can be set to a valid string when something binds to ${null} or ${undefined}
    get safeProperty() { return !this.storeProperty || this.storeProperty === 'null' || this.storeProperty === 'undefined' ? 'entityStores' : this.storeProperty }

    listStoreChanged() {
        // Cannot use => notation in base class!?!
        // Do nothing in the base
        // Override this if you want to handle listStoreChanged events
        // Dispose previous subscriptions
        for (const disposer of this.entityListStoreDisposers)
            disposer()

        this.entityListStoreDisposers = []

        if (this.listStore) {
            this.entityListStoreDisposers.push(observe(this.listStore, this.safeProperty, () => {
                this.entityStoresChanged()

                this.listStore[this.safeProperty].forEach(entityStore => {
                    this.entityListStoreDisposers.push(observe(entityStore.entity, () =>
                        this.entityChanged()
                    ))
                })
            }, true))


            this.entityListStoreDisposers.push(observe(this.listStore, 'entities', () => {
                // Watch for entity changes
                this.listStore.entities.forEach(entity => {
                    this.entityListStoreDisposers.push(observe(entity, () =>
                        this.entityChanged()
                    ))
                })
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