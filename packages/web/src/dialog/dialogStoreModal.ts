import { html } from 'lit-element'
import { DialogStore } from './dialogStore'
import { TemplateResult } from 'lit-html'

export abstract class DialogStoreModal extends DialogStore {
    abstract renderModalContent(): TemplateResult

    static get properties() {
        return {
            btnTheme: { type: String, value: 'default' },
            confirmBtnText: { type: String, value: 'OK' },
            cancelBtnText: { type: String, value: 'Cancel' },
            size: { type: String, value: '' },
            title: { type: String, value: 'CodeZero' },
        }
    }

    renderContent = (save, cancel) => {
        return html`
            <div class="modal-header">
                <h2 class="modal-title">${this.title}</h2>
                <iron-icon icon="vaadin:close" @click=${cancel}></iron-icon>
            </div>
            <div class="modal-body ${this.size}">
                <div id="modal-content">
                    ${this.renderModalContent()}
                </div>
            </div>
            <div class="modal-footer" c6o="flex justify-between">
                <traxitt-button class="cancel-button" theme="default" @click=${cancel}>${this.cancelBtnText}</traxitt-button>
                <traxitt-button class="confirm-button" theme="${this.btnTheme}" @click=${save}>${this.confirmBtnText}</traxitt-button>
            </div>
        `
    }
}