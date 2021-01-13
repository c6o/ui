import { ProgressBarElement } from '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar'

/**
 * `<c6o-progress-bar>` is a Web Component for progress bars.
 *
 * ```html
 * <c6o-progress-bar min="0" max="1" value="0.5"></c6o-progress-bar>
 *
 * <c6o-progress-bar indeterminate value="0"></c6o-progress-bar>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `bar` | Progress-bar's background
 * `value` | Progress-bar's foreground
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following custom properties are available:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-progress-value` | current progress value (between 0 and 1) | 0
 *
 * The following state attributes are available for styling:
 *
 * Attribute       | Description | Part name
 * ----------------|-------------|------------
 * `indeterminate` | Set to an indeterminate progress bar | :host
 *
 * @extends ProgressBarElement
 */

export interface ProgressBar extends HTMLElement {
}

export class ProgressBar extends ProgressBarElement {
}

customElements.define('c6o-progress-bar', ProgressBar)