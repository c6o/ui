import { EntityListStore } from '@traxitt/common'
import { observe } from 'mobx'

export const EntityListStoreMixin = (base) =>  class entityListStoreMixin extends base {
    disposers = []

    static get properties() {
        return {
            listStore: { type: EntityListStore, observer: 'listStoreChanged' }
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
                    ), true)
                })
            }, true))

            // This is not a good place to fetch as it will fetch
            // each time the grid is added to the DOM. Find another
            // await this.listStore.fetch()
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