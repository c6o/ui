import { ComboBoxElement } from '@vaadin/vaadin-combo-box/src/vaadin-combo-box'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin } from '../../mixins'

/**
 * `<c6o-combo-box>` is a combo box element combining a dropdown list with an
 * input field for filtering the list of items.
 *
 * Items in the dropdown list must be provided as a list of `String` values.
 * Defining the items is done using the `items` property, which can be assigned
 * with data-binding, using an attribute or directly with the JavaScript property.
 *
 * ```html
 * <c6o-combo-box
 *     label="Fruit"
 *     items="[[data]]">
 * </c6o-combo-box>
 * ```
 *
 * ```js
 * combobox.items = ['apple', 'orange', 'banana'];
 * ```
 *
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 * This element can be used within an `iron-form`.
 *
 * ### Item rendering
 *
 * `<c6o-combo-box>` supports using custom renderer callback function for defining the
 * content of `<vaadin-combo-box-item>`.
 *
 * The renderer function provides `root`, `comboBox`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `comboBox`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <c6o-combo-box id="combo-box"></c6o-combo-box>
 * ```
 * ```js
 * const comboBox = document.querySelector('#combo-box');
 * comboBox.items = [{'label': 'Hydrogen', 'value': 'H'}];
 * comboBox.renderer = function(root, comboBox, model) {
 *   root.innerHTML = model.index + ': ' +
 *                    model.item.label + ' ' +
 *                    '<b>' + model.item.value + '</b>';
 * };
 * ```
 *
 * Renderer is called on the opening of the combo-box and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Item Template
 *
 * Alternatively, the content of the `<vaadin-combo-box-item>` can be populated by using
 * custom item template provided in the light DOM:
 *
 * ```html
 * <c6o-combo-box items='[{"label": "Hydrogen", "value": "H"}]'>
 *   <template>
 *     [[index]]: [[item.label]] <b>[[item.value]</b>
 *   </template>
 * </c6o-combo-box>
 * ```
 *
 * The following properties are available for item template bindings:
 *
 * Property name | Type | Description
 * --------------|------|------------
 * `index`| Number | Index of the item in the `items` array
 * `item` | String or Object | The item reference
 * `selected` | Boolean | True when item is selected
 * `focused` | Boolean | True when item is focused
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<c6o-combo-box>` data through the
 * `dataProvider` function property.
 * The `<c6o-combo-box>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the `dataProvider` in
 * the API reference below for the detailed data provider arguments description,
 * and the “Lazy Loading“ example on “Basics” page in the demos.
 *
 * __Note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * comboBox.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(
 *       response.employees, // requested page of items
 *       response.totalSize  // total number of items
 *     );
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-combo-box-overlay-max-height` | Property that determines the max height of overlay | `65vh`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `text-field` | The text field
 * `toggle-button` | The toggle button
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [`<vaadin-text-field>` documentation](https://vaadin.com/components/vaadin-text-field/html-api/elements/Vaadin.TextFieldElement)
 * for the text field parts.
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `opened` | Set when the combo box dropdown is open | :host
 * `disabled` | Set to a disabled combo box | :host
 * `readonly` | Set to a read only combo box | :host
 * `has-value` | Set when the element has a value | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `loading` | Set when new items are expected | :host
 * `lowercase` | Set to force the cutom input to be lowercase | :host
 * `uppercase` | Set to force the custom input to be uppercase | :host
 *
 * In addition to `<c6o-combo-box>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-combo-box-overlay>`
 * - `<vaadin-combo-box-item>`
 *
 * Note: the `theme` attribute value set on `<c6o-combo-box>` is
 * propagated to the internal themable components listed above.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStorePathMixin
 * @mixes ComboBoxElement
 * @mixes EntityStoreMixin
 * @mixes EntityListStoreMixin
 * @mixes EntityStorePathMixin
 */

export interface ComboBox extends EntityStorePathMixin {
    invalid: boolean
    lowercase: boolean
    uppercase: boolean
    value: string
}

export class ComboBox extends mix(ComboBoxElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
    lowercase: boolean
    uppercase: boolean

    static get properties() {
        return {
            ...super.properties,
            lowercase: { type: Boolean },
            uppercase: { type: Boolean }
        }
    }

    autoFormat = (e) => {
        if (this.lowercase)
            this.value = e.target.inputElement.value?.toLowerCase()
        if (this.uppercase)
            this.value = e.target.inputElement.value?.toUpperCase()
    }

    resetValue() {
        this.value = ''
        this.invalid = false
    }

    async connectedCallback() {
        await super.connectedCallback()
        if (this.lowercase || this.uppercase)
            this.addEventListener('input', this.autoFormat)
    }

    async disconnectedCallback() {
        if (this.lowercase || this.uppercase)
            this.removeEventListener('input', this.autoFormat)
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-combo-box', ComboBox)
