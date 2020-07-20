import { html } from 'lit-element'
import { DialogStore } from './dialogStore'
import { TemplateResult } from 'lit-html'

export abstract class DialogStoreModal extends DialogStore {
    abstract renderModalContent(): TemplateResult

    static get properties() {
        return {
            ...super.properties,
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
                    <c6o-button class="delete-button" theme="error" @click=${this.delete}>Delete</c6o-button>
                    <div class="btn-group">
                        <c6o-button class="cancel-button" theme="default" @click=${cancel}>${this.cancelBtnText}</c6o-button>
                        <c6o-button class="confirm-button" theme="${this.btnTheme}" @click=${save}>${this.confirmBtnText}</c6o-button>
                    </div>
                </div>
                <c6o-confirm-dialog
                    btn-theme="primary error"
                    confirm-btn-text="Delete"
                    title="Confirm Edition Deletion">
                </c6o-confirm-dialog>
            ` : html`
                <div class="modal-footer" c6o="flex justify-between">
                    <c6o-button class="cancel-button" theme="default" @click=${cancel}>${this.cancelBtnText}</c6o-button>
                    <c6o-button class="confirm-button" theme="${this.btnTheme}" @click=${save}>${this.confirmBtnText}</c6o-button>
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