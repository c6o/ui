import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssAnimations } from '@c6o/ui-theme'

/**
 * `<c6o-spinner>` is a Web Component for displaying an animated spinner.
 *
 * ```
 *   <c6o-spinner></c6o-spinner>
 * ```
 *
  * Property  | Description
 * -----------|------------
 * `centered` | When set, the spinneer will be centered on the screen
 *
 * @extends MobxLitElement
 */

@customElement('c6o-spinner')
export class Spinner extends MobxLitElement {

    @property({ type: Boolean })
    centered = false

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssAnimations,
            css`
                .centered {
                    left: calc(50% - 20px);
                    position: absolute;
                    top: calc(50% - 20px);
                }
            `
        ]
    }

    render() {
        const classes = [
            'busy',
            this.centered ? 'centered' : ''
        ].join(' ').trim()

        return html`
            <div class="${classes}"></div>
        `
    }
}