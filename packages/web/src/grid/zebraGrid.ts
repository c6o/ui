import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { EntityListStore } from '@c6o/common'
import { cssAll } from '@c6o/ui-theme'

/**
 * `<c6o-zebra-grid>` is a Web Component that provides a grid styled using zebra stripes.
 *
 * NOTE: This will NOT work by passing an array of items to the grid. You must use this component with a listStore.
 *
 * ```
 * <c6o-zebra-grid
 *   .listStore=${this.appsListStore}
 *   @active-item-changed=${this.activeItemChanged}
 * >
 *   <c6o-grid-column auto-width flex-grow="0" .renderer=${this.renderIcon}></c6o-grid-column>
 *   <c6o-grid-column header="App Name" path="displayName"></c6o-grid-column>
 *   <c6o-grid-column header="Editions" .renderer=${this.renderEditions}></c6o-grid-column>
 * </c6o-zebra-grid>
 * ```
 *
 * Property    | Description
 * ------------|------------
 * `listStore` | The EntityListStore that will be used for the grid's data
 *
 * @extends MobxLitElement
 */

@customElement('c6o-zebra-grid')
export class ZebraGrid extends MobxLitElement {

    @property({ type: String })
    height = '100%'

    @property({ type: Object })
    listStore: EntityListStore

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            css`
                img {
                    border-radius: var(--c6o-border-radius);
                    height: var(--c6o-icon-height-sm, 40px);
                    width: var(--c6o-icon-height-sm, 40px);
                }
            `
        ]
    }

    render() {
        return html`
            <c6o-grid
                .listStore=${this.listStore}
                style="height: ${this.height}"
                theme="wrap-cell-content no-border row-stripes"
                @active-item-changed=${this.activeItemChanged}
            >
                <slot></slot>
            </c6o-grid>
        `
    }

    activeItemChanged = (e) => {
        const customEvent = new CustomEvent('active-item-changed', {
            bubbles: true,
            composed: true,
            detail: e.detail
        })

        this.dispatchEvent(customEvent)
    }
}