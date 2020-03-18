import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

// Register any styles here that you want to apply to the shadow DOM of a Vaadin component
registerStyles('vaadin-button', css`
    :host {
        cursor: pointer;
    }
`)

registerStyles('vaadin-form-item', css`

`)

registerStyles('vaadin-checkbox vaadin-radio-button vaadin-combo-box', css`
    :host {
        display: block;
        padding-bottom: var(--lumo-space-xm);
    }

    :host > label {
        cursor: pointer;
    }
`)

registerStyles('vaadin-text-field', css`
    :host {
        padding-bottom: var(--lumo-space-xm);
    }
`)

registerStyles('vaadin-dialog-overlay', css`
    :host {
        top: -1rem;
    }
`)

registerStyles('vaadin-menu-bar', css`
    vaadin-menu-bar-button {
        cursor: pointer;
    }
`)

registerStyles('vaadin-context-menu-overlay', css`

`)

registerStyles('vaadin-list-box', css`

`)

registerStyles('vaadin-item', css`

`)
