import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from './mixins'

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin, EntityStorePathMixin) {
    eventToStore(e) {
        this.setValue(e.target.checked)
    }

    storeToValue() {
        super.checked = !!this.getValue()
    }
}

customElements.define('traxitt-checkbox', Checkbox)
