import { html } from 'lit-element'
import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { render } from 'lit-html'

export class ConfirmationDialog extends DialogElement {
    callback: (confirmed: boolean) => void
    btnTheme: string
    confirmBtnText: string
    cancelBtnText: string
    message: string
    size: string
    title: string

    static get properties() {
        return {
            btnTheme: { type: String, value: 'default' },
            confirmBtnText: { type: String, value: 'OK' },
            cancelBtnText: { type: String, value: 'Cancel' },
            message: { type: String, value: 'Are you sure?' },
            size: { type: String, value: '' },
            title: { type: String, value: 'Please Confirm' },
        }
    }

    renderer = (root) => {
        if (root.firstElementChild) return
        render(this.renderContent(), root)
    }

    renderContent = () => {
        return html`
            <div class="modal-header">
                <h2 class="modal-title">${this.title}</h2>
                <iron-icon icon="vaadin:close" @click=${this.cancel}></iron-icon>
            </div>
            <div class="modal-body ${this.size}">
                <div id="modal-content">
                    ${this.message}
                </div>
            </div>
            <div class="modal-footer" c6o="flex justify-between">
                <traxitt-button class="cancel-button" theme="default" @click=${this.cancel}>${this.cancelBtnText}</traxitt-button>
                <traxitt-button class="confirm-button" theme="${this.btnTheme}" @click=${this.confirm}>${this.confirmBtnText}</traxitt-button>
            </div>
        `
    }

    show(message: string) {
        this.message = message
        super.opened = true

        return new Promise((resolve) => {
            this.callback = (confirmed: boolean) => {
                resolve(confirmed)
            }
        })
    }

    cancel = async () => {
        super.opened = false
        this.callback(false)
    }

    confirm = async () => {
        super.opened = false
        this.callback(true)
    }
}

customElements.define('traxitt-confirm-dialog', ConfirmationDialog)