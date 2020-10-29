import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from 'mixwith'
import { EntityStore } from '@c6o/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { getValueFromPath } from '../mixins/path'

interface CheckBoxBase extends EntityStorePathMixin {
    checked: boolean
}

export interface Checkbox extends CheckBoxBase {
    path: string
    store: EntityStore
}

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin, EntityStorePathMixin) {

    eventToStore(e) {
        super.valueToStore(e.target.checked)
    }

    storeToValue() {
        if (this.store) {
            const valueFrom = this.store.entity || this.store.pending
            super.checked = !!getValueFromPath(valueFrom, this.path)
        }
    }
}

customElements.define('c6o-checkbox', Checkbox)
