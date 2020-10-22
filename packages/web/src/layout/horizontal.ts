import { HorizontalLayoutElement } from '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout'

export interface HorizontalLayout extends HTMLElement { }

export class HorizontalLayout extends HorizontalLayoutElement {
}

customElements.define('c6o-horizontal-layout', HorizontalLayout)