import { CheckboxGroupElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox-group'

/**
 * `<c6o-checkbox-group>` is a Polymer element for grouping c6o-checkboxes.
 *
 * ```html
 * <c6o-checkbox-group label="Preferred language of contact:">
 *  <c6o-checkbox value="en">English</c6o-checkbox>
 *  <c6o-checkbox value="fr">Français</c6o-checkbox>
 *  <c6o-checkbox value="de">Deutsch</c6o-checkbox>
 * </c6o-checkbox-group>
 *
 * <c6o-checkbox-group error-message="Please accept in order to continue" label="Please accept the terms and conditions" required>
 *  <c6o-checkbox value="1" theme="inline">I accept</c6o-checkbox>
 * </c6o-checkbox-group>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `group-field` | The element that wraps checkboxes
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled`   | Set when the checkbox group and its children are disabled. | :host
 * `focused` | Set when the checkbox group contains focus | :host
 * `has-label` | Set when the element has a label | :host
 * `has-value` | Set when the element has a value | :host
 * `has-helper` | Set when the element has helper text or slot | :host
 * `has-error-message` | Set when the element has an error message, regardless if the field is valid or not | :host
 * `required` | Set when the element is required | :host
 * `invalid` | Set when the element is invalid | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends CheckboxGroupElement
 */

export class CheckboxGroup extends CheckboxGroupElement {
}

customElements.define('c6o-checkbox-group', CheckboxGroup)