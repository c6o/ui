import { html, customElement, property, CSSResult } from 'lit-element'
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
            cssGrid
        ]
    }

    render() {
        if (this.store?.initialized) {
            return this.store.success ? html`
                <slot></slot>
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