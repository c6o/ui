import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssGrid } from '@c6o/ui-theme'

/**
 * `<c6o-flex>` is a Web Component for displaying content either horizontally or vertically.
 *
 * ```
 * <c6o-flex full-height h-centered nowrap v-centered>
 *   <p>Content 1</p>
 *   <p>Content 2</p>
 * </c6o-flex>
 * ```
 *
 * Attribute  | Description
 * -----------|------------
 * `align-right` | Aligns the content to the right (end)
 * `centered` | Centers the text
 * `full-height` | Adds a height of 100% to the slotted content
 * `h-centered` | Horizontally center the content
 * `lg-margin` | Adds a large bottom margin
 * `margin` | Adds a bottom margin
 * `nowrap` | Content will not wrap
 * `spaced` | Content will be spaced out evenly
 * `vertical` | Content will flow vertically instead of horizontally
 * `v-centered` | Vertically center the content
 * `xl-margin` | Adds an extra large bottom margin
 *
 * @extends MobxLitElement
 */

@customElement('c6o-flex')
export class FlexLayout extends MobxLitElement {

    @property({ type: Boolean, attribute: 'align-right' })
    alignRight = false

    @property({ type: Boolean })
    centered = false

    @property({ type: Boolean, attribute: 'full-height' })
    fullHeight = false

    @property({ type: Boolean, attribute: 'h-centered' })
    horizontalCentered = false

    @property({ type: Boolean, attribute: 'lg-margin' })
    largeMarginBottom = false

    @property({ type: Boolean, attribute: 'margin' })
    marginBottom = false

    @property({ type: Boolean })
    nowrap

    @property({ type: Boolean, attribute: 'spaced' })
    spaceEvenly = false

    @property({ type: Boolean })
    vertical = false

    @property({ type: Boolean, attribute: 'v-centered' })
    verticalCentered = false

    @property({ type: Boolean, attribute: 'xl-margin' })
    xLargeMarginBottom = false

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            css`
                :host {
                    display: block;
                    width: 100%;
                }

                :host([full-height]) {
                    height: 100%;
                }

                ::slotted(c6o-flex) {
                    height: auto;
                }

                .fh {
                    height: 100%;
                }

                .lmb {
                    margin-bottom: var(--lg-spacing);
                }

                .mb {
                    margin-bottom: var(--md-spacing);
                }

                .xmb {
                    margin-bottom: var(--xl-spacing);
                }
            `
        ]
    }

    render() {
        const layout = ['flex',
            this.alignRight ? 'justify-end' : '',
            this.centered ? 'text-center' : 'text-left',
            this.horizontalCentered ? this.vertical ? 'align-center' : 'justify-center' : '',
            this.nowrap ? 'nowrap' : '',
            this.spaceEvenly ? 'justify-between' : '',
            this.vertical ? 'column' : '',
            this.verticalCentered ? this.vertical ? 'justify-center' : 'align-center' : ''
        ].join(' ').trim()

        const classes = [
            this.fullHeight ? 'fh' : '',
            this.marginBottom ? 'mb' : '',
            this.largeMarginBottom ? 'lmb' : '',
            this.xLargeMarginBottom ? 'xmb' : ''
        ].join(' ').trim()

        return html`
            <slot c6o="${layout}" class=${classes}></slot>
        `
    }

    async connectedCallback() {
        await super.connectedCallback()
        if ((this.vertical && this.verticalCentered && this.spaceEvenly) || (!this.vertical && this.horizontalCentered && this.spaceEvenly))
            throw new Error("Warning: Don't use both 'justify-center' and 'justify-between' on the flex-box")
    }
}