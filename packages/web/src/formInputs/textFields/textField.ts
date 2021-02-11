import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'

/**
 * `<c6o-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <c6o-text-field label="First Name"></c6o-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<c6o-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <c6o-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@codezero.io</div>
 * </c6o-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 * `theme` | Set to change the appearance or size of the field. Possible values are 'inline', 'light', 'tall', 'condensed', 'reversed', 'search' | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStorePathMixin
 * @mixes TextFieldElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

export type TextFieldTheme = '' | 'inline' | 'light' | 'tall' | 'condensed' | 'reversed' | 'search'

export interface TextField extends EntityStorePathMixin {
    errorMessage: string
    eventToStore
    invalid: boolean
    path: string
    store
    theme: TextFieldTheme
    value: string
}

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    lowercase: boolean
    uppercase: boolean
    updateOnInput: boolean

    static get properties() {
        return {
            ...super.properties,
            lowercase: { type: Boolean },
            maxlength: { type: String, value: '100' },
            uppercase: { type: Boolean },
            updateOnInput: {type: Boolean, attribute: 'update-on-input' },
        }
    }

    handleInputChange = (e) => {
        if (this.lowercase)
            this.value = e.target.value?.toLowerCase()
        if (this.uppercase)
            this.value = e.target.value?.toUpperCase()

        if (this.store && this.path) {
            this.invalid = false
            this.store.clearError(this.path)

            if (this.updateOnInput)
                this.eventToStore(e)
        }
    }

    resetValue() {
        this.value = ''
        this.invalid = false
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('input', this.handleInputChange)
    }

    async disconnectedCallback() {
        this.removeEventListener('input', this.handleInputChange)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-text-field', TextField)