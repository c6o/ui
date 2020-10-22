import { FormItemElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-item'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'

export interface FormItem extends HTMLElement {

}
export class FormItem extends mix(FormItemElement).with(EntityStoreMixin) {
}

customElements.define('c6o-form-item', FormItem)
