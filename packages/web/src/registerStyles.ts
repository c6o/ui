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

    :host([theme~="primary"]) {
        background-color: var(--color-sea);
        border: none;
        color: var(--color-white);
    }

    :host([theme~="primary"]:hover) {
        background-color: var(--color-morning-sea);
    }

    :host([theme~="tertiary"]) {
        border: none;
    }

    :host([theme~="tertiary"]:hover) {
        color: var(--color-morning-sea);
        opacity: 1 !important;
    }

    :host([theme~="default"]) {
        border-color: var(--color-rain);
        color: var(--color-storm);
    }

    :host([theme~="default"]:hover) {
        background-color: var(--color-rain);
        border: none;
        color: var(--color-white);
    }

    :host([theme~="info"]) {
        border-color: var(--color-sea);
        color: var(--color-sea);
    }

    :host([theme~="info"]:hover) {
        background-color: var(--color-sea);
        color: var(--color-white);
    }

    :host([theme~="info"][theme~="primary"]) {
        color: var(--color-white);
    }

    :host([theme~="info"][theme~="primary"]:hover) {
        background-color: var(--color-morning-sea);
        color: var(--color-white);
    }

    :host([theme~="success"]) {
        border-color: var(--color-ocean);
        color: var(--color-ocean);
    }

    :host([theme~="success"]:hover) {
        background-color: var(--color-ocean);
        color: var(--color-white);
    }

    :host([theme~="success"][theme~="primary"]) {
        background-color: var(--color-ocean);
        color: var(--color-white);
    }

    :host([theme~="success"][theme~="primary"]:hover) {
        background-color: var(--color-twilight-ocean);
        color: var(--color-white);
    }

    :host([theme~="warning"]) {
        border-color: var(--color-sun);
        color: var(--color-thunder);
    }

    :host(.[theme~="warning"]:hover) {
        background-color: var(--color-sun);
        color: var(--color-navy);
    }

    :host([theme~="warning"][theme~="primary"]) {
        background-color: var(--color-sun);
        color: var(--color-thunder);
    }

    :host([theme~="warning"][theme~="primary"]:hover) {
        background-color: var(--color-evening-sun);
        color: var(--color-white);
    }

    :host([theme~="error"]) {
        border-color: var(--color-fire);
        color: var(--color-fire);
    }

    :host([theme~="error"]:hover) {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    :host([theme~="error"][theme~="primary"]) {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    :host([theme~="error"][theme~="primary"]:hover) {
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

    :host(.menu-link) {
        color: var(--color-thunder);
        padding: 0;
    }

    :host(.menu-link:hover) {
        text-decoration: none;
        color: var(--color-sea);
    }
`)

registerStyles('vaadin-checkbox vaadin-radio-button vaadin-combo-box', css`
    :host {
        display: block;
        padding-bottom: var(--lg-spacing);;
    }

    :host > label {
        cursor: pointer;
    }
`)

registerStyles('vaadin-dialog-overlay', css`
    :host {
        top: -1rem;
    }
`)

registerStyles('vaadin-grid', css`
    [part~="header-cell"] {
        background-color: var(--color-rain);
        color: var(--color-white);
        font-weight: 700;
    }

    [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
    [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
    [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-md);
        font-weight: 700;
    }

    :host [part~="row"]:hover [part~="body-cell"]{
        background-color: var(--color-wind);
        cursor: pointer;
    }

    :host [part~="body-cell"] ::slotted(vaadin-grid-cell-content){
        cursor: pointer;
    }
`)

registerStyles('vaadin-item', css`
    :host {
        font-size: var(--lumo-font-size-s);
    }

    :host(:focus) {
        outline: none !important;
    }

    :host([theme~="account-switcher"]) {
        font-size: var(--lumo-font-size-s);
        text-align: left;
    }

    :host([theme~="logout"]) {
        color: var(--color-fire);
        margin-bottom: var(--sm-spacing);
    }

    :host([tabindex])::after {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--color-white);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
    }

    :host([tabindex]:hover)::after {
        color: var(--color-sea);
    }

    :host([selected])::after {
        opacity: 1;
    }
`)

registerStyles('vaadin-list-box', css`
    [part="items"] ::slotted(.profile) {
        font-size: var(--lumo-font-size-s);
        margin-top: var(--sm-spacing);
        padding: var(--sm-spacing) var(--lg-spacing);
        text-align: left;
    }

    [part="items"] ::slotted(.dropdown-item) {
        font-size: var(--lumo-font-size-s);
        padding: 0 var(--lg-spacing);
        text-align: left;
    }

    [part="items"] ::slotted(vaadin-item) {
        border-radius: 0;
        height: 45px;
        padding: var(--sm-spacing) var(--lg-spacing);
    }

    [part="items"] ::slotted(vaadin-item)::before {
        display: none;
    }

    [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--color-wind);
        color: var(--color-navy);
    }

    [part="items"] ::slotted(vaadin-item[selected]) {
        background-color: var(--color-sea);
        color: var(--color-white);
    }
`)

registerStyles('vaadin-menu-bar', css`
    vaadin-menu-bar-button {
        cursor: pointer;
        border: none;
        border-radius: 0;
    }
`)

registerStyles('vaadin-select-text-field', css`
    :host([theme~="account-switcher"]) {
        padding-bottom: 0;
        background: none;
        color: var(--color-navy);
    }

    :host([theme~="account-switcher"]:hover) {
        background: none;
    }

    :host([theme~="account-switcher"]) [part="input-field"] {
        background: none;
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

registerStyles('vaadin-tab', css`
    :host([theme~="authenticated-subnav"]) {
        align-items: flex-end;
    }

    :host([selected])::before,
    :host([selected])::after {
        background-color: var(--color-ocean);
        width: 100%;
    }

    :host ::slotted(a.subnav) {
        color: var(--color-navy) !important;
        font-weight: 500;
    }

    :host ::slotted(a.subnav:hover) {
        color: var(--color-ocean) !important;
    }

    :host([selected]) ::slotted(a.subnav) {
        color: var(--color-navy) !important;
        font-weight: 700;
    }

    :host([selected]) ::slotted(a.subnav:hover) {
        color: var(--color-navy) !important;
    }
`)

registerStyles('vaadin-tabs', css`
    :host(:not([orientation="vertical"])) {
        box-shadow: none;
    }

    :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0;
    }
`)

registerStyles('vaadin-text-field', css`
    :host {
        --lumo-text-field-size: var(--c6o-field-size);
        padding-bottom: var(--lg-spacing);
        padding-top: 0;
        --vaadin-text-field-default-width: 25em;
    }

    :host(:focus) {
        outline: none !important;
    }

    :host(.search-field) {
        padding-bottom: 0;
    }

    :host(.search-field) [part="value"] {
        font-size: var(--lumo-font-size-s);
    }

    [part="input-field"] ::slotted([part="value"]) {
        cursor: pointer;
    }
`)
