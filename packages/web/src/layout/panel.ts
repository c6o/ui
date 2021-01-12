import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssAll } from '@c6o/ui-theme'

/**
 * `<c6o-panel>` is a Web Component for displaying content in a panel with a white background and padding.
 *
 * ```
 * <c6o-panel>
 *   <h2>${edition.displayName}</h2>
 *   <p>${edition.description}</p>
 * </c6o-panel>
 * ```
 *
 * Attribute  | Description
 * -----------|------------
 * `centered` | Set to center the content in the panel
 * `flex`     | Set to display the slotted content in a flex-box layout
 * `grid`     | Set to display the slotted content in a 12-column grid layout
 * `nested`   | Set when this panel is nested inside another panel
 * `sub-panel` | Set to give the panel a max-width
 *
 * @extends MobxLitElement
 */

@customElement('c6o-panel')
export class Panel extends MobxLitElement {

    @property({ type: Boolean })
    centered = false

    @property({ type: Boolean })
    flex = false

    @property({ type: Boolean })
    grid = false

    @property({ type: Boolean })
    nested = false

    @property({ type: Boolean })
    selectable = false

    @property({ type: Boolean, attribute: 'sub-panel' })
    subPanel = false

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            css`
                :host {
                    background-color: var(--color-white);
                    border: none;
                    border-radius: var(--c6o-border-radius);
                    color: var(--color-thunder);
                    display: block;
                    margin-bottom: var(--xl-spacing);
                    padding: var(--xl-spacing);
                }

                .nested {
                    background-color: var(--color-wind);
                }

                .nested div {
                    font-size: var(--lumo-font-size-s);
                }

                .sub-panel {
                    max-width: 500px;
                    padding: var(--md-spacing) var(--xxl-spacing);
                }

                .selectable {
                    cursor: pointer;
                }

                .selectable:hover {
                    box-shadow: 4px 4px 6px var(--color-wind);
                }
            `
        ]
    }

    render() {
        const classes = [
            this.nested ? 'nested' : '',
            this.selectable ? 'selectable' : '',
            this.subPanel ? 'sub-panel' : ''
        ].join(' ').trim()

        const layouts = [
            this.centered ? 'text-center' : 'text-left',
            this.flex ? 'flex' : '',
            this.grid ? 'grid' : ''
        ].join(' ').trim()

        return html`
            <slot c6o=${layouts} class=${classes}></slot>
        `
    }

    async connectedCallback() {
        await super.connectedCallback()
        if (this.flex && this.grid)
            throw new Error("Warning: Don't use both 'flex' and 'grid' on a panel component at the same time")
    }
}