import { ItemElement } from '@vaadin/vaadin-item/src/vaadin-item'

/**
 * `<c6o-item>` is a Web Component providing layout for items in tabs and menus.
 *
 * ```
 *   <c6o-item>
 *     Item content
 *   </c6o-item>
 * ```
 *
 * ### Selectable
 *
 * `<c6o-item>` has the `selected` property and the corresponding state attribute.
 * Currently, the component sets the `selected` to false, when `disabled` property is set to true.
 * But other than that, the `<c6o-item>` does not switch selection by itself.
 * In general, it is the wrapper component, like `<c6o-list-box>`, which should update
 * the `selected` property on the items, e. g. on mousedown or when Enter / Spacebar is pressed.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the slot
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled item | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the item is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 *
 * @extends ItemElement
 */

export class Item extends ItemElement {
}

customElements.define('c6o-item', Item)