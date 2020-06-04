import { RadioButtonElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-button'
import { mix } from '@traxitt/common'
import { EntityStoreMixin } from '../mixins'

export class RadioButton extends mix(RadioButtonElement).with(EntityStoreMixin) {
}

customElements.define('traxitt-radio-button', RadioButton)
