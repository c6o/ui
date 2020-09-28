import { html, customElement, property } from 'lit-element'
import { cssTooltip } from '@c6o/ui-theme'
import { StyledMobxLitElement } from './styles'

@customElement('c6o-tooltip')
export class Tooltip extends StyledMobxLitElement(cssTooltip)  {

    @property({ type: String })
    title = 'Tooltip'

    @property({ type: Boolean })
    narrow = false

    @property({ type: String })
    content

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