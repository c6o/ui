import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase } from '@c6o/ui-theme'

/**
 * `<c6o-card>` is a Web Component for displaying content in a card UI.
 *
 * ```
 * <c6o-card width="350px">
 *   <h2>${edition.displayName}</h2>
 *   <p>${edition.description}</p>
 * </c6o-card>
 * ```
 *
 * Attribute  | Description
 * -----------|------------
 * `centered` | Set to center the content in the card
 * `gap`      | Set the left and right margin that separates each card
 * `width`    | Set to give each card a specific width
 *
 * @extends MobxLitElement
 */

@customElement('c6o-card')
export class Card extends MobxLitElement {

    @property({ type: Boolean })
    centered = false

    @property({ type: String })
    gap = 'var(--md-spacing)'

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

                @media screen and (max-width: 1000px), screen and (max-height: 800px) {
                    #card {
                        max-width: 300px !important;
                    }
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