import { html, customElement, property, query, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { WebDialog } from 'web-dialog'
import { cssReboot, cssBase, cssGrid, cssTypography, cssModals } from '@c6o/ui-theme'

@customElement('c6o-info-dialog')
export class InfoDialog extends MobxLitElement {

    @property({ type: String })
    btnTheme = 'default'

    @property({ type: String })
    btnText = 'Close'

    @property({ type: Boolean, attribute: 'max-height' })
    maxHeight: boolean

    @property({ type: Boolean, attribute: 'min-height' })
    minHeight: boolean

    @property({ type: Boolean })
    opened = false

    @property({ type: String })
    subtitle: string

    @property({ type: String })
    title = 'CodeZero'

    @property({ type: Boolean })
    wide: boolean

    // https://github.com/andreasbm/web-dialog/blob/master/src/lib/web-dialog.ts
    @query('web-dialog')
    dialog: WebDialog

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            cssTypography,
            cssModals
        ]
    }

    render() {
        const classes = `${this.wide ? 'wide' : ''} ${this.maxHeight ? 'max-height' : ''} ${this.minHeight ? 'min-height' : ''}`
        return html`
            <c6o-dialog classes=${classes} ?opened=${this.opened}>
                <header slot="header">
                    <h2 class="modal-title">
                        ${this.title}
                        ${this.subtitle ? html`
                            <div class="modal-subtitle">${this.subtitle}</div>
                        `: ''}
                    </h2>
                    <iron-icon icon="vaadin:close" @click=${this.close}></iron-icon>
                </header>

                <slot></slot>

                <footer c6o="text-right" slot="footer">
                    <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</c6o-button>
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