import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from '@traxitt/common'
import { EntityStoreMixin } from './mixins'

export class Errors extends mix(MobxLitElement).with(EntityStoreMixin) {

    render() {
        const errors = this.store?.errors || {}
        const messages = Object.keys(errors).map(key => errors[key].message)
        return html`
            <div class="vaadin-text-field-container">
                <div part="error-message">
                    ${messages.map(i => html`${i}<br>`)}
                </div>
            </div>
        `
    }
}

customElements.define('traxitt-errors', Errors)