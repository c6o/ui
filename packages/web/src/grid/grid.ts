import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from 'mixwith'

export interface Grid extends EntityListStoreMixin {
    activeItem: boolean
    getEventContext(e)
}

export class Grid extends mix(GridElement).with(EntityListStoreMixin) {

    handleScroll = async () => {
        let loading = false
        const table = this.$.table
        if (!loading && (table.scrollTop + table.clientHeight >= table.scrollHeight)) {
            loading = true
            await this.listStore?.next()
            loading = false
        }
    }

    async connectedCallback() {
        await super.connectedCallback()

        this.$.table.addEventListener('scroll', this.handleScroll)

        this.addEventListener('click', (e) => {
            const item = this.getEventContext(e).item
            const customEvent = new CustomEvent('row-clicked', {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: { value: item }
            })

            this.dispatchEvent(customEvent)
        })
    }

    async disconnectedCallback() {
        this.$.table.removeEventListener('scroll', this.handleScroll)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-grid', Grid)