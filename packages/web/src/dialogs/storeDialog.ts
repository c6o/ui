import { html, customElement, property, CSSResult, query } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseStoreDialog } from './baseStoreDialog'

@customElement('c6o-store-dialog')
export class StoreDialog extends BaseStoreDialog {

    @property({ type: String, attribute: 'btn-text' })
    btnText = 'Cancel'

    @property({ type: String, attribute: 'confirm-btn-text' })
    confirmBtnText = 'Save'

    @property({ type: String, attribute: 'confirm-btn-theme' })
    confirmBtnTheme = 'primary'

    @property({ type: String, attribute: 'delete-btn-text' })
    deleteBtnText = 'Delete'

    @property({ type: String, attribute: 'delete-message' })
    deleteMessage: string

    @property({ type: Object })
    file: any

    @property({ type: String, attribute: 'file-path' })
    filePath = 'image'

    // Optional callbacks
    cancelCallback?(): void
    confirmCallback?(): void

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals
        ]
    }

    @query('c6o-confirm-dialog')
    confirmDialog

    render() {
        return html`
            <c6o-dialog classes=${this.cssClasses} ?opened=${this.opened}>
                <header slot="header">
                    <h2 class="modal-title">
                        ${this.title}
                        ${this.subtitle ? html`
                            <div class="modal-subtitle">${this.subtitle}</div>
                        `: ''}
                    </h2>
                    <iron-icon icon="vaadin:close" @click=${this.cancel}></iron-icon>
                </header>

                <slot></slot>

                <footer c6o="${this.deleteMessage?.length ? 'flex justify-between' : 'text-right'}" slot="footer">
                    ${this.deleteMessage?.length ? html`
                        <div id="delete-btn">
                            <c6o-button class="delete-button" theme="error" @click=${this.delete}>${this.deleteBtnText}</c6o-button>
                            <c6o-confirm-dialog
                                btn-theme="primary error"
                                confirm-btn-text="Delete"
                                title="Please Confirm">
                            </c6o-confirm-dialog>
                        </div>
                    ` : ''}
                    <div class="btn-group">
                        <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.cancel}>${this.btnText}</c6o-button>
                        <c6o-button class="confirm-button" theme="${this.confirmBtnTheme}" @click=${this.save}>${this.confirmBtnText}</c6o-button>
                    </div>
                </footer>
            </c6o-dialog>
        `
    }

    upload = (e) => {
        // this.file is used by the Vaadin Upload component
        this.file = e.detail.file
        this.file.complete = true
        this.file.status = ''

        const reader = new FileReader()
        reader.onload = this.fileProcessed
        reader.readAsDataURL(e.detail.file)
    }

    fileProcessed = (e) => {
        this.store.pending[this.filePath] = e.target.result
    }

    delete = async () => {
        if (this.confirmDialog) {
            const confirm = await this.confirmDialog.show(this.deleteMessage)
            if (confirm) {
                await this.store.remove()
                this.close()
            }
        }
    }

    cancel = () => {
        if (this.store) {
            if (this.cancelCallback)
                this.cancelCallback()
            this.close()
        }
    }

    save = async () => {
        const result = await this.saveToStore()
        if (result) {
            this.confirmCallback?.()
            this.close()
        }
        return result
    }

    saveToStore = async () => {
        await this.store?.save()
        return !!this.store?.success
    }

    reset = async () => {
        this.store.reset()
    }
}