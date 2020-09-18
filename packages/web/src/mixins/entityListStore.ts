import { observe } from 'mobx'

export const EntityListStoreMixin = (base) =>  class entityListStoreMixin extends base {
    entityListStoreDisposers = []

    static get properties() {
        return {
            listStore: { type: Object, observer: 'listStoreChanged' }
        }
    }

    listStoreChanged() {
        // Cannot use => notation in base class!?!
        // Do nothing in the base
        // Override this if you want to handle listStoreChanged events
        // Dispose previous subscriptions
        for(const disposer of this.entityListStoreDisposers)
            disposer()

        this.entityListStoreDisposers = []

        if (this.listStore) {
            this.entityListStoreDisposers.push(observe(this.listStore, 'entityStores', () => {
                this.entityStoresChanged()

                this.listStore.entityStores.forEach(entityStore => {
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
        this.items = this.listStore?.entityStores
        this.render()
    }

    entityChanged() {
        this.render()
    }
}