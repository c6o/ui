import { html, customElement, CSSResult } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseDialog } from './baseDialog'

@customElement('c6o-info-dialog')
export class InfoDialog extends BaseDialog {

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals
        ]
    }

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
                    <iron-icon icon="vaadin:close" @click=${this.close}></iron-icon>
                </header>

                <slot></slot>

                <footer c6o="text-right" slot="footer">
                    <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</c6o-button>
                </footer>
            </c6o-dialog>
        `
    }
}