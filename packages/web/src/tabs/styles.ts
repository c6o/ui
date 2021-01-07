import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-tab', css`
    :host {
        align-items: center;
        color: var(--color-navy) !important;
        display: flex;
        font-weight: 500;
        justify-content: center;
        padding-top: var(--lg-spacing);
    }

    :host(:hover) {
        color: var(--color-sea) !important;
    }

    :host([selected]) {
        color: var(--color-navy) !important;
        font-weight: 600;
    }

    :host([selected]):hover) {
        color: var(--color-navy) !important;
    }

    :host([selected])::before {
        background-color: var(--color-sea) !important;
        width: 80%;
    }

    :host([selected])::after {
        display: none !important;
    }

    :host([orientation="vertical"]) {
        color: var(--color-thunder) !important;
        font-weight: 400;
        justify-content: flex-start;
        min-height: var(--lumo-size-l);
        padding-left: 1.5em;
    }

    :host([orientation="vertical"])::before {
        background-color: var(--color-wind);
        height: var(--lumo-size-l);
        transform: translateY(50%) scale(1);
        width: 2px;
    }

    :host([orientation="vertical"]:hover) {
        color: var(--color-sea) !important;
    }

    :host([orientation="vertical"][selected]) {
        color: var(--color-navy) !important;
        font-weight: 700;
    }
`)

registerStyles('vaadin-tabs', css`
    :host {
        box-shadow: none !important;
    }

    :host [part="tabs"] ::slotted(c6o-tab) {
        margin-left: 0;
    }

    :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0;
    }

    :host([theme~="thin"]) [part="tabs"] ::slotted(c6o-tab) {
        color: var(--color-thunder) !important;
        font-weight: 400;
    }

    :host([theme~="thin"]) [part="tabs"] ::slotted(c6o-tab[selected]) {
        color: var(--color-navy) !important;
        font-weight: 600;
    }

    :host([theme~="light"]) [part="tabs"] ::slotted(c6o-tab) {
        color: var(--color-snow) !important;
    }

    :host([theme~="light"]) [part="tabs"] ::slotted(c6o-tab[selected]::before) {
        background-color: var(--color-white);
    }
`)