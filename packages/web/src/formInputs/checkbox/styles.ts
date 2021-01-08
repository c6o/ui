import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-checkbox', css`
    :host {
        display: block;
        margin-bottom: var(--xl-spacing);
    }

    :host > label {
        cursor: pointer;
    }

    :host([theme~="condensed"]) {
        margin-bottom: var(--xs-spacing);
    }

    [part="error-message"] {
        text-align: left;
    }

    [part="checkbox"] {
        height: calc(1em + 10px);
        width: calc(1em + 10px);
    }

    [part="checkbox"]::after {
        left: .6em;
        top: 1.2em;
    }

    :host([checked]) [part="checkbox"]::after {
        height: 1.9em;
        width: .9em;
    }

    :host([theme~="small"]) {
        font-size: var(--lumo-font-size-xs);
    }

    :host([theme~="small"]) [part="checkbox"]::after {
        left: .65em;
        top: 1.3em;
    }

    label {
        align-items: center;
    }

    [part="label"]:not([empty]) {
        font-size: var(--lumo-font-size-s);
        line-height: 1.3;
    }
`)