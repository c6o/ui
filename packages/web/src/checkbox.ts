import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from '@traxitt/common'
import { EntityStoreMixin } from './mixins'

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin) {
    path: string

    static get properties() {
        return {
            //...super.properties,
            path: {type: String}
        }
    }
}

customElements.define('traxitt-checkbox', Checkbox)
