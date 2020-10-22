import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin, EntityStorePathMixinClass } from '../mixins'
import { getValueFromPath } from '../mixins/path'

interface base extends EntityStorePathMixinClass, HTMLElement {
    checked: boolean
}

export interface Checkbox extends base {
    path: string
    store
}

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin, EntityStorePathMixin) {

    eventToStore(e) {
        super.valueToStore(e.target.checked)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        super.checked = !!getValueFromPath(valueFrom, this.path)
    }
}

customElements.define('c6o-checkbox', Checkbox)
