import { html, customElement, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssTooltip } from '@c6o/ui-theme'

@customElement('c6o-tooltip')
export class Tooltip extends MobxLitElement {

    @property({ type: String })
    title = 'Tooltip'

    @property({ type: Boolean })
    narrow = false

    @property({ type: String })
    content

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