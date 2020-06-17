import { html, css, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from '@traxitt/common'
import { EntityStoreMixin } from './mixins'
import { cssReboot, cssBase } from '@traxitt/ui-theme'

// This custom element must be nested in a traxitt-form-layout element with a bound store
export class Errors extends mix(MobxLitElement).with(EntityStoreMixin) {
    defaultHeading = 'Please correct the following form errors:'

    @property({ type: String })
    heading = this.defaultHeading

    @property({ type: String })
    filter

    static get styles() {
        return [
            cssReboot,
            cssBase,
            css`
                .h4 {
                    color: var(--color-fire);
                }
            `
        ]
    }

    render() {
        if (!this.store?.errors || Object.keys(this.store.errors).length === 0)
            return html``

        const errors = this.store.errors
        if (errors.type === 'FeathersError') {
            return html`
                <c6o-contextual-banner
                    icon="exclamation-circle"
                    theme="error">
                    <h4>${this.defaultHeading}</h4>
                    ${errors.errors.length ? html`
                        <ul class="error-message">
                            ${errors.errors.map(i => html`<li>${i}</li>`)}
                        </ul>
                    ` : html`
                        <ul>
                            <li>${errors.message}</li>
                        </ul>
                    `}
                </c6o-contextual-banner>
            `
        }

        const errorsToShow = this.filter ? Object.keys(errors).filter(key => key === this.filter) : Object.keys(errors)
        const messages = errorsToShow.map(key => errors[key].message)
        if (!messages.length || this.filter === 'feathers')
            return html``

        return html`
            <c6o-contextual-banner
                icon="exclamation-circle"
                theme="error">
                <h4>${this.heading}</h4>
                <ul class="error-message">
                    ${messages.map(i => html`<li>${i}</li>`)}
                </ul>
            </c6o-contextual-banner>
        `
    }
}

customElements.define('traxitt-errors', Errors)