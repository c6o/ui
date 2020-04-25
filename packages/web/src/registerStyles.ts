import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

// Register any styles here that you want to apply to the shadow DOM of a Vaadin component
registerStyles('vaadin-button', css`
    :host {
        --lumo-button-size: var(--c6o-button-size);
        background-color: var(--color-white, #fff);
        border: 1px solid var(--color-sea);
        border-radius: 500px;
        color: var(--color-sea);
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
        margin: 0;
        padding-left: var(--lumo-space-xl);
        padding-right: var(--lumo-space-xl);
    }

    :host(:hover) {
        background-color: var(--color-sea);
        color: var(--color-white);
    }

    :host([theme="primary"]) {
        background-color: var(--color-sea);
        border: none;
        color: var(--color-white);
    }

    :host([theme="primary"]:hover) {
        background-color: var(--color-morning-sea);
    }

    :host([theme="tertiary"]) {
        border: none;
    }

    :host([theme="tertiary"]:hover) {
        color: var(--color-morning-sea);
        opacity: 1 !important;
    }

    :host(.btn-default) {
        border-color: var(--color-rain);
        color: var(--color-storm);
    }

    :host(.btn-default:hover) {
        background-color: var(--color-rain);
        border: none;
        color: var(--color-white);
    }

    :host(.btn-info) {
        border-color: var(--color-sea);
        color: var(--color-sea);
    }

    :host(.btn-info:hover) {
        background-color: var(--color-sea);
        color: var(--color-white);
    }

    :host(.btn-info[theme="primary"]) {
        color: var(--color-white);
    }

    :host(.btn-info[theme="primary"]:hover) {
        background-color: var(--color-morning-sea);
        color: var(--color-white);
    }

    :host(.btn-success) {
        border-color: var(--color-ocean);
        color: var(--color-ocean);
    }

    :host(.btn-success:hover) {
        background-color: var(--color-ocean);
        color: var(--color-white);
    }

    :host(.btn-success[theme="primary"]) {
        background-color: var(--color-ocean);
        color: var(--color-white);
    }

    :host(.btn-success[theme="primary"]:hover) {
        background-color: var(--color-twilight-ocean);
        color: var(--color-white);
    }

    :host(.btn-warning) {
        border-color: var(--color-sun);
        color: var(--color-thunder);
    }

    :host(.btn-warning:hover) {
        background-color: var(--color-sun);
        color: var(--color-navy);
    }

    :host(.btn-warning[theme="primary"]) {
        background-color: var(--color-sun);
        color: var(--color-thunder);
    }

    :host(.btn-warning[theme="primary"]:hover) {
        background-color: var(--color-evening-sun);
        color: var(--color-white);
    }

    :host(.btn-danger) {
        border-color: var(--color-fire);
        color: var(--color-fire);
    }

    :host(.btn-danger:hover) {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    :host(.btn-danger[theme="primary"]) {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    :host(.btn-danger[theme="primary"]:hover) {
        background-color: var(--color-night-fire);
        color: var(--color-white);
    }

    [part="label"], [part="prefix"], [part="suffix"] {
        line-height: var(--lumo-line-height-m);
    }

    [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding-top: 0;
        padding-bottom: 0;
    }
`)

registerStyles('vaadin-form-item', css`

`)

registerStyles('vaadin-checkbox vaadin-radio-button vaadin-combo-box', css`
    :host {
        display: block;
        padding-bottom: var($lg-spacing);;
    }

    :host > label {
        cursor: pointer;
    }
`)

registerStyles('vaadin-text-field', css`
    :host {
        --lumo-text-field-size: var(--c6o-field-size);
        padding-bottom: var($lg-spacing);
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
        border: none;
        border-radius: 0;
    }
`)

registerStyles('vaadin-context-menu-overlay', css`

`)

registerStyles('vaadin-list-box', css`

`)

registerStyles('vaadin-text-field', css`
    :host [part="input-field"] {
        border-radius: 0;
    }

    :host(.search-field) [part="value"] {
        font-size: var(--lumo-font-size-s);
    }
`)
