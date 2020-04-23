import { GridColumnElement } from '@vaadin/vaadin-grid/src/vaadin-grid-column'

export class GridColumn extends GridColumnElement {

    _findHostGrid() {
        let el : any = this
        while (el && el.localName != 'traxitt-grid') {
          el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode
        }
        return el || undefined
      }
}

customElements.define('traxitt-grid-column', GridColumn)