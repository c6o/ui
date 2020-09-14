import { ButtonElement } from '@vaadin/vaadin-button/src/vaadin-button'
import { PolymerElement } from '@polymer/polymer'
import { observe } from 'mobx'
import { EntityStore } from '@c6o/common'

export interface Button extends PolymerElement {
    disabled: boolean
}

export class Button extends ButtonElement {
    disposer
    store: EntityStore

    static get properties() {
        return {
            ...super.properties,
            store: { type: Object }
        }
    }

    showSaved() {
        this.setAttribute('saved', '')
        setTimeout(() => { this.removeAttribute('saved') }, 3000)
    }

    showError() {
        this.setAttribute('error', '')
        setTimeout(() => { this.removeAttribute('error') }, 3000)
    }

    async connectedCallback() {
        await super.connectedCallback()
        if (this.store)
            this.disposer = observe(this.store, 'busy', () => {
                this.removeAttribute('saved')
                this.removeAttribute('error')
                this.disabled = this.store.busy
                if (!this.store.busy) {
                    this.store.success ? this.showSaved() : this.showError()
                }
            })
    }

    async disconnectedCallback() {
        this.disposer?.()
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-button', Button)