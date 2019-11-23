import { html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix, EntityStoreMixin } from './mixins'
import { toJS } from 'mobx'

export class Errors extends mix(MobxLitElement).with(EntityStoreMixin) {

    render() {
        if (!this.store || !this.store.errors || !Object.keys(this.store.errors).length)
            return html``

        return html`
            <div class="vaadin-text-field-container">
                <div part="error-message">
                    ${toJS(this.store.errors)}
                </div>
            </div>
        `
    }
}

customElements.define('traxitt-errors', Errors)