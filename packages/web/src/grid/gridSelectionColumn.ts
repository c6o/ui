import { GridSelectionColumnElement } from '@vaadin/vaadin-grid/src/vaadin-grid-selection-column'

export interface GridSelectionColumn extends HTMLElement { }

export class GridSelectionColumn extends GridSelectionColumnElement {

    _findHostGrid() {
        let el: any = this
        while (el && el.localName != 'c6o-grid') {
            el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode
        }

        return el || undefined
      }
}

customElements.define('c6o-grid-selection-column', GridSelectionColumn)