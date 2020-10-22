import { SelectElement } from '@vaadin/vaadin-select/src/vaadin-select'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin, getValueFromPath } from '../mixins'

export interface Select extends EntityListStoreMixin, HTMLElement {

}

export class Select extends mix(SelectElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
    itemLabelPath: string
    itemValuePath: string
    invalid: boolean
    items
    listBox
    listStore
    root
    value: string

    static get properties() {
        return {
            ...super.properties,
            itemLabelPath: { type: String, value: 'displayName' },
            itemValuePath: { type: String, value: 'value' },
            items: { type: Array },
            listStore: { type: Object, observer: 'listStoreChanged' }
        }
    }

    renderer = (root) => {
        // Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
        if (root.firstChild)
            return

        const itemList = this.items || this.listStore?.entities
        if (!itemList)
            return

        this.root = root

        // Create the <vaadin-list-box>
        this.listBox = window.document.createElement('vaadin-list-box')
        itemList.forEach(item => {
            if (item[this.itemValuePath] === 'hr') {
                const rule = window.document.createElement('hr')
                this.listBox.appendChild(rule)
            } else {
                const vaadinItem = window.document.createElement('vaadin-item')
                vaadinItem.textContent = item[this.itemLabelPath] || getValueFromPath(item, this.itemLabelPath)
                this.listBox.appendChild(vaadinItem)
                vaadinItem.setAttribute('value', item[this.itemValuePath] || getValueFromPath(item, this.itemValuePath))
            }
        })
        root.appendChild(this.listBox)
    }

    resetOptions() {
        if (this.root?.firstChild)
            this.root.removeChild(this.listBox)
    }

    entityStoresChanged() {
        this.resetOptions()
        super.entityStoresChanged()
    }

    entityChanged() {
        this.resetOptions()
        super.entityChanged()
    }

    resetValue() {
        this.value = ''
        this.invalid = false
    }
}

customElements.define('c6o-select', Select)