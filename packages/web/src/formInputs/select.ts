import { SelectElement } from '@vaadin/vaadin-select/src/vaadin-select'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin } from '../mixins'

export class Select extends mix(SelectElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
    root
    listBox

    static get properties() {
        return {
            ...super.properties,
            itemLabelPath: { type: String, value: 'displayName' },
            itemValuePath: { type: String, value: 'value' },
            items: { type: Array },
            path: { type: String }
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
            const vaadinItem = window.document.createElement('vaadin-item')
            vaadinItem.textContent = item[this.itemLabelPath]
            this.listBox.appendChild(vaadinItem)
            vaadinItem.setAttribute('value', item[this.itemValuePath])
        })
        root.appendChild(this.listBox)
    }

    entityStoresChanged() {
        if (this.root?.firstChild)
            this.root.removeChild(this.listBox)
        super.entityStoresChanged()
    }

    entityChanged() {
        if (this.root?.firstChild)
            this.root.removeChild(this.listBox)
        super.entityChanged()
    }
}

customElements.define('c6o-select', Select)