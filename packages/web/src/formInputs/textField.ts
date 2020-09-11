import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { PolymerElement } from '@polymer/polymer'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export interface TextField extends PolymerElement {}

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    hideInitialValue: boolean
    lowercase: boolean
    uppercase: boolean
    value: string

    static get properties() {
        return {
            ...super.properties,
            hideInitialValue: { type: Boolean, value: false},
            lowercase: { type: Boolean },
            uppercase: { type: Boolean },
            value: { type: String }
        }
    }

    autoFormat = (e) => {
        if (this.lowercase)
            this.value = e.target.value?.toLowerCase()
        if (this.uppercase)
            this.value = e.target.value?.toUpperCase()
    }

    async connectedCallback() {
        await super.connectedCallback()
        if (this.hideInitialValue)
            this.value = ''
        if (this.lowercase || this.uppercase) {
            this.addEventListener('input', this.autoFormat)
        }
    }

    async disconnectedCallback() {
        if (this.lowercase || this.uppercase)
            this.removeEventListener('input', this.autoFormat)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-text-field', TextField)