import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { PolymerElement } from '@polymer/polymer'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export interface TextField extends PolymerElement {}

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    autoformat: string
    value: string

    static get properties() {
        return {
            autoformat: { type: String },
            value: { type: String }
        }
    }

    autoFormat = (e) => {
        switch(this.autoformat) {
            case 'lowercase':
                this.value = e.target.value?.toLowerCase()
                break
            case 'uppercase':
                this.value = e.target.value?.toUpperCase()
                break
        }
    }

    async connectedCallback() {
        await super.connectedCallback()
        if (this.autoformat) {
            this.addEventListener('input', this.autoFormat)
        }
    }

    async disconnectedCallback() {
        if (this.autoformat)
            this.removeEventListener('input', this.autoFormat)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-text-field', TextField)