import { RadioButtonElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-button'
import { mix } from '@c6o/common'
import { EntityStoreMixin } from '../mixins'

export class RadioButton extends mix(RadioButtonElement).with(EntityStoreMixin) {
}

customElements.define('c6o-radio-button', RadioButton)
