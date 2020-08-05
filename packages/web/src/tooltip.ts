import { html, customElement, property, CSSResult } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssTooltip } from '@c6o/ui-theme'

@customElement('c6o-tooltip')
export class Tooltip extends MobxLitElement {

    @property({ type: String })
    title = 'Tooltip'

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
            <button class="tooltip">
                <span class="tooltiptext">
                    <div class="tooltip-header">${this.title}</div>
                    <div class="tooltip-content">${unsafeHTML(this.content)}</div>
                </span>
                <slot></slot>
            </button>
        `
    }
}