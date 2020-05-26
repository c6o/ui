import { GridSelectionColumnElement } from '@vaadin/vaadin-grid/src/vaadin-grid-selection-column'

export class GridSelectionColumn extends GridSelectionColumnElement {

    _findHostGrid() {
        let el: any = this
        while (el && el.localName != 'traxitt-grid') {
            el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode
        }

        return el || undefined
      }
}

customElements.define('traxitt-grid-selection-column', GridSelectionColumn)