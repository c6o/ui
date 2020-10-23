import { NumberFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-number-field'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export interface NumberField extends EntityStorePathMixin {
}

export class NumberField extends mix(NumberFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    currency: boolean
    value: string

    static get properties() {
        return {
            ...super.properties,
            currency: { type: Boolean },
            value: { type: String }
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