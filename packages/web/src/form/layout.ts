import { FormLayoutElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-layout'
import { mix, EntityStoreMixin } from '../mixins'

export class FormLayout extends mix(FormLayoutElement).with(EntityStoreMixin) {

}

customElements.define('traxitt-form-layout', FormLayout)