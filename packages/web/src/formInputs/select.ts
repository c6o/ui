import { SelectElement } from '@vaadin/vaadin-select/src/vaadin-select'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin } from '../mixins'

export class Select extends mix(SelectElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
}

customElements.define('traxitt-select', Select)