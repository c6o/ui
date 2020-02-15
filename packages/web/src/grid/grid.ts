import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from '@traxitt/common'
export class Grid extends mix(GridElement).with(EntityListStoreMixin) {

    entityStoresChanged() {
        this.items = this.listStore.entityStores
        this.render()
    }

    entityChanged() {
        this.render()
    }
}

customElements.define('traxitt-grid', Grid)