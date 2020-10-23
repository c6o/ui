import { AccordionElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion'

export class Accordion extends AccordionElement implements HTMLElement {
}

customElements.define('c6o-accordion', Accordion)