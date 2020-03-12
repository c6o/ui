import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, PathEntityStoreMixin } from './mixins'
import yaml from 'js-yaml'

export class TextArea extends mix(TextAreaElement).with(EntityStoreMixin, PathEntityStoreMixin) {

    json: boolean
    yaml: boolean

    static get properties() {
        return {
            //...super.properties,
            json: { type: Boolean},
            yaml: { type: Boolean},
            data: {
                type: Object,
                value: '',
                observer: 'dataChanged'
              }
        }
    }

    dataChanged(newVal, oldVal) {
        if (this.store || this.readonly === true)
            throw new Error('traxitt-text-area data cannot be used when store is specified or if it is not readonly')

        if (this.json)
            this.value = JSON.stringify(newVal)
        else if (this.yaml)
            this.value = yaml.safeDump(newVal, {indent: 4})
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
        else if (this.yaml) {
            try {
                this.store.pending[this.path] = yaml.safeLoad(e.target.value)
            }
            catch (e) {
                // ignore - we don't update until YAML is valid
            }
        }
        else
            super.eventToStore(e)
    }

    storeToValue() {
        if (this.json)
            super.value = this.store.entity ? JSON.stringify(this.store.entity[this.path], null, 4) : ''
        else if (this.yaml)
            super.value = this.store.entity ? yaml.safeDump(this.store.entity[this.path]) : ''
        else
            super.storeToValue()
    }
}

customElements.define('traxitt-text-area', TextArea)