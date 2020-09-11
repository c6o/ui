import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { PolymerElement } from '@polymer/polymer'
import { html } from 'lit-element'
import { render } from 'lit-html'

export interface SimpleDialog extends PolymerElement {
    opened: boolean
    render()
}

export class SimpleDialog extends DialogElement {
    btnTheme: string
    btnText: string
    isStatic: boolean
    message: string
    root
    size: string
    title: string
    onOpenedChanged(): void | Promise<void> { return }

    static get properties() {
        return {
            ...super.properties,
            btnTheme: { type: String, value: 'default' },
            btnText: { type: String, value: 'Close' },
            isStatic: { type: Boolean, value: false },
            message: { type: String },
            size: { type: String, value: '' },
            title: { type: String, value: 'CodeZero' },
        }
    }

    renderer = (root) => {
        this.root = root
        if (this.isStatic && root.firstElementChild) return
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
                ${this.renderFooter()}
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

    renderFooter = () => {
        return html`
            <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</c6o-button>
        `
    }

    close = () => {
        this.opened = false
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('opened-changed', async () => await this.onOpenedChanged())
    }
}
