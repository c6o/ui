import { ProgressBarElement } from '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar'

export interface ProgressBar extends HTMLElement {

}
export class ProgressBar extends ProgressBarElement {
}

customElements.define('c6o-progress-bar', ProgressBar)