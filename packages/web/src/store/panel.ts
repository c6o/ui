import { html, customElement, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

@customElement('c6o-store-panel')
export class StorePanel extends MobxLitElement {

    @property({ type: Object })
    store: EntityStore | EntityListStore

    @property({ type: String, attribute: 'loading-message' })
    loadingMessage

    render() {
        if (!this.store)
            return ''

        return html`
            <c6o-store-state loading-message=${this.loadingMessage} .store=${this.store}>
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