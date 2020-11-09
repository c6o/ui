import { html, customElement, CSSResult } from 'lit-element'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseStoreDialog } from './baseStoreDialog'

@customElement('c6o-custom-store-dialog')
export class CustomStoreDialog extends BaseStoreDialog {

    footer?()
    header?()

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals
        ]
    }

    render() {
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
            </c6o-dialog>
        `
    }
}