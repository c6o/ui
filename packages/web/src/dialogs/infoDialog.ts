import { html, customElement, property, CSSResult } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseDialog } from './baseDialog'

@customElement('c6o-info-dialog')
export class InfoDialog extends BaseDialog {

    @property({ type: Boolean, attribute: 'has-previous' })
    hasPrevious = false

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

                <footer c6o="${this.hasPrevious ? 'flex justify-between' : 'text-right'}" slot="footer">
                    ${this.hasPrevious ? html`
                        <c6o-button theme="${this.btnTheme}" @click=${this.previous}>Previous</c6o-button>
                    ` : ''}
                    <c6o-button class="close-button" theme="${this.btnTheme}" @click=${this.close}>${this.btnText}</c6o-button>
                </footer>
            </c6o-dialog>
        `
    }

    previous = (e) => {
        e.stopPropagation()
        const customEvent = new CustomEvent('previous', {
            bubbles: true,
            cancelable: false,
            composed: true
        })

        this.dispatchEvent(customEvent)
    }
}