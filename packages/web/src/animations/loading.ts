import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssLayouts, cssTypography } from '@c6o/ui-theme'

/**
 * `<c6o-loading>` is a Web Component that provides a loading animation and message.
 *
 * ```
 *   <c6o-loading loading-message="Loading content..."></c6o-loading>
 * ```
 *
 * Property   | Description
 * -----------|------------
 * `loadingMessage` | The message that will be displayed above the loading animation
 *
 * @extends MobxLitElement
 */

@customElement('c6o-loading')
export class Loading extends MobxLitElement {

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage = 'Loading...'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssLayouts,
            cssTypography,
            css`
                #loading {
                    animation: fadein 3s;
                    padding: var(--xl-spacing) 0;
                }

                @keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }

                #loading h3 {
                    color: var(--color-navy);
                }
            `
        ]
    }

    render() {
        return html`
            <section id="loading">
                <div class="panel">
                    <h3>${this.loadingMessage}</h3>
                    <c6o-progress-bar indeterminate value="0"></c6o-progress-bar>
                </div>
            </section>
        `
    }
}