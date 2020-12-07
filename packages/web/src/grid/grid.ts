import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from 'mixwith'

export interface Grid extends EntityListStoreMixin {
    activeItem: boolean
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

    // This is so that the same row can be clicked on back-to-back and still fire @active-item-changed
    resetActiveItem() {
        this.activeItem = null
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.$.table.addEventListener('scroll', this.handleScroll)
    }

    async disconnectedCallback() {
        this.$.table.removeEventListener('scroll', this.handleScroll)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-grid', Grid)