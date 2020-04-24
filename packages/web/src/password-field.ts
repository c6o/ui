import { PasswordFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-password-field'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, PathEntityStoreMixin } from './mixins'

export class PasswordField extends mix(PasswordFieldElement).with(EntityStoreMixin, PathEntityStoreMixin) {
}

customElements.define('traxitt-password-field', PasswordField)