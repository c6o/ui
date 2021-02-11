import { ListBoxElement } from '@vaadin/vaadin-list-box/src/vaadin-list-box'

/**
 * `<c6o-list-box>` is a Web Component for creating menus.
 *
 * ```
 *   <c6o-list-box selected="2">
 *     <c6o-item>Item 1</c6o-item>
 *     <c6o-item>Item 2</c6o-item>
 *     <c6o-item>Item 3</c6o-item>
 *     <c6o-item>Item 4</c6o-item>
 *   </c6o-list-box>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|------------------------
 * `items`           | The items container
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends ListBoxElement
 */

export class ListBox extends ListBoxElement {
}

customElements.define('c6o-list-box', ListBox)