import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { EntityStore, EntityListStore } from '@c6o/common'
import { cssReboot, cssBase, cssGrid, cssAnimations } from '@c6o/ui-theme'

/**
 * `<c6o-store-state>` is a Web Component that displays a loading banner while the store is being initialized,
 * and a loading overlay when the store is 'busy'.
 *
 * ```
 * <c6o-store-state loading-message="Looking for Apps..." .store=${this.appsListStore}>
 *   <c6o-marketplace-apps-search
 *     .store=${this.appsListStore}
 *     @badge-clicked=${this.handleBadgeClick}
 *   ></c6o-marketplace-apps-search>
 * </c6o-store-state>
 * ```
 *
 * Attribute   | Description
 * ------------|------------
 * `container` | When set, the loading banner will be wrapped in a div with some margins and max width
 * `centered`  | When set, the slotted content will be centered
 * `loading-message` | The message that will be displayed in the loading banner
 * `no-busy`   | When set, an overlay will NOT be displayed when the store is 'busy'
 * `no-init`   | When set, no loading banner will be displayed
 *
 * Property   | Description
 * -----------|------------
 * `store`    | The EntityStore that needs to be initialized
 *
 * @extends MobxLitElement
 */

@customElement('c6o-store-state')
export class StoreState extends MobxLitElement {

    @property({ type: Boolean })
    container = false

    @property({ type: Boolean })
    centered = false

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage = 'Loading'

    @property({ type: Boolean, attribute: 'no-busy' })
    noBusy = false

    @property({ type: Boolean, attribute: 'no-init' })
    noInit = false

    @property({ type: Object })
    store: EntityStore | EntityListStore

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            cssAnimations,
            css`
                :host {
                    display: block;
                }

                .centered {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                }

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
        const classes = this.centered ? 'centered' : ''

        if (this.store?.initialized || this.noInit) {
            return html`
                <section id="content" class="${classes}">
                    <div id="overlay" class="${this.store?.busy && !this.noBusy ? 'busy' : ''}"></div>
                    <slot></slot>
                </section>
            `
        } else {
            return this.container ? html`
                <c6o-container>
                    <c6o-loading loading-message=${this.loadingMessage}></c6o-loading>
                </c6o-container>
            ` : html`
                <c6o-loading loading-message=${this.loadingMessage}></c6o-loading>
            `
        }
    }
}