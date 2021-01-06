import { html, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

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

customElements.define('c6o-card-button', CardButton)
