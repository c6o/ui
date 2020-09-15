import { html, css, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'
import { cssReboot, cssBase } from '@c6o/ui-theme'

export interface Results extends PolymerElement {
    store
}

// This custom element must be nested in a c6o-form-layout element with a bound store
export class Results extends mix(MobxLitElement).with(EntityStoreMixin) {

    @property({ type: String, attribute: 'success-message' })
    successMessage = 'Saved successfully'

    @property({ type: String, attribute: 'error-heading' })
    errorHeading = 'Please correct the following errors:'

    @property({ type: String })
    filter

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            css`
                :host {
                    width: 100%;
                }

                .h4 {
                    color: var(--color-fire);
                }
            `
        ]
    }

    render() {
        if (this.store?.results)
            return this.showSuccess()

        if (this.store?.error)
            return this.showErrors(this.store.errors)

        return html``
    }

    showErrors(errors) {
        const theme = 'error'
        const icon = 'exclamation-circle'

        if (errors.type === 'FeathersError') {
            return html`
                <c6o-contextual-banner
                    icon=${icon}
                    theme=${theme}
                >
                    <h4>${this.errorHeading}</h4>
                    <ul class="error-message">
                        ${errors.errors.length ? html`
                            ${errors.errors.map(i => html`
                                <li>${i}</li>
                            `)}
                        ` : html`
                            <li>${errors.message}</li>
                        `}
                    </ul>
                </c6o-contextual-banner>
            `
        }

        const errorsToShow = this.filter ? Object.keys(errors).filter(key => key === this.filter) : Object.keys(errors)
        const messages = errorsToShow.map(key => errors[key].message)
        if (!messages.length || this.filter === 'feathers')
            return html``

        return html`
            <c6o-contextual-banner
                icon=${icon}
                theme=${theme}
            >
                <h4>${this.errorHeading}</h4>
                <ul class="error-message">
                    ${messages.map(i => html`<li>${i}</li>`)}
                </ul>
            </c6o-contextual-banner>
        `
    }

    showSuccess() {
        const theme = 'success'
        const icon = 'info-circle'

        return html`
            <c6o-contextual-banner
                colspan="2"
                icon=${icon}
                theme=${theme}
            >
                ${this.successMessage}
            </c6o-contextual-banner>
        `
    }
}

customElements.define('c6o-results', Results)