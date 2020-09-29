import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { EntityStore, EntityListStore } from '@c6o/common'
import { cssReboot, cssBase, cssGrid, cssAnimations } from '@c6o/ui-theme'

@customElement('c6o-store-state')
export class StoreState extends MobxLitElement {

    @property({ type: Boolean })
    container = false

    @property({ type: Object })
    store: EntityStore | EntityListStore

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage

    @property({ type: Boolean, attribute: 'no-busy' })
    noBusy = false

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            cssAnimations,
            css`
                #content {
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
        if (this.store?.initialized) {
            return html`
                <section id="content">
                    <div id="overlay" class="${this.store.busy && !this.noBusy ? 'busy' : ''}"></div>
                    <slot></slot>
                </section>
            `
        } else {
            return this.container ? html`
                <div c6o="container">
                    <c6o-loading loading-message=${this.loadingMessage}></c6o-loading>
                </div>
            ` : html`
                <c6o-loading loading-message=${this.loadingMessage}></c6o-loading>
            `
        }
    }
}