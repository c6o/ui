import { FormLayoutElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-layout'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'

export interface FormLayout extends HTMLElement {
}

export class FormLayout extends mix(FormLayoutElement).with(EntityStoreMixin) {
}

customElements.define('c6o-form-layout', FormLayout)
