import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from './mixins'

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {

    static get properties() {
        return {
            autoformat: { type: String }
        }
    }

    autoFormat = (e) => {
        switch(this.autoformat) {
            case 'lowercase':
                this.value = e.target.value.toLowerCase()
                break
            case 'uppercase':
                this.value = e.target.value.toUpperCase()
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
        await super.disconnectedCallback()

        if (this.autoformat) {
            this.removeEventListener('input', this.autoFormat)
        }
    }
}

customElements.define('traxitt-text-field', TextField)