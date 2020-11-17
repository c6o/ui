import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { EntityStore } from '@c6o/common'
import { cssReboot, cssBase, cssGrid, cssLayouts, cssAnimations } from '@c6o/ui-theme'

@customElement('c6o-store-content')
export class StoreContent extends MobxLitElement {

    @property({ type: Object })
    store: EntityStore

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            cssLayouts,
            cssAnimations,
            css`
                :host {
                    position: relative;
                }

                #overlay {
                    background-color: var(--color-snow);
                    display: none;
                    height: 100%;
                    opacity: .5;
                    position: absolute;
                    width: 100%;
                    z-index: 100;
                }

                #overlay.busy {
                    display: block;
                }

                #overlay.busy:before {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    margin-top: -20px;
                    margin-left: -20px;
                }
            `
        ]
    }

    render() {
        if (this.store?.errors?.length)
            return html`
                <div c6o="container">
                    <c6o-contextual-banner
                        icon="exclamation-circle"
                        theme="error"
                    >
                        ${this.store.errors}
                    </c6o-contextual-banner>
                </div>
            `

        return this.store?.initialized ? html`<slot></slot>` : html`<div id="overlay" class="busy"></div>`
    }
}