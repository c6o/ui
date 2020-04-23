import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, PathEntityStoreMixin } from './mixins'

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, PathEntityStoreMixin) {
}

customElements.define('traxitt-text-field', TextField)