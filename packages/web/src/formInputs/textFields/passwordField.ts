import { PasswordFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-password-field'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'

/**
 * `<c6o-password-field>` is a Web Component for password field control in forms.
 *
 * ```html
 * <c6o-password-field label="Password"></vaadin-password-field>
 * ```
 *
 * ### Styling
 *
 * In addition to vaadin-text-field parts, here's the list of vaadin-password-field specific parts
 *
 * Part name       | Description
 * ----------------|----------------------------------------------------
 * `reveal-button` | The eye icon which toggles the password visibility
 *
 * In addition to vaadin-text-field state attributes, here's the list of vaadin-password-field specific attributes
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `password-visible` | Set when the password is visible | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStorePathMixin
 * @mixes PasswordFieldElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

export interface PasswordField extends EntityStorePathMixin {
}

export class PasswordField extends mix(PasswordFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
}

customElements.define('c6o-password-field', PasswordField)