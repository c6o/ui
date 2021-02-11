import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-select', css`
    :host([theme~="inline"]) {
        max-width: 300px;
        width: 100%;
    }
`)

registerStyles('vaadin-select-text-field', css`
    :host([theme~="account-switcher"]) {
        margin-bottom: 0;
        background: none;
        color: var(--color-snow);
    }

    :host([theme~="account-switcher"]:hover) {
        background: none;
    }

    :host([theme~="account-switcher"]) [part="input-field"] {
        background: none;
    }

    :host([theme~="account-switcher"]) ::slotted([part$="button"]) {
        color: var(--color-snow) !important;
    }

    :host([theme~="inline"]) {
        margin-bottom: 0;
    }
`)

registerStyles('vaadin-select-overlay', css`
    :host([theme~="account-switcher"]) [part~="overlay"] {
        padding: 0;
        outline: none !important;
    }

    :host([theme~="account-switcher"]) [part~="content"] {
        padding: 0;
    }
`)