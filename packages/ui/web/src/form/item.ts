import { FormItemElement } from '@vaadin/vaadin-form-layout/src/vaadin-form-item'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'

/**
 * `<c6o-form-item>` is a Web Component providing labelled form item wrapper
 * for using inside `<c6o-form-layout>`.
 *
 * `<c6o-form-item>` accepts any number of children as the input content,
 * and also has a separate named `label` slot:
 *
 * ```html
 * <c6o-form-item>
 *   <label slot="label">Label aside</label>
 *   <input>
 * </c6o-form-item>
 * ```
 *
 * Any content can be used. For instance, you can have multiple input elements
 * with surrounding text. The label can be an element of any type:
 *
 * ```html
 * <c6o-form-item>
 *   <span slot="label">Date of Birth</span>
 *   <input placeholder="YYYY" size="4"> -
 *   <input placeholder="MM" size="2"> -
 *   <input placeholder="DD" size="2"><br>
 *   <em>Example: 1900-01-01</em>
 * </c6o-form-item>
 * ```
 *
 * The label is optional and can be omitted:
 *
 * ```html
 * <c6o-form-item>
 *   <input type="checkbox"> Subscribe to our Newsletter
 * </c6o-form-item>
 * ```
 *
 * By default, the `label` slot content is displayed aside of the input content.
 * When `label-position="top"` is set, the `label` slot content is displayed on top:
 *
 * ```html
 * <c6o-form-item label-position="top">
 *   <label slot="label">Label on top</label>
 *   <input>
 * </c6o-form-item>
 * ```
 *
 * **Note:** Normally, `<c6o-form-item>` is used as a child of
 * a `<c6o-form-layout>` element. Setting `label-position` is unnecessary,
 * because the `label-position` attribute is triggered automatically by the parent
 * `<c6o-form-layout>`, depending on its width and responsive behavior.
 *
 * ### Input Width
 *
 * By default, `<c6o-form-item>` does not manipulate the width of the slotted
 * input elements. Optionally you can stretch the child input element to fill
 * the available width for the input content by adding the `full-width` class:
 *
 * ```html
 * <c6o-form-item>
 *   <label slot="label">Label</label>
 *   <input class="full-width">
 * </c6o-form-item>
 * ```
 *
 * ### Styling
 *
 * The `label-position` host attribute can be used to target the label on top state:
 *
 * <pre><code>
 * &lt;dom-module id="my-form-item-theme" theme-for="c6o-form-item"&gt;
 *   &lt;template&gt;
 *     &lt;style&gt;
 *       :host {
 *         /&#42; default state styles, label aside &#42;/
 *       }
 *
 *       :host([label-position="top"]) {
 *         /&#42; label on top state styles &#42;/
 *       }
 *     &lt;/style&gt;
 *   &lt;/template&gt;
 * &lt;/dom-module&gt;
 * </code></pre>
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * label | The label slot container
 *
 * ### Custom CSS Properties Reference
 *
 * The following custom CSS properties are available on the `<c6o-form-item>`
 * element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-form-item-label-width` | Width of the label column when the labels are aside | `8em`
 * `--vaadin-form-item-label-spacing` | Spacing between the label column and the input column when the labels are aside | `1em`
 * `--vaadin-form-item-row-spacing` | Height of the spacing between the form item elements | `1em`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStoreMixin
 * @mixes FormItemElement
 * @mixes EntityStoreMixin
 */

export interface FormItem extends EntityStoreMixin {
}

export class FormItem extends mix(FormItemElement).with(EntityStoreMixin) {
}

customElements.define('c6o-form-item', FormItem)
