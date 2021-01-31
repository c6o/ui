import { PolymerElement } from '@polymer/polymer'
import { observe, reaction } from 'mobx'

export interface EntityListStoreMixin extends PolymerElement {
    listStore: any
    entityChanged(): void
    entityStoresChanged(): void
}

export const EntityListStoreMixin = (base) => class EntityListStoreMixinClass extends base {
    listStoreDisposers = []

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
        for (const disposer of this.listStoreDisposers)
            disposer()

        this.listStoreDisposers = []
        console.log('NSX changed')

        if (this.listStore) {
            this.listStoreDisposers.push(observe(this.listStore, this.safeProperty, () => {
                this.entityStoresChanged()

                console.log('NSX observing', this.safeProperty)

                this.listStore[this.safeProperty].forEach(entityStore => {
                    const disposer = reaction(
                        () => [entityStore, entityStore.entity],
                        () => {
                            console.log('NSX changed reaction')
                            this.entityChanged()
                        }
                    )
                    /*tthis.listStoreDisposers.push(disposer)
                    console.log('NSX changed outer', entityStore)

                    this.listStoreDisposers.push(observe(entityStore, () => {
                        console.log('NSX changed es')
                        this.entityChanged()
                    }
                    ))

                    his.listStoreDisposers.push(observe(entityStore.entity, () => {
                        console.log('NSX changed')
                        this.entityChanged()
                    }
                    )), true)*/
                })

            }, true))

            this.listStoreDisposers.push(observe(this.listStore, 'entities', () => {
                // Watch for entity changes
                this.listStore.entities.forEach(entity => {
                    this.listStoreDisposers.push(observe(entity, () =>
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