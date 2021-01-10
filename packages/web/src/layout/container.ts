import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssGrid } from '@c6o/ui-theme'

/**
 * `<c6o-container>` is a Web Component for displaying content in a max-width and optionally padded container.
 *
 * ```
 * <c6o-container padded>
 *   Welcome!
 * </c6o-container>
 * ```
 *
 * Attribute  | Description
 * -----------|------------
 * `padded`   | Adds top padding
 * `more-padded` | Adds both top and bottom padding
 * `extra-padded` | Adds even more top and bottom padding
 * `most-padded` | Adds the most top and bottom padding
 * `centered` | Centers the slotted content
 * `flex` | Apply a flex-box to the slotted content
 * `vertical-centered` | When set, the content will be displayed vertically and centered
 *
 * @extends MobxLitElement
 */

@customElement('c6o-container')
export class Container extends MobxLitElement {

    @property({ type: Boolean })
    centered = false

    @property({ type: Boolean, attribute: 'extra-padded' })
    extraPadded = false

    @property({ type: Boolean })
    flex = false

    @property({ type: Boolean, attribute: 'more-padded' })
    morePadded = false

    @property({ type: Boolean, attribute: 'most-padded' })
    mostPadded = false

    @property({ type: Boolean })
    padded = false

    @property({ type: Boolean, attribute: 'vertical-centered' })
    verticalCentered = false

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            css`
                :host {
                    display: block;
                    height: 100%;
                    margin: 0px auto;
                    max-width: 1440px;
                    padding-left: 30px;
                    padding-right: 30px;
                    position: relative;
                    width: 100%;
                    z-index: 2;
                }

                .full-height {
                    height: 100%;
                }

                .padded, .more-padded, .extra-padded, .most-padded {
                    display: block;
                    height: 100%;
                }

                .padded {
                    padding-top: var(--xl-spacing);
                }

                .more-padded {
                    padding-bottom: var(--xl-spacing);
                    padding-top: var(--xl-spacing);
                }

                .extra-padded {
                    padding-bottom: var(--xxl-spacing);
                    padding-top: var(--xxl-spacing);
                }

                .most-padded {
                    padding-bottom: 80px;
                    padding-top: 80px;
                }
            `
        ]
    }

    render() {
        const classes = ['full-height',
            this.padded ? 'padded' : '',
            this.morePadded ? 'more-padded' : '',
            this.extraPadded ? 'extra-padded' : '',
            this.mostPadded ? 'most-padded' : ''
        ].join(' ')

        return html`
            <section class=${classes}>
                <slot c6o="${this.centered ? 'flex justify-center' : ''}
                    ${this.flex ? 'flex' : ''}
                    ${this.verticalCentered ? 'flex column justify-center align-center' : ''}"
                ></slot>
            </section>
        `
    }
}