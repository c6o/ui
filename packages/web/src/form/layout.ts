import { FormLayoutElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-layout'
import { mix } from '@c6o/common'
import { EntityStoreMixin } from '../mixins'

export class FormLayout extends mix(FormLayoutElement).with(EntityStoreMixin) {
}

customElements.define('c6o-form-layout', FormLayout)
