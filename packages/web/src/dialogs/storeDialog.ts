import { html, customElement, css, CSSResult, query } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseStoreDialog } from './baseStoreDialog'

@customElement('c6o-store-dialog')
export class StoreDialog extends BaseStoreDialog {

    footer?()
    header?()

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals,
            css`
                .animation-container {
                    position: relative;
                }

                .waiting-animation {
                    left: -45px;
                    position: absolute;
                    top: 3px;
                }
            `
        ]
    }

    @query('c6o-confirm-dialog')
    confirmDialog

    render() {
        const btnText = this.btnText || 'Cancel'

        return html`
            <c6o-dialog classes=${this.cssClasses} ?opened=${this.opened}>
                ${this.header ? this.header() : html`
                    <header slot="header">
                        <h2 class="modal-title">
                            ${this.title}
                            ${this.subtitle ? html`
                                <div class="modal-subtitle">${this.subtitle}</div>
                            `: ''}
                        </h2>
                        <iron-icon icon="vaadin:close" @click=${this.cancel}></iron-icon>
                    </header>
                `}

                <slot></slot>

                ${this.footer ? this.footer() : html`
                    <footer c6o="flex justify-between" slot="footer">
                        <div class="btn-group">
                            <c6o-button id="cancel-button" theme="${this.btnTheme}" @click=${this.cancel}>${btnText}</c6o-button>
                            ${this.deleteMessage?.length ? html`
                                <div id="delete-btn">
                                    <c6o-button ?disabled=${this.store?.busy} id="delete-button" theme="error" @click=${this.delete}>${this.deleteBtnText}</c6o-button>
                                    <c6o-confirm-dialog
                                        confirm-btn-theme="primary error"
                                        confirm-btn-text="Delete"
                                    ></c6o-confirm-dialog>
                                </div>
                            ` : ''}
                        </div>
                        <c6o-button ?disabled=${this.store?.busy} id="confirm-button" theme="${this.confirmBtnTheme}" @click=${this.save}>${this.confirmBtnText}</c6o-button>
                    </footer>
                `}
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