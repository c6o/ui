import { html, customElement, CSSResult, query } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseStoreDialog } from './baseStoreDialog'

@customElement('c6o-store-dialog')
export class StoreDialog extends BaseStoreDialog {

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals
        ]
    }

    @query('c6o-confirm-dialog')
    confirmDialog

    render() {
        const btnText = this.btnText || 'Cancel'

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
                                confirm-btn-theme="primary error"
                                confirm-btn-text="Delete"
                            ></c6o-confirm-dialog>
                        </div>
                    ` : ''}
                    <div class="btn-group">
                        <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.cancel}>${btnText}</c6o-button>
                        <c6o-button class="confirm-button" theme="${this.confirmBtnTheme}" @click=${this.save}>${this.confirmBtnText}</c6o-button>
                    </div>
                </footer>
            </c6o-dialog>
        `
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
}