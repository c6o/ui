import { LitElement, html, css, customElement, CSSResult } from 'lit-element'
import { cssReboot, cssBase, cssGrid } from '@c6o/ui-theme'

@customElement('c6o-toolbar')
export class Toolbar extends LitElement {
    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            css`
                :host {
                    display: block;
                    margin-bottom: var(--md-spacing);
                    position: relative;
                }

                ::slotted(p) {
                    margin-bottom: 0 !important;
                }
            `
        ]
    }

    render() {
        return html`
            <slot c6o="flex justify-between align-end"></slot>
        `
    }
}