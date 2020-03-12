import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

// Register any styles here that you want to apply to the shadow DOM of a Vaadin component
registerStyles('vaadin-checkbox vaadin-radio-button vaadin-grid-cell-content', css`
    :host > label {
        cursor: pointer;
    }
`)

registerStyles('vaadin-checkbox vaadin-radio-button', css`
    :host {
        display: block;
        padding-bottom: var(--lumo-space-xm);
    }
`)

registerStyles('vaadin-text-field', css`
    :host {
        width: 20rem;
    }
`)
