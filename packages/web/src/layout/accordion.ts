import { AccordionElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion'

export interface Accordion extends HTMLElement { }
export class Accordion extends AccordionElement {
}

customElements.define('c6o-accordion', Accordion)