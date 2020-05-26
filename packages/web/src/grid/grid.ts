import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from '@traxitt/common'

export class Grid extends mix(GridElement).with(EntityListStoreMixin) {
}

customElements.define('traxitt-grid', Grid)