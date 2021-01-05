import { TabElement } from '@vaadin/vaadin-tabs/src/vaadin-tab'

/**
 * `<c6o-tab>` is a Web Component providing an accessible and customizable tab.
 *
 * ```
 *   <c6o-tab>
 *     Tab 1
 *   </c6o-tab>
 *
 *   <c6o-tab @click=${() => navigate(path)}>
 *     Tab 1
 *   </c6o-tab>
 * ```
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled tab | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the tab is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 * `orientation` | Set to `horizontal` or `vertical` depending on the direction of items  | :host
 *
 * @extends TabElement
 */
export interface Tab extends HTMLElement {
}

export class Tab extends TabElement {
}

customElements.define('c6o-tab', Tab)