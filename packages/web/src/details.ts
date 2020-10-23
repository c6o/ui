import { DetailsElement } from '@vaadin/vaadin-details/src/vaadin-details'

export interface Details extends HTMLElement {
}

export class Details extends DetailsElement {
}

customElements.define('c6o-details', Details)