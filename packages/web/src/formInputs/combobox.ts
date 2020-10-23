import { ComboBoxElement } from '@vaadin/vaadin-combo-box/src/vaadin-combo-box'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin } from '../mixins'

export interface ComboBox extends EntityStorePathMixin {
}

export class ComboBox extends mix(ComboBoxElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
    invalid: boolean
    lowercase: boolean
    uppercase: boolean
    value: string

    static get properties() {
        return {
            ...super.properties,
            lowercase: { type: Boolean },
            uppercase: { type: Boolean },
            value: { type: String }
        }
    }

    autoFormat = (e) => {
        if (this.lowercase)
            this.value = e.target.inputElement.value?.toLowerCase()
        if (this.uppercase)
            this.value = e.target.inputElement.value?.toUpperCase()
    }

    resetValue() {
        this.value = ''
        this.invalid = false
    }

    async connectedCallback() {
        await super.connectedCallback()
        if (this.lowercase || this.uppercase)
            this.addEventListener('input', this.autoFormat)
    }

    async disconnectedCallback() {
        if (this.lowercase || this.uppercase)
            this.removeEventListener('input', this.autoFormat)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-combo-box', ComboBox)
