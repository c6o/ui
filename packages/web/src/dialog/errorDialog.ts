import { html, customElement, property, query, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { WebDialog } from 'web-dialog'
import { cssAll, cssModals } from '@c6o/ui-theme'

@customElement('c6o-error-dialog')
export class ErrorDialog extends MobxLitElement {

    // Use either the message property or provide content for the <slot>
    @property({ type: String })
    message: string

    @property({ type: Boolean })
    opened = false

    @property({ type: String })
    theme = 'error'

    @property({ type: String })
    title = 'Error'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals,
            css`
                #error-content {
                    flex-wrap: nowrap;
                }

                iron-icon {
                    flex-shrink: 0;
                }

                span {
                    overflow-wrap: anywhere;
                }
            `
        ]
    }

    @query('web-dialog')
    dialog: WebDialog

    render() {
        return html`
            <c6o-dialog ?opened=${this.opened}>
                <header slot="header">
                    <h2 class="modal-title">
                        ${this.title}
                    </h2>
                    <iron-icon icon="vaadin:close" @click=${this.close}></iron-icon>
                </header>

                <div c6o="flex align-start" id="error-content">
                    <iron-icon class="${this.theme}" icon="vaadin:exclamation-circle"></iron-icon>
                    <span>
                        ${this.message?.length ?
                            html`${this.message}` :
                            html`<slot></slot>`}
                    </span>
                </div>

                <footer c6o="text-right" slot="footer">
                    <c6o-button class="close-button" theme="default" @click=${this.close}>Close</c6o-button>
                </footer>
            </c6o-dialog>
        `
    }

    close = () => {
        this.opened = false
    }

    // These are necessary to set opened to false if the user clicks outside of the dialog to close it
    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('close', this.close)
    }

    async disconnectedCallback() {
        this.removeEventListener('close', this.close)
        await super.disconnectedCallback()
    }
}
