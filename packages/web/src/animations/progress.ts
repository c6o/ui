import { ProgressBarElement } from '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar'

export class ProgressBar extends ProgressBarElement implements HTMLElement {
}

customElements.define('c6o-progress-bar', ProgressBar)