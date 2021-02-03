import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-upload', css`
    :host {
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

    :host([theme~="centered"]) {
        text-align: center;
    }

    [part~="primary-buttons"] {
        padding: 1rem;
    }

    [part~="upload-button"] {
        cursor: pointer;
        margin-bottom: var(--xs-spacing);
    }

    [part="drop-label"] {
        font-size: var(--lumo-font-size-s);
    }
`)

registerStyles('vaadin-upload-file', css`
    [part~="status"] {
        color: var(--color-sea);
    }

    [part="done-icon"]::before,
    [part="warning-icon"]::before,
    [part="start-button"]::before,
    [part="retry-button"]::before,
    [part="clear-button"]::before {
        vertical-align: -.1em;
    }

    [part="clear-button"] {
        color: var(--color-fire);
    }

    [part="row"] {
        align-items: center;
    }
`)