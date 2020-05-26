import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from './mixins'

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin, EntityStorePathMixin) {
    autoformat: string

    static get properties() {
        return {
            ...super.properties,
            autoformat: { type: String }
        }
    }

    async connectedCallback() {
        await super.connectedCallback()

        if (this.autoformat) {
            this.addEventListener('input', (event) => {
                switch(this.autoformat) {
                    case 'lowercase':
                        this.value = event.target.value.toLowerCase()
                        break
                    case 'uppercase':
                        this.value = event.target.value.toUpperCase()
                        break
                }
            })
        }
    }
}

customElements.define('traxitt-text-field', TextField)