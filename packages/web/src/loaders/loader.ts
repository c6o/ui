import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { EntityStore, EntityListStore } from '@c6o/common'
import { cssReboot, cssBase, cssGrid } from '@c6o/ui-theme'

@customElement('c6o-loader')
export class Loader extends MobxLitElement {

    @property({ type: Boolean, attribute: 'bar-only' })
    barOnly = false

    @property({ type: Boolean })
    container = false

    @property({ type: Object })
    store: EntityStore | EntityListStore

    @property({ type: String })
    text = 'Loading...'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
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

                @keyframes spinner {
                    to { transform: rotate(360deg); }
                }

                #overlay.busy:before {
                    content: '';
                    box-sizing: border-box;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    width: 40px;
                    height: 40px;
                    margin-top: -20px;
                    margin-left: -20px;
                    border-radius: 50%;
                    border-top: 2px solid var(--color-twilight-ocean);
                    border-right: 2px solid transparent;
                    animation: spinner .4s linear infinite;
                }
            `
        ]
    }

    render() {
        if (this.store?.initialized) {
            return this.store.success ? html`
                <section id="content">
                    <div id="overlay" class="${this.store.busy ? 'busy' : ''}"></div>
                    <slot></slot>
                </section>
            ` : html`
                <c6o-errors heading="The system encountered an error:" .store=${this.store}></c6o-errors>
            `
        } else {
            return this.container ? html`
                <div c6o="container">
                    <c6o-loading ?bar-only=${this.barOnly} .text=${this.text}></c6o-loading>
                </div>
            ` : html`<c6o-loading ?bar-only=${this.barOnly} .text=${this.text}></c6o-loading>`
        }
    }
}