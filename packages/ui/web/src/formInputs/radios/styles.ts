import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-radio-button', css`
    :host {
        display: block;
        margin-bottom: var(--xl-spacing);;
    }

    :host > label {
        cursor: pointer;
    }

    :host([theme~="condensed"]) {
        margin-bottom: var(--xs-spacing);
    }

    :host([theme~="compact"]) {
        margin-bottom: var(--md-spacing);
    }

    [part="error-message"] {
        text-align: left;
    }

    [part="radio"] {
        height: 22px;
        width: 22px;
    }

    [part="radio"]::after {
        border-width: 4px;
    }

    [part="label"] {
        font-size: var(--lumo-font-size-s);
        text-transform: uppercase;
    }

    label {
        align-items: center;
    }
`)