import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-grid', css`
    :host {
        margin-bottom: var(--xl-spacing);
    }

    :host [part~="row"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 500;
        padding-top: var(--md-spacing);
        padding-bottom: var(--md-spacing);
    }

    :host [part~="row"]:hover {
        z-index: 1;
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

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        overflow: visible;
    }

    [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
    [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
    [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-md);
        font-weight: 700;
    }
`)
