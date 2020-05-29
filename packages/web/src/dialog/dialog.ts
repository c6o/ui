import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { html } from 'lit-element'
import { render, TemplateResult } from 'lit-html'

export abstract class DialogBase extends DialogElement {
    abstract renderContent(): TemplateResult
    abstract closeCallback(): void
    btnTheme: string
    btnText: string
    size: string
    title: string

    static get properties() {
        return {
            btnTheme: { type: String, value: 'default' },
            btnText: { type: String, value: 'Close' },
            size: { type: String, value: '' },
            title: { type: String, value: 'CodeZero' },
        }
    }

    renderer = (root) => {
        if (root.firstElementChild) return
        render(this.renderModal(), root)
    }

    renderModal = () => {
        return html`
            <div class="modal-header">
                <h2 class="modal-title">${this.title}</h2>
                <iron-icon icon="vaadin:close" @click=${this.close}></iron-icon>
            </div>
            <div class="modal-body ${this.size}">
                <div id="modal-content">
                    ${this.renderContent()}
                </div>
            </div>
            <div class="modal-footer" c6o="text-center">
                <traxitt-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</traxitt-button>
            </div>
        `
    }

    close = () => {
        const callbackSuccess = this.closeCallback ? this.closeCallback() : true
        super.opened = !callbackSuccess
    }
}
