import { SelectElement } from '@vaadin/vaadin-select/src/vaadin-select'
import { EntityListStore } from '@c6o/common'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin, getValueFromPath } from '../../mixins'

/**
 *
 * `<c6o-select>` is a Web Component for selecting values from a list of items. The content of the
 * the select can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the select uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `select` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `select`.
 *
 * ```html
 * <c6o-select id="select"></c6o-select>
 * ```
 * ```js
 * const select = document.querySelector('#select');
 * select.renderer = function(root, select) {
 *   const listBox = document.createElement('c6o-list-box');
 *   // append 3 <c6o-item> elements
 *   ['Jose', 'Manolo', 'Pedro'].forEach(function(name) {
 *     const item = document.createElement('c6o-item');
 *     item.textContent = name;
 *     listBox.appendChild(item);
 *   });
 *
 *   // update the content
 *   root.appendChild(listBox);
 * };
 * ```
 *
 * Renderer is called on initialization of new select and on its opening.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Polymer Templates
 *
 * Alternatively, the content can be provided with Polymer's Template.
 * Select finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * ```
 * <c6o-select>
 *   <template>
 *     <c6o-list-box>
 *       <c6o-item label="foo">Foo</c6o-item>
 *       <c6o-item>Bar</c6o-item>
 *       <c6o-item>Baz</c6o-item>
 *     </c6o-list-box>
 *   </template>
 * </c6o-select>
 * ```
 *
 * Hint: By setting the `label` property of inner c6o-items you will
 * be able to change the visual representation of the selected value in the input part.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `toggle-button` | The toggle button
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `opened` | Set when the select is open | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set when the select is read only | :host
 *
 * `<c6o-select>` element sets these custom CSS properties:
 *
 * Property name | Description | Theme for element
 * --- | --- | ---
 * `--vaadin-select-text-field-width` | Width of the select text field | `vaadin-select-overlay`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * In addition to `<c6o-select>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-select-text-field>`
 * - `<vaadin-select-overlay>`
 *
 * Note: the `theme` attribute value set on `<c6o-select>` is
 * propagated to the internal themable components listed above.
 *
 * @extends EntityListStoreMixin
 * @mixes SelectElement
 * @mixes EntityStoreMixin
 * @mixes EntityListStoreMixin
 * @mixes EntityStorePathMixin
 */

export interface Select extends EntityListStoreMixin {
    errorMessage: string
    _items: Array<any>
    invalid: boolean
    itemLabelPath: string
    itemValuePath: string
    items: Array<any>
    listStore: EntityListStore
    opened: boolean
    renderer(root: any)
    value: string
}

export class Select extends mix(SelectElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
    // These need to stay as class variables (do not move to interface)
    listBox
    root

    static get properties() {
        return {
            ...super.properties,
            itemLabelPath: { type: String, value: 'displayName' },
            itemValuePath: { type: String, value: 'value' },
            items: { type: Array },
            listStore: { type: Object, observer: 'listStoreChanged' },
        }
    }

    // The renderer for the Select component is a bit finicky. Passing in a ListStore instead of an items array
    // seems to prevent the @change event listener from registering properly.
    // This method is here so we can set the select's renderer on connectedCallback,
    // and also so we can set the renderer to null, and then back to this, when entityStoresChanged is called.
    selectRenderer = (root) => {
        // Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
        if (root.firstChild)
            return

        const itemList = this.items || this.listStore?.entities
        if (!itemList)
            return

        this.root = root

        // Create the <c6o-list-box>
        this.listBox = window.document.createElement('c6o-list-box')
        itemList.forEach(item => {
            if (item[this.itemValuePath] === 'hr') {
                const rule = window.document.createElement('hr')
                this.listBox.appendChild(rule)
            } else {
                const contentItem = window.document.createElement('c6o-item')
                contentItem.textContent = item[this.itemLabelPath] || getValueFromPath(item, this.itemLabelPath)
                this.listBox.appendChild(contentItem)
                contentItem.setAttribute('value', item[this.itemValuePath] || getValueFromPath(item, this.itemValuePath))
            }
        })
        root.appendChild(this.listBox)
    }

    resetOptions() {
        if (this.root?.firstChild && this.listBox)
            this.root.removeChild(this.listBox)
    }

    entityStoresChanged() {
        this.resetOptions()
        this.items = this.listStore?.entities
        // Hack to get the select component to properly render a ListStore
        this.renderer = null
        this.renderer = this.selectRenderer
    }

    entityChanged() {
        this.resetOptions()
        super.entityChanged()
    }

    resetValue() {
        this.value = ''
        this.invalid = false
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.renderer = this.selectRenderer
    }
}

customElements.define('c6o-select', Select)