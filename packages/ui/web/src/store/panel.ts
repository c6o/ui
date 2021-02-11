import { html, customElement, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { EntityStore, EntityListStore } from '@c6o/common'

/**
 * `<c6o-store-panel>` is a Web Component that displays a loading banner while the store is being initialized
 * and then shows slotted content based on whether the store is empty or not.
 *
 * ```
 * <c6o-store-panel loading-message="Loading Apps..." .store=${this.appsListStore}>
 *   ${this.renderMyApps()}
 * </c6o-store-panel>
 * ```
 *
 * Attribute  | Description
 * -----------|------------
 * `loading-message` | The message that will be displayed in the loading banner
 * `show-busy` | When set, a loading overlay will be displayed when the store is 'busy'
 *
 * Property  | Description
 * -----------|------------
 * `store`    | The EntityStore that needs to be initialized
 *
 * @extends MobxLitElement
 */

@customElement('c6o-store-panel')
export class StorePanel extends MobxLitElement {

    @property({ type: Object })
    store: EntityStore | EntityListStore

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage = 'Loading...'

    @property({ type: Boolean, attribute: 'show-busy' })
    showBusy = false

    render() {
        if (!this.store)
            return ''

        return html`
            <c6o-store-state loading-message=${this.loadingMessage} ?show-busy=${this.showBusy} .store=${this.store}>
                <slot></slot>
                ${this.store.nullState ? html`
                    <slot name="null"></slot>
                ` : html`
                    <slot name="store-data"></slot>
                `}
            </c6o-store-state>
        `
    }
}