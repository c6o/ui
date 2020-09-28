import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid'
import { PolymerElement } from '@polymer/polymer'
import { EntityListStoreMixin } from '../mixins/entityListStore'
import { mix } from 'mixwith'

export interface Grid extends PolymerElement, EntityListStoreMixin {

}

export class Grid extends mix(GridElement).with(EntityListStoreMixin) {

    async connectedCallback() {
        await super.connectedCallback()
        this.$.table.addEventListener('scroll', this.handleScroll)
    }

    async disconnectedCallback() {
        this.$.table.removeEventListener('scroll', this.handleScroll)
        await super.disconnectedCallback()
    }

    handleScroll = async () => {
        let loading = false
        const table = this.$.table
        if (!loading && (table.scrollTop + table.clientHeight >= table.scrollHeight)) {
            loading = true
            await this.listStore?.next()
            loading = false
        }
    }
}

customElements.define('c6o-grid', Grid)