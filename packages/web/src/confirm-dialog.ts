import { html } from 'lit-element'
import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { render } from 'lit-html'

export class ConfirmationDialog extends DialogElement {

    message: string
    callback: (confirm: boolean) => void

    static get properties() {
        return {
            ...super.properties,
            message: { type: String, value: 'Are you sure?' }
        }
    }

    renderer = (root) => {
        if (root.firstElementChild) return
        render(this.renderContent(), root)
    }

    renderContent = () => {
        return html`
            <div>${this.message}</div>
            <br>
            <traxitt-button style="margin-right: 1em" @click=${this.cancel.bind(this)}>Cancel</traxitt-button>
            <traxitt-button theme="primary" style="margin-right: 1em" @click=${this.ok.bind(this)}>OK</traxitt-button>
            `
    }

    confirm(message) {
        this.message = message
        super.opened = true
        return new Promise((resolve) => {
            this.callback = (confirmed: boolean) => {
                resolve(confirmed)
            }
        })
    }

    async cancel() {
        super.opened = false
        this.callback(false)
    }
    
    async ok() {
        super.opened = false
        this.callback(true)
    }
}

customElements.define('traxitt-confirm-dialog', ConfirmationDialog)