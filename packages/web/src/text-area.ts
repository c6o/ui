import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, PathEntityStoreMixin } from './mixins'

export class TextArea extends mix(TextAreaElement).with(EntityStoreMixin, PathEntityStoreMixin) {

    json: boolean

    static get properties() {
        return {
            //...super.properties,
            json: { type: Boolean}
        }
    }

    eventToStore(e) {
        if (this.json) {
            try {
                this.store.pending[this.path] = JSON.parse(e.target.value)
            }
            catch (e) {
                // ignore - we don't update until JSON is valid
            }
        }
        else
            super.eventToStore(e)
    }

    storeToValue() {
        if (this.json)
            super.value = this.store.entity ? JSON.stringify(this.store.entity[this.path], null, 4) : ''
        else
            super.storeToValue()
    }
}

customElements.define('traxitt-text-area', TextArea)