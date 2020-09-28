import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { PolymerElement } from '@polymer/polymer'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export interface TextField extends PolymerElement {
    eventToStore
    path
    store
}

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    invalid: boolean
    lowercase: boolean
    uppercase: boolean
    updateOnInput: boolean
    value: string

    static get properties() {
        return {
            ...super.properties,
            lowercase: { type: Boolean },
            uppercase: { type: Boolean },
            updateOnInput: {type: Boolean, attribute: 'update-on-input' },
            value: { type: String }
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