import { VerticalLayoutElement } from '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout'

export interface VerticalLayout extends HTMLElement { }

export class VerticalLayout extends VerticalLayoutElement {
}

customElements.define('c6o-vertical-layout', VerticalLayout)