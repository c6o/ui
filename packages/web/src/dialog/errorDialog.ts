import { html } from 'lit-element'
import { SimpleDialog } from './simpleDialog'

// This is a Polymer element so we can't use the lit-element @customElement decorator
export class ErrorDialog extends SimpleDialog {

    renderModalContent = () => {
        return html`
            <style>
                .error-content {
                    align-items: flex-start;
                    display: flex;
                    flex-wrap: nowrap;
                }
                .error-content iron-icon {
                    flex-shrink: 0;
                }
            </style>
            <div class="error-content">
                <iron-icon class="error" icon="vaadin:exclamation-circle"></iron-icon>
                <span>
                    ${this.message}
                </span>
            </div>
        `
    }
}

customElements.define('c6o-error-dialog', ErrorDialog)