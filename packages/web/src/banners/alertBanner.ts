import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { Symbols, MeStore } from '@c6o/hub-common'
import { inject } from '@c6o/common'
import { cssReboot, cssGrid, cssBase, cssIcons } from '@c6o/ui-theme'

@customElement('c6o-alert-banner')
export class AlertBanner extends MobxLitElement {
    @property({ type: String })
    message: string

    @property({ type: String })
    theme = 'info'

    @inject(Symbols.stores.me)
    meStore: MeStore

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssGrid,
            cssBase,
            cssIcons,
            css`
                #alert-banner {
                    align-items: center;
                    display: flex;
                    font-weight: 300;
                    height: 50px;
                    justify-content: center;
                    transition: all .3s ease-out;
                    width: 100%;
                }

                #alert-banner.hide {
                    height: 0;
                    overflow: hidden;
                }

                [theme~="info"] {
                    background-color: var(--color-sea);
                    color: var(--color-white);
                }

                [theme~="error"] {
                    background-color: var(--color-fire);
                    color: var(--color-white);
                }
            `
        ]
    }

    get alertBanner() { return this.shadowRoot.querySelector('#alert-banner') }

    render() {
        if (!this.message?.length)
            return html``

        return html`
            <div id="alert-banner" theme="${this.theme}">
                <iron-icon class="default" icon="vaadin:exclamation-circle"></iron-icon>${this.message}
            </div>
        `
    }

    async connectedCallback() {
        await super.connectedCallback()

        const errors = this.meStore?.errors || {}
        if (errors) {
            if (errors.type === 'FeathersError') {
                // Display a general error dialog
                // TODO: Be more specific about the error
                this.message = `Server error: ${errors.message}`
                this.theme = 'error'
                setTimeout(() => {
                    this.alertBanner.className = 'hide'
                }, 5000)
            } else if (Object.keys(errors).length) {
                // TODO: Log these errors, or surface them
                console.log(Object.keys(errors).forEach(key => errors[key].message))
            }
        }
    }
}