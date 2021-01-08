import { FormLayoutElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-layout'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'

/**
 * `<c6o-form-layout>` is a Web Component providing configurable responsive
 * layout for form elements.
 *
 * ```html
 * <c6o-form-layout>
 *
 *   <c6o-form-item>
 *     <label slot="label">First Name</label>
 *     <input class="full-width" value="Jane">
 *   </c6o-form-item>
 *
 *   <c6o-form-item>
 *     <label slot="label">Last Name</label>
 *     <input class="full-width" value="Doe">
 *   </c6o-form-item>
 *
 *   <c6o-form-item>
 *     <label slot="label">Email</label>
 *     <input class="full-width" value="jane.doe@example.com">
 *   </c6o-form-item>
 *
 * </c6o-form-layout>
 * ```
 *
 * It supports any child elements as layout items.
 *
 * By default, it makes a layout of two columns if the element width is equal or
 * wider than 40em, and a single column layout otherwise.
 *
 * The number of columns and the responsive behavior are customizable with
 * the `responsiveSteps` property.
 *
 * ### Spanning Items on Multiple Columns
 *
 * You can use `colspan` attribute on the items.
 * In the example below, the first text field spans on two columns:
 *
 * ```html
 * <c6o-form-layout>
 *
 *   <c6o-form-item colspan="2">
 *     <label slot="label">Address</label>
 *     <input class="full-width">
 *   </c6o-form-item>
 *
 *   <c6o-form-item>
 *     <label slot="label">First Name</label>
 *     <input class="full-width" value="Jane">
 *   </c6o-form-item>
 *
 *   <c6o-form-item>
 *     <label slot="label">Last Name</label>
 *     <input class="full-width" value="Doe">
 *   </c6o-form-item>
 *
 * </c6o-form-layout>
 * ```
 *
 * ### CSS Properties Reference
 *
 * The following custom CSS properties are available on the `<c6o-form-layout>`
 * element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-form-layout-column-spacing` | Length of the spacing between columns | `2em`
 *
 * @extends EntityStoreMixin
 * @mixes FormLayoutElement
 * @mixes EntityStoreMixin
 */

export interface FormLayout extends EntityStoreMixin {
}

export class FormLayout extends mix(FormLayoutElement).with(EntityStoreMixin) {
}

customElements.define('c6o-form-layout', FormLayout)
