import { VerticalLayoutElement } from '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout'

/**
 * `<c6o-vertical-layout>` provides a simple way to vertically align your HTML elements.
 *
 * ```
 * <c6o-vertical-layout>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </c6o-vertical-layout>
 * ```
 *
 * ### Built-in Theme Variations
 *
 * `<c6o-vertical-layout>` supports the following theme variations:
 *
 * Theme variation | Description
 * ---|---
 * `theme="margin"` | Applies the default amount of CSS margin for the host element (specified by the theme)
 * `theme="padding"` | Applies the default amount of CSS padding for the host element (specified by the theme)
 * `theme="spacing"` | Applies the default amount of CSS margin between items (specified by the theme)
 *
 * @extends VerticalLayoutElement
 */

export interface VerticalLayout extends HTMLElement {
}

export class VerticalLayout extends VerticalLayoutElement {
}

customElements.define('c6o-vertical-layout', VerticalLayout)