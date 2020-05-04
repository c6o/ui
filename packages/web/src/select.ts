import { SelectElement } from '@vaadin/vaadin-select/src/vaadin-select'
import { mix } from '@traxitt/common'
import { EntityListStoreMixin } from './mixins'

export class Select extends mix(SelectElement).with(EntityListStoreMixin) {
}

customElements.define('traxitt-select', Select)