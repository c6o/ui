import { HorizontalLayoutElement } from '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout'

/**
 * `<c6o-horizontal-layout>` provides a simple way to horizontally align your HTML elements.
 *
 * ```
 * <c6o-horizontal-layout>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </c6o-horizontal-layout>
 * ```
 *
 * ### Built-in Theme Variations
 *
 * `<c6o-horizontal-layout>` supports the following theme variations:
 *
 * Theme variation | Description
 * ---|---
 * `theme="margin"` | Applies the default amount of CSS margin for the host element (specified by the theme)
 * `theme="padding"` | Applies the default amount of CSS padding for the host element (specified by the theme)
 * `theme="spacing"` | Applies the default amount of CSS margin between items (specified by the theme)
 *
 * @extends HorizontalLayoutElement
 */

export interface HorizontalLayout extends HTMLElement {
}

export class HorizontalLayout extends HorizontalLayoutElement {
}

customElements.define('c6o-horizontal-layout', HorizontalLayout)