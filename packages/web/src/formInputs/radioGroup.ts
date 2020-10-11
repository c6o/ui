import { RadioGroupElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-group'
import { PolymerElement } from '@polymer/polymer'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { getValueFromPath } from '../mixins/path'

export interface RadioGroup extends PolymerElement {
    path: string
    store
    value
}

export class RadioGroup extends mix(RadioGroupElement).with(EntityStoreMixin, EntityStorePathMixin) {

    eventToStore() {
        super.valueToStore(this.value)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        this.value = !!getValueFromPath(valueFrom, this.path)
    }
}

customElements.define('c6o-radio-group', RadioGroup)
