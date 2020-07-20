import { RadioGroupElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-group'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { setValueFromPath, getValueFromPath } from '../mixins/path'

export class RadioGroup extends mix(RadioGroupElement).with(EntityStoreMixin, EntityStorePathMixin) {
    eventToStore() {
        setValueFromPath(this.store.pending, this.path, this.value)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        this.value = !!getValueFromPath(valueFrom, this.path)
    }
}

customElements.define('c6o-radio-group', RadioGroup)
