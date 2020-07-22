import { observe } from 'mobx'

export const EntityListStoreMixin = (base) =>  class entityListStoreMixin extends base {
    disposers = []

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
        for(let i = 0; i < this.disposers.length; i++) {
            const dispose = this.disposers.pop()
                dispose()
        }

        if (this.listStore) {
            this.disposers.push(observe(this.listStore, 'entityStores', () => {
                this.entityStoresChanged()
            }, true))


            this.disposers.push(observe(this.listStore, 'entities', () => {
                // Watch for entity changes
                this.listStore.entities.forEach(entity => {
                    this.disposers.push(observe(entity, () =>
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