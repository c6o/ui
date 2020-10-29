import { RadioGroupElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-group'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { getValueFromPath } from '../mixins/path'
import { EntityStore } from '@c6o/common'

export interface RadioGroup extends EntityStorePathMixin {
    path: string
    store: EntityStore
    value: boolean
}

export class RadioGroup extends mix(RadioGroupElement).with(EntityStoreMixin, EntityStorePathMixin) {

    eventToStore() {
        super.valueToStore(this.value)
    }

    storeToValue() {
        if (this.store) {
            const valueFrom = this.store.entity || this.store.pending
            this.value = !!getValueFromPath(valueFrom, this.path)
        }
    }
}

customElements.define('c6o-radio-group', RadioGroup)
