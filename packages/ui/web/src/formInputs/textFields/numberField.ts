import { NumberFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-number-field'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'

/**
 * `<c6o-number-field>` is a Web Component for number field control in forms.
 *
 * ```html
 * <c6o-number-field label="Number"></c6o-number-field>
 *
 * <c6o-number-field currency label="Cost"></c6o-number-field>
 * ```
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `currency  ` | Set when the number input is a currency to 2 decimal places | :host
 *
 * @extends EntityStorePathMixin
 * @mixes NumberFieldElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

export interface NumberField extends EntityStorePathMixin {
    value: string
}

export class NumberField extends mix(NumberFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    currency: boolean

    static get properties() {
        return {
            ...super.properties,
            currency: { type: Boolean },
        }
    }

    handleInputChange = (e) => {
        if (this.currency && e.target.value)
            this.value = Number(e.target.value).toFixed(2)
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('change', this.handleInputChange)
    }

    async disconnectedCallback() {
        this.removeEventListener('change', this.handleInputChange)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-number-field', NumberField)