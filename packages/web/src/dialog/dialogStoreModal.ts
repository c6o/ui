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
            deleteMessage: { type: String, value: '' },
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
            ${this.deleteMessage?.length ? html`
                <div class="modal-footer" c6o="flex justify-between">
                    <traxitt-button class="delete-button" theme="error" @click=${this.delete}>Delete</traxitt-button>
                    <div class="btn-group">
                        <traxitt-button class="cancel-button" theme="default" @click=${cancel}>${this.cancelBtnText}</traxitt-button>
                        <traxitt-button class="confirm-button" theme="${this.btnTheme}" @click=${save}>${this.confirmBtnText}</traxitt-button>
                    </div>
                </div>
                <traxitt-confirm-dialog
                    btn-theme="primary error"
                    confirm-btn-text="Delete"
                    title="Confirm Edition Deletion">
                </traxitt-confirm-dialog>
            ` : html`
                <div class="modal-footer" c6o="flex justify-between">
                    <traxitt-button class="cancel-button" theme="default" @click=${cancel}>${this.cancelBtnText}</traxitt-button>
                    <traxitt-button class="confirm-button" theme="${this.btnTheme}" @click=${save}>${this.confirmBtnText}</traxitt-button>
                </div>
            `}
        `
    }

    delete = async () => {
        const confirm = await this.confirmDialog.show(this.deleteMessage)
        if (confirm) {
            await this.store.remove()
            this.store = null
        }
    }
}