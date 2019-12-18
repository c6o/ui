import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from '@traxitt/common'
import { observe } from 'mobx'

export class Grid extends mix(GridElement).with(EntityListStoreMixin) {

    _storesDisposer
    _entitiesDisposer
    _disposers = []

    listStoreChanged = async () => {
        super.listStoreChanged()
        if (this.listStore) {

            // Dispose previous subscriptions
            if (this._storesDisposer)
                this._storesDisposer()

            if (this._entitiesDisposer)
                this._entitiesDisposer()

            this._disposers.forEach(disposer => disposer())

            this._storesDisposer = observe(this.listStore, 'entityStores', () => {
                this.items = this.listStore.entityStores
                this.render()
            }, true)


            this._entitiesDisposer = observe(this.listStore, 'entities', () => {
                // Watch for entity changes
                this.listStore.entities.forEach(entity => {
                    this._disposers.push(observe(entity, () =>
                        this.render()
                    ), true)
                })
            }, true)

            // This is not a good place to fetch as it will fetch
            // each time the grid is added to the DOM. Find another
            // await this.listStore.fetch()
        }
    }
}

customElements.define('traxitt-grid', Grid)