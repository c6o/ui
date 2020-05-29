import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from './mixins'
import yaml from 'js-yaml'

export class TextArea extends mix(TextAreaElement).with(EntityStoreMixin, EntityStorePathMixin) {

    static get properties() {
        return {
            json: { type: Boolean},
            yaml: { type: Boolean},
            data: {
                type: Object,
                observer: 'dataChanged'
              }
        }
    }

    dataChanged(newVal, oldVal) {
        if (newVal === oldVal === undefined)
            return

        if (this.store || this.readonly !== true)
            throw new Error('traxitt-text-area data cannot be used when store is specified or if it is not readonly')

        if (this.json)
            this.value = JSON.stringify(newVal)
        else if (this.yaml)
            this.value = yaml.safeDump(newVal, {indent: 4})
    }

    eventToStore(e) {
        if (this.json) {
            try {
                this.setValue(JSON.parse(e.target.value))
            }
            catch (e) {
                // ignore - we don't update until JSON is valid
            }
        }
        else if (this.yaml) {
            try {
                this.setValue(yaml.safeLoad(e.target.value))
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
            super.value = JSON.stringify(this.getValue(), null, 4)
        else if (this.yaml)
            super.value = yaml.safeDump(this.getValue())
        else
            super.storeToValue()
    }
}

customElements.define('traxitt-text-area', TextArea)