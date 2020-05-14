import { ComboBoxElement } from '@vaadin/vaadin-combo-box/src/vaadin-combo-box'
import { mix } from '@traxitt/common'
import { EntityListStoreMixin } from './mixins'

export class ComboBox extends mix(ComboBoxElement).with(EntityListStoreMixin) {
    path: string

    static get properties() {
        return {
            //...super.properties,
            path: {type: String}
        }
    }

    entityStoresChanged() {
        this.items = this.listStore?.entityStores
        this.render()
    }

    entityChanged() {
        this.render()
    }
}

customElements.define('traxitt-combo-box', ComboBox)