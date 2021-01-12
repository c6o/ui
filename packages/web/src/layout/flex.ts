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
                    height: 100%;
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