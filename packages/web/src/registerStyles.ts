import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

// Register any styles here that you want to apply to the shadow DOM of a Vaadin component
registerStyles('vaadin-context-menu-item', css`
    :host([tabindex])::before {
        opacity: 0;
    }

    :host([tabindex])::after {
        color: var(--color-sea);
    }
`)

registerStyles('vaadin-dialog-overlay', css`
    :host {
        top: -1rem;
        z-index: 1000;
    }
`)

registerStyles('vaadin-form-layout', css`
    :host(.max-width) {
        max-width: 35em;
    }
`)

registerStyles('vaadin-item', css`
    :host(:focus) {
        outline: none !important;
    }

    :host([theme~="account-switcher"]) {
        font-size: var(--lumo-font-size-s);
        text-align: left;
    }

    :host([theme~="profile"]) {
        margin-top: var(--sm-spacing);
    }

    :host([theme~="logout"]) {
        color: var(--color-fire);
        margin-bottom: var(--sm-spacing);
    }

    :host([tabindex])::after {
        color: var(--color-white);
        content: var(--lumo-icons-checkmark);
        display: var(--_lumo-item-selected-icon-display, none);
        flex: none;
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        font-weight: normal;
        height: 1em;
        line-height: 1;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
        width: 1em;
    }

    :host([tabindex]:hover)::after {
        color: var(--color-sea);
    }

    :host([theme~="profile"][tabindex])::after {
        display: none;
    }

    :host([selected])::after {
        opacity: 1;
    }

    :host([selected])::before,
    :host([tabindex])::before {
        display: none;
    }
`)

registerStyles('vaadin-list-box', css`
    [part="items"] ::slotted(.profile) {
        font-size: var(--lumo-font-size-s);
        margin-top: var(--sm-spacing);
        padding: var(--sm-spacing) var(--lg-spacing);
        text-align: left;
    }

    [part="items"] ::slotted(.heading) {
        font-size: var(--lumo-font-size-xs);
        font-weight: 500;
        padding: var(--xs-spacing) var(--lg-spacing) var(--sm-spacing);
        text-align: left;
        text-transform: uppercase;
    }

    [part="items"] ::slotted(.dropdown-item) {
        font-size: var(--lumo-font-size-s);
        padding: 0 var(--lg-spacing);
        text-align: left;
    }

    [part="items"] ::slotted(c6o-item),
    [part="items"] ::slotted(vaadin-item) {
        border-radius: 0;
        cursor: pointer;
        height: 45px;
        padding: var(--sm-spacing) var(--lg-spacing);
    }

    [part="items"] ::slotted(c6o-item:nth-child(even):not([theme~="logout"])),
    [part="items"] ::slotted(vaadin-item:nth-child(even):not([theme~="logout"])) {
        background-color: var(--color-snow);
    }

    [part="items"] ::slotted(c6o-item)::before,
    [part="items"] ::slotted(vaadin-item)::before {
        display: none;
    }

    [part="items"] ::slotted(c6o-item:hover:not([disabled])),
    [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--color-wind) !important;
        color: var(--color-navy) !important;
    }

    [part="items"] ::slotted(c6o-item[selected]),
    [part="items"] ::slotted(vaadin-item[selected]) {
        background-color: var(--color-sea) !important;;
        color: var(--color-white) !important;;
    }

    [part="items"] ::slotted(c6o-item[selected][theme~="profile"]),
    [part="items"] ::slotted(vaadin-item[selected][theme~="profile"]) {
        background-color: transparent !important;
    }

    [part="items"] ::slotted(c6o-item[theme~="profile"]),
    [part="items"] ::slotted(vaadin-item[theme~="profile"]) {
        background-color: transparent;
    }

    [part="items"] ::slotted([focus-ring]) {
        box-shadow: inset 0 0 2px 0 var(--color-sea) !important;
    }

    :host([theme~="account-switcher"]) [part="items"] ::slotted([focus-ring]) {
        box-shadow: none !important;
    }
`)

registerStyles('vaadin-menu-bar', css`
    [part="menu-bar-button"] {
        cursor: pointer;
        border: none;
        border-radius: 0;
    }

    [part="menu-bar-button"][theme="hub"] {
        color: var(--color-white);
        min-width: auto;
    }

    [part="menu-bar-button"][theme="system"] {
        background: none;
        color: var(--color-white);
    }

    [part="menu-bar-button"][theme="system"]:hover {
        background: none;
    }
`)

registerStyles('vaadin-progress-bar', css`
    :host([theme~="light"]) [part="bar"] {
        background-color: var(--color-white);
    }
`)
