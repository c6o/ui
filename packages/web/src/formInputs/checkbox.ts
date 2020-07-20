import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { setValueFromPath, getValueFromPath } from '../mixins/path'

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin, EntityStorePathMixin) {
    eventToStore(e) {
        setValueFromPath(this.store.pending, this.path, e.target.checked)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        super.checked = !!getValueFromPath(valueFrom, this.path)
    }
}

customElements.define('c6o-checkbox', Checkbox)
