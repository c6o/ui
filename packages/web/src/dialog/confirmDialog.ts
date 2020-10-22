import { html } from 'lit-element'
import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { render, TemplateResult } from 'lit-html'

interface base extends HTMLElement {
    opened: boolean
}
export interface ConfirmationDialog extends base {

}

export class ConfirmationDialog extends DialogElement {
    btnTheme: string
    confirmBtnText: string
    cancelBtnText: string
    message: string
    size: string
    title: string
    renderModalContent?(): TemplateResult
    callback: (confirmed: boolean) => void

    static get properties() {
        return {
            btnTheme: { type: String, value: 'info' },
            confirmBtnText: { type: String, value: 'OK' },
            cancelBtnText: { type: String, value: 'Cancel' },
            message: { type: String, value: '' },
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
                    ${this.message?.length ? html`
                        ${this.message}
                    ` : html`
                        ${this.renderModalContent()}
                    `}
                </div>
            </div>
            <div class="modal-footer" c6o="flex justify-between">
                <c6o-button class="cancel-button" theme="default" @click=${this.cancel}>${this.cancelBtnText}</c6o-button>
                <c6o-button class="confirm-button" theme="${this.btnTheme}" @click=${this.confirm}>${this.confirmBtnText}</c6o-button>
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

customElements.define('c6o-confirm-dialog', ConfirmationDialog)