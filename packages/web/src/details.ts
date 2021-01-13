import { DetailsElement } from '@vaadin/vaadin-details/src/vaadin-details'

/**
 * `<c6o-details>` is a Web Component which the creates an
 * expandable panel similar to `<details>` HTML element.
 *
 * ```
 * <c6o-details>
 *   <div slot="summary">Expandable Details</div>
 *   Toggle using mouse, Enter and Space keys.
 * </c6o-details>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name        | Description
 * -----------------|----------------
 * `summary`        | The element used to open and close collapsible content.
 * `toggle`         | The element used as indicator, can represent an icon.
 * `summary-content`| The wrapper for the slotted summary content.
 * `content`        | The wrapper for the collapsible details content.
 *
 * The following attributes are exposed for styling:
 *
 * Attribute    | Description
 * -------------| -----------
 * `opened`     | Set when the collapsible content is expanded and visible.
 * `disabled`   | Set when the element is disabled.
 * `focus-ring` | Set when the element is focused using the keyboard.
 * `focused`    | Set when the element is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends DetailsElement
 */

export interface Details extends HTMLElement {
}

export class Details extends DetailsElement {
}

customElements.define('c6o-details', Details)