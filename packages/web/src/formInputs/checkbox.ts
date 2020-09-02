import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from 'mixwith'
import { EntityStore } from '@c6o/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { setValueFromPath, getValueFromPath } from '../mixins/path'

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin, EntityStorePathMixin) {
    path: string
    store: EntityStore

    eventToStore(e) {
        setValueFromPath(this.store.pending, this.path, e.target.checked)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        super.checked = !!getValueFromPath(valueFrom, this.path)
    }
}

customElements.define('c6o-checkbox', Checkbox)
