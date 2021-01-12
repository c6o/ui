import { html, css, property, CSSResult } from 'lit-element'
import { PolymerElement } from '@polymer/polymer'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'
import { cssReboot, cssBase, cssGrid } from '@c6o/ui-theme'
import { EntityStore } from '@c6o/common'

export interface SaveButton extends EntityStoreMixin {
    shadowRoot
    store: EntityStore
}

export class SaveButton extends mix(MobxLitElement).with(EntityStoreMixin) implements PolymerElement {
    timeout

    @property({ type: String, attribute: 'success-message' })
    successMessage = 'Save successful'

    @property({ type: String, attribute: 'error-heading' })
    errorHeading = 'Please correct the following errors:'

    @property({ type: Number, attribute: 'fade-out-duration'})
    fadeOutDuration = 3300

    @property({ type: Boolean })
    banner: boolean

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            css`
                .save-results {
                    display: none;
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

                .save-results[saved] {
                    animation: fadeOut .5s ease-in-out forwards;
                    animation-delay: 3s;
                    display: block;
                }

                .save-results[error] {
                    display: block;
                }

                #results-banner {
                    margin-top: var(--md-spacing);
                }
            `
        ]
    }

    get resultsBanner() { return this.shadowRoot.querySelector('c6o-results') as unknown as HTMLElement }
    get resultsLabel() { return this.shadowRoot.querySelector('c6o-label') as unknown as HTMLElement }

    render() {
        if (!this.store)
            return html``

        return html`
            <c6o-flex v-centered>
                <c6o-button @click=${this.handleSave}>Save</c6o-button>
                <c6o-label class="save-results">${this.successMessage}</c6o-label>
            </c6o-flex>
            <c6o-results
                class="save-results"
                colspan="2"
                error-heading=${this.errorHeading}
                filter="feathers"
                id="results-banner"
                success-message=${this.successMessage}
                .store=${this.store}
            ></c6o-results>
        `
    }

    handleSave = async () => {
        const resultsType = this.banner ? 'resultsBanner' : 'resultsLabel'

        this.resultsBanner.removeAttribute('error')
        this[resultsType].removeAttribute('saved')
        await this.store.save()
        if (this.store.success) {
            if (this.timeout)
                clearTimeout(this.timeout)
            this[resultsType].setAttribute('saved', '')
            this.timeout = setTimeout(() => { this[resultsType].removeAttribute('saved') }, this.fadeOutDuration)
        } else {
            // Show the error banner when there's a feather's error
            this.resultsBanner.setAttribute('error', '')
        }
    }
}

customElements.define('c6o-save-button', SaveButton)
