import { RadioButtonElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-button'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../../mixins'

/**
 * `<c6o-radio-button>` is a Web Component for radio buttons.
 *
 * ```html
 * <c6o-radio-button value="foo">Foo</c6o-radio-button>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|----------------
 * `radio`           | The radio button element
 * `label`           | The label content element
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled`   | Set when the radio button is disabled. | :host
 * `focus-ring` | Set when the radio button is focused using the keyboard. | :host
 * `focused`    | Set when the radio button is focused. | :host
 * `checked`    | Set when the radio button is checked. | :host
 * `empty`      | Set when there is no label provided. | label
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStoreMixin
 * @mixes RadioButtonElement
 * @mixes EntityStoreMixin
 */

export interface RadioButton extends EntityStoreMixin {
}

export class RadioButton extends mix(RadioButtonElement).with(EntityStoreMixin) {
}

customElements.define('c6o-radio-button', RadioButton)
