import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from 'mixwith'

export class Grid extends mix(GridElement).with(EntityListStoreMixin) {
}

customElements.define('c6o-grid', Grid)