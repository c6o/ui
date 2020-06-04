import { RadioGroupElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-group'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export class RadioGroup extends mix(RadioGroupElement).with(EntityStoreMixin, EntityStorePathMixin) {
    eventToStore() {
        this.setValue(this.value)
    }

    storeToValue() {
        this.value = !!this.getValue()
    }
}

customElements.define('traxitt-radio-group', RadioGroup)
