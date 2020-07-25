import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { html } from 'lit-element'
import { render, TemplateResult } from 'lit-html'

export abstract class SimpleDialog extends DialogElement {
    abstract renderModalContent(): TemplateResult
    closeCallback?(): void
    btnTheme: string
    btnText: string
    forceRender: boolean
    root
    size: string
    title: string

    static get properties() {
        return {
            ...super.properties,
            btnTheme: { type: String, value: 'default' },
            btnText: { type: String, value: 'Close' },
            forceRender: { type: Boolean, value: false },
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

    close = () => {
        const callbackSuccess = this.closeCallback ? this.closeCallback() : true
        super.opened = !callbackSuccess
    }

}
