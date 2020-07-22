import { PasswordFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-password-field'
import { mix } from '@c6o/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export class PasswordField extends mix(PasswordFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
}

customElements.define('c6o-password-field', PasswordField)