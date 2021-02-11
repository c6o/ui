import { html, css, property, CSSResult, query } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStoreLitMixin } from '../mixins'
import { cssReboot, cssBase } from '@c6o/ui-theme'
import { ContextualBanner } from '@c6o/ui-web'
import { EntityStore } from '@c6o/common'

/**
 * `<c6o-results>` is a Web Component that provides a results banner for forms, displaying a success or error message after a save atttempt.
 * It must be nested in a c6o-form-layout element with a bound store.
 *
 * ```
 * <c6o-results
 *   colspan="2
 *   fade-out
 *   success-message="App successfully updated"
 * ></c6o-results>
 * ```
 *
 * Attribute       | Description
 * ----------------|------------
 * `error-heading` | The heading text if there is an error message. The error message comes from the error itself.
 * `errors-only`   | When set, this component will only show error messages
 * `fade-out-duration` | How long before the banner is removed from the UI
 * `fade-out`     | When set, the success message will fade out after a given duration
 * `filter`       | Only show errors of a certain type, based on the input's path, e.g. 'picture', 'namespace', etc.
 * `success-message` | Message to display when saving was successful
 *
 * @extends EntityStoreMixin
 * @mixes MobxLitElement
 * @mixes EntityStoreMixin
 */

export interface Results extends EntityStoreMixin {
    shadowRoot
    store: EntityStore
}

export class Results extends mix(MobxLitElement).with(EntityStoreLitMixin) {
    defaultErrorHeading: string
    timeout

    @property({ type: String, attribute: 'error-heading' })
    errorHeading = 'Please correct the following errors:'

    @property({ type: Boolean, attribute: 'errors-only'})
    errorsOnly = false

    @property({ type: Number, attribute: 'fade-out-duration'})
    fadeOutDuration = 3300

    @property({ type: Boolean, attribute: 'fade-out'})
    fadeOutOnSuccess: boolean

    @property({ type: String })
    filter

    @property({ type: String, attribute: 'success-message' })
    successMessage = 'Saved successfully'

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

                @keyframes fadeOut {
                    0% {
                      opacity: 1;
                      visibility: visible;
                    }
                    100% {
                      opacity: 0;
                      visibility: hidden;
                    }
                }
            `
        ]
    }

    @query('c6o-contextual-banner#success')
    successBanner: ContextualBanner

    render() {
        // Use store.success here and not store.hasSuccess because
        // we only want to show the success message after a CUPD operation
        if (this.store?.success && !this.errorsOnly) {
            if (this.fadeOutOnSuccess)
                this.fadeOutTimer()
            return this.showSuccess()
        }

        if (this.store?.hasErrors)
            return this.showErrors(this.store.errors)

        return html``
    }

    showErrors(errors) {
        const theme = 'error'
        const icon = 'exclamation-circle'
        this.errorHeading = this.defaultErrorHeading

        if (errors.type === 'FeathersError') {
            return html`
                <c6o-contextual-banner
                    icon=${icon}
                    id="error"
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
        if (errorsToShow.includes('picture'))
            this.errorHeading = 'Error uploading file:'

        const messages = errorsToShow.map(key => errors[key].message)
        if (!messages.length || this.filter === 'feathers')
            return html``

        return html`
            <c6o-contextual-banner
                icon=${icon}
                id="error"
                theme=${theme}
            >
                ${errorsToShow.includes('pending') ?
                    messages.map(i => html`<div class="error-message">${i}</div>`)
                : html`
                    <h4>${this.errorHeading}</h4>
                    <ul class="error-message">
                        ${messages.map(i => html`<li>${i}</li>`)}
                    </ul>
                `}
            </c6o-contextual-banner>
        `
    }

    showSuccess() {
        const theme = 'success'
        const icon = 'info-circle'

        return html`
            <style>
                c6o-contextual-banner[fade-out] {
                    animation: fadeOut 1s ease-in-out forwards;
                    animation-delay: ${(this.fadeOutDuration+200)/1000 - 1}s;
                    display: block !important;
                }
            </style>
            <c6o-contextual-banner
                colspan="2"
                ?fade-out=${this.fadeOutOnSuccess}
                ?hidden=${this.fadeOutOnSuccess}
                icon=${icon}
                id="success"
                theme=${theme}
            >
                ${this.successMessage}
            </c6o-contextual-banner>
        `
    }

    fadeOutTimer = async () => {
        if (this.timeout)
            clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            this.successBanner?.removeAttribute('fade-out')
            this.store.reset()
        }, this.fadeOutDuration)
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.defaultErrorHeading = this.errorHeading
    }
}

customElements.define('c6o-results', Results)