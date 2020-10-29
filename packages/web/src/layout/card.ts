import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase } from '@c6o/ui-theme'

@customElement('c6o-card')
export class Card extends MobxLitElement {

    @property({ type: Boolean })
    centered = false

    @property({ type: String })
    gap = 'var(--xl-spacing)'

    @property({ type: String })
    width = 'auto'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            css`
                :host {
                    display: block;
                    margin-bottom: var(--lg-spacing);
                }

                #card {
                    background-color: var(--color-white);
                    box-shadow: 4px 4px 10px var(--color-cloud);
                    height: 100%;
                    padding: var(--xl-spacing);
                }

                #card.center {
                    text-align: center;
                }

                ::slotted(.icon) {
                    margin: 0 auto var(--xl-spacing);
                }
            `
        ]
    }

    render() {
        return html`
            <div class="${this.centered ? 'center' : ''}" id="card" style="margin: 0 ${this.gap}; width: ${this.width}">
                <slot></slot>
            </div>
        `
    }
}