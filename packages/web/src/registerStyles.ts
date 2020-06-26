import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

// Register any styles here that you want to apply to the shadow DOM of a Vaadin component
registerStyles('vaadin-button', css`
    :host {
        --lumo-button-size: var(--c6o-button-size);
        background-color: var(--color-white, #fff);
        border: 1px solid var(--color-sea);
        border-radius: 500px;
        color: var(--color-sea);
        cursor: var(--lumo-clickable-cursor);
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
        min-width: calc(var(--lumo-button-size) * 4);
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
        border-color: transparent;
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

    :host([theme~="warning"]:hover) {
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

    :host([theme~="error"][theme~="tertiary"]:hover) {
        color: var(--color-night-fire);
    }

    :host(.menu-link) {
        color: var(--color-thunder);
        padding: 0;
    }

    :host(.menu-link:hover) {
        text-decoration: none;
        color: var(--color-sea);
    }

    [part="label"], [part="prefix"], [part="suffix"] {
        line-height: var(--lumo-line-height-m);
    }

    [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding-top: 0;
        padding-bottom: 0;
    }

    :host(.inline-form-btn) {
        margin-top: 21px;
    }
`)

registerStyles('vaadin-checkbox vaadin-radio-button vaadin-text-area vaadin-text-field vaadin-upload', css`
    :host {
        margin-bottom: var(--xl-spacing);;
    }

    :host(.has-help-text) {
        margin-bottom: var(--xs-spacing);
    }

    :host > label {
        cursor: pointer;
    }
`)

registerStyles('vaadin-checkbox', css`
    :host {
        display: block;
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

    label {
        align-items: center;
    }

    [part="label"]:not([empty]) {
        text-transform: uppercase;
        font-size: var(--lumo-font-size-s);
    }
`)

registerStyles('vaadin-dialog-overlay', css`
    :host {
        top: -1rem;
    }
`)

registerStyles('vaadin-form-layout', css`
    :host(.max-width) {
        max-width: 35em;
    }
`)

registerStyles('vaadin-grid', css`
    :host [part~="row"] ::slotted(vaadin-grid-cell-content){
        padding-top: var(--md-spacing);
        padding-bottom: var(--md-spacing);
    }

    :host [part~="row"]:hover [part~="body-cell"]{
        background-color: var(--color-wind);
        cursor: pointer;
    }

    :host [part~="body-cell"] ::slotted(vaadin-grid-cell-content){
        cursor: pointer;
    }

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

registerStyles('vaadin-radio-button', css`
    :host {
        display: block;
    }

    [part="radio"] {
        height: 1.5em;
        width: 1.5em;
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

registerStyles('vaadin-select', css`
    :host([theme~="inline"]) {
        max-width: 300px;
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

registerStyles('vaadin-tab', css`
    :host([theme~="subnav-tab"]) {
        align-items: flex-end;
        padding-bottom: 1rem;
    }

    :host([theme~="subnav-tab"][selected])::before,
    :host([theme~="subnav-tab"][selected])::after {
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

    :host ::slotted(a.subnav.contextual) {
        color: var(--color-thunder) !important;
        font-weight: 400;
    }

    :host ::slotted(a.subnav.contextual:hover) {
        color: var(--color-ocean) !important;
    }

    :host([selected]) ::slotted(a.subnav.contextual) {
        color: var(--color-navy) !important;
        font-weight: 600;
    }

    :host([orientation="vertical"]) {
        min-height: var(--lumo-size-l);
        padding-left: 1.5em;
    }

    :host([orientation="vertical"])::before {
        background-color: var(--color-wind);
        height: var(--lumo-size-l);
        transform: translateY(50%) scale(1);
    }

    :host([selected])::before {
        background-color: var(--color-ocean);
    }

    :host([selected])::after {
        display: none;
    }
`)

registerStyles('vaadin-tabs', css`
    :host {
        box-shadow: none !important;
    }

    :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0;
    }
`)

registerStyles('vaadin-text-area vaadin-text-field', css`
    :host {
        --lumo-text-field-size: var(--c6o-field-size);
        --vaadin-text-field-default-width: var(--c6o-default-field-width, 25rem);
        padding-bottom: 0;
        padding-top: 0;
    }

    :host(:focus) {
        outline: none !important;
    }

    :host([has-label]) {
        padding-top: 0;
    }

    :host(.search-field) {
        margin-bottom: 0;
    }

    :host(.search-field) [part="value"] {
        font-size: var(--lumo-font-size-s);
    }

    :host(.single-row) {
        margin-left: 0 !important;
        margin-right: 100% !important;
    }

    [part="input-field"] ::slotted([part="value"]) {
        cursor: pointer;
    }

    :host([theme~="reversed"]) [part="input-field"] {
        background-color: hsla(214, 69%, 84%, 0.32);
    }

    :host([theme~="reversed"]) [part="input-field"] ::slotted(iron-icon) {
        color: var(--color-snow);
    }

    :host([theme~="reversed"]) [part="value"] {
        color: var(--color-snow);
    }
`)

registerStyles('vaadin-text-area', css`
    :host(.min-height) {
        min-height: 130px;
    }

    :host(.full-height) {
        min-height: 300px;
    }
`)

registerStyles('vaadin-upload', css`
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
`)


