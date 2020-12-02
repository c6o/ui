import { html, customElement, CSSResult, property } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseDialog } from './baseDialog'

@customElement('c6o-confirm-dialog')
export class ConfirmationDialog extends BaseDialog {

    @property({ type: Function })
    callback

    @property({ type: Boolean, attribute: 'hide-confirm' })
    hideConfirm = false

    @property({ type: String, attribute: 'confirm-btn-text' })
    confirmBtnText = 'OK'

    @property({ type: String, attribute: 'confirm-btn-theme' })
    confirmBtnTheme = 'primary'

    @property({ type: String })
    message: string

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals
        ]
    }

    render() {
        const title = this.title || 'Please Confirm'

        return html`
            <c6o-dialog classes=${this.cssClasses} ?opened=${this.opened}>
                <header slot="header">
                    <h2 class="modal-title">${title}</h2>
                    <iron-icon icon="vaadin:close" @click=${this.cancel}></iron-icon>
                </header>

                ${this.message?.length ? html`
                    <p>${this.message}</p>
                ` : html`
                    <slot></slot>
                `}

                <footer c6o="flex justify-between" slot="footer">
                    <c6o-button id="cancel-button" theme="${this.btnTheme}" @click=${this.cancel}>${this.btnText}</c6o-button>
                    <c6o-button ?hidden=${this.hideConfirm} id="confirm-button" theme="${this.confirmBtnTheme}" @click=${this.confirm}>${this.confirmBtnText}</c6o-button>
                </footer>
            </c6o-dialog>
        `
    }

    show(message: string) {
        this.message = message
        this.open()

        return new Promise((resolve) => {
            this.callback = (confirmed: boolean) => {
                resolve(confirmed)
            }
        })
    }

    cancel = async () => {
        this.callback(false)
        this.close()
    }

    confirm = async () => {
        this.callback(true)
        this.close()
    }
}
