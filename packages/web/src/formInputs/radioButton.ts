import { RadioButtonElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-button'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'

export interface RadioButton extends HTMLElement {
}
export class RadioButton extends mix(RadioButtonElement).with(EntityStoreMixin) {
}

customElements.define('c6o-radio-button', RadioButton)
