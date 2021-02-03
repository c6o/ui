import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-accordion-panel', css`
    :host([opened]) [part="content"] {
        margin-bottom: var(--md-spacing);
    }

    [part~="summary"] {
        cursor: var(--lumo-clickable-cursor);
    }

    [part~="summary-content"] ::slotted(*) {
        margin: var(--md-spacing) 0;
    }

    :host([theme~="condensed"][opened]) [part="content"] {
        margin-bottom: var(--xs-spacing);
    }

    :host([theme~="condensed"]) [part~="summary-content"] ::slotted(*) {
        margin: var(--xs-spacing) 0;
    }

    :host([theme~="compact"][opened]) [part="content"] {
        margin-bottom: var(--md-spacing);
    }

    :host([theme~="compact"]) [part~="summary-content"] ::slotted(*) {
        margin: var(--md-spacing) 0;
    }

`)