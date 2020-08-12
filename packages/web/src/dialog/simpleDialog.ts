import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { html } from 'lit-element'
import { render } from 'lit-html'

export interface SimpleDialog {
    opened: boolean
    addEventListener: HTMLElement['addEventListener']
}

export class SimpleDialog extends DialogElement {
    btnTheme: string
    btnText: string
    forceRender: boolean
    message: string
    root
    size: string
    title: string

    onClose(): boolean | Promise<boolean> { return true }
    onOpened(): void | Promise<void> { return }

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
                ${this.renderHeader()}
            </div>
            <div class="modal-body ${this.size}">
                <div id="modal-content">
                    ${this.renderModalContent()}
                </div>
            </div>
            <div class="modal-footer" c6o="text-right">
                <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</c6o-button>
            </div>
        `
    }

    renderHeader = () => {
        return html`
            <h2 class="modal-title">${this.title}</h2>
            <iron-icon icon="vaadin:close" @click=${this.close}></iron-icon>
        `
    }

    renderModalContent = () => {
        return html`${this.message}`
    }

    close =  async () => {
        const callbackSuccess = await this.onClose()
        super.opened = !callbackSuccess
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('opened-changed', async () => await this.onOpened())
    }

    async disconnectedCallback() {
        await super.disconnectedCallback()
    }
}
