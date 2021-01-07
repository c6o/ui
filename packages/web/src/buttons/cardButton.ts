import { html, customElement, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

/**
 * `<c6o-card-button>` is a Web Component that provides a button in card form.
 *
 * ```
 * <c6o-card-button @click=${() => window.open(videosUrl, '_blank')}>
 *   <iron-icon icon="vaadin:play"></iron-icon>
 *     Videos
 *   </c6o-card-button>
 * ```
 *
 * Property   | Description
 * -----------|------------
 * `disabled` | Boolean to disable the button
 *
 * @extends MobxLitElement
 */

@customElement('c6o-card-button')
export class CardButton extends MobxLitElement {

    @property({ type: Boolean })
    disabled = false

    render() {
        return html`
            <c6o-button ?disabled=${this.disabled} theme="card">
                <slot></slot>
            </c6o-button>
        `
    }
}
