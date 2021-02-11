import { html, customElement, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssTooltip } from '@c6o/ui-theme'

/**
 * `<c6o-tooltip>` is a Web Component for rendering a tooltip on mouse hover.
 *
 * ```
 * <c6o-tooltip title="Infrastructure">
 *   <span slot="tooltip-content">
 *     <strong>Status:</strong>
 *     <span class="status-text ${clusterStore.iaasStatus}">${clusterStore.iaasStatus}</span>
 *   </span>
 * </c6o-tooltip>
 * ```
 *
 * Attribute   | Description
 * ------------|------------
 * `narrow`    | When set the tooltip will be a smaller width
 * `title`     | The tooltip's title
 *
 * @extends MobxLitElement
 */

@customElement('c6o-tooltip')
export class Tooltip extends MobxLitElement {

    @property({ type: Boolean })
    narrow = false

    @property({ type: String })
    title = 'Tooltip'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssTooltip
        ]
    }

    render() {
        return html`
            <button class="tooltip ${this.narrow ? 'narrow' : ''}">
                <span class="tooltiptext">
                    <div class="tooltip-header">${this.title}</div>
                    <div class="tooltip-content">
                        <slot name="tooltip-content"></slot>
                    </div>
                </span>
                <slot></slot>
            </button>
        `
    }
}