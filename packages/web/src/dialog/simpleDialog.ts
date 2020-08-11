import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { html } from 'lit-element'
import { render } from 'lit-html'

export class SimpleDialog extends DialogElement {
    btnTheme: string
    btnText: string
    forceRender: boolean
    message: string
    root
    size: string
    title: string
    closeCallback?(): boolean

    static get properties() {
        return {
            ...super.properties,
            btnTheme: { type: String, value: 'default' },
            btnText: { type: String, value: 'Close' },
            forceRender: { type: Boolean, value: false },
            message: { type: String },
            size: { type: String, value: '' },
            title: { type: String, value: 'CodeZero' },
        }
    }

    renderer = (root) => {
        this.root = root
        if (!this.forceRender && root.firstElementChild) return
        render(this.renderContent(), root)
    }

    renderContent = () => {
        return html`
            <div class="modal-header">
                <h2 class="modal-title">${this.title}</h2>
                <iron-icon icon="vaadin:close" @click=${this.close}></iron-icon>
            </div>
            <div class="modal-body ${this.size}">
                <div id="modal-content">
                    ${this.renderModalContent()}
                </div>
            </div>
            <div class="modal-footer" c6o="text-center">
                <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</c6o-button>
            </div>
        `
    }

    renderModalContent = () => {
        return html`${this.message}`
    }

    close = () => {
        const callbackSuccess = this.closeCallback ? this.closeCallback() : true
        super.opened = !callbackSuccess
    }
}
