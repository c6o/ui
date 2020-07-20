import { FormItemElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-item'
import { mix } from '@traxitt/common'
import { EntityStoreMixin } from '../mixins'

export class FormItem extends mix(FormItemElement).with(EntityStoreMixin) {
}

customElements.define('c6o-form-item', FormItem)
