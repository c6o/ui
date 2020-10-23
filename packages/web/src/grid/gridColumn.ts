import { GridColumnElement } from '@vaadin/vaadin-grid/src/vaadin-grid-column'

export interface GridColumn extends HTMLElement {
}

export class GridColumn extends GridColumnElement {

    _findHostGrid() {
        let el: any = this
        while (el && el.localName != 'c6o-grid') {
          el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode
        }
        return el || undefined
      }
}

customElements.define('c6o-grid-column', GridColumn)