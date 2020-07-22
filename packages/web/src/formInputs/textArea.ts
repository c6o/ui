import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { setValueFromPath, getValueFromPath } from '../mixins/path'
import yaml from 'js-yaml'

export class TextArea extends mix(TextAreaElement).with(EntityStoreMixin, EntityStorePathMixin) {

    static get properties() {
        return {
            json: { type: Boolean },
            yaml: { type: Boolean },
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
            throw new Error('c6o-text-area data cannot be used when store is specified or if it is not readonly')

        if (this.json)
            this.value = JSON.stringify(newVal)
        else if (this.yaml)
            this.value = yaml.safeDump(newVal, { indent: 4 })
    }

    eventToStore(e) {
        const value = e.target.value.trim()
        if (this.json) {
            try {
                setValueFromPath(this.store.pending, this.path, JSON.parse(value))
            }
            catch (e) {
                // ignore - we don't update until JSON is valid
            }
        }
        else if (this.yaml) {
            try {
                setValueFromPath(this.store.pending, this.path, yaml.safeLoad(value))
            }
            catch (e) {
                // ignore - we don't update until YAML is valid
            }
        }
        else
            super.eventToStore(e)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        if (this.json)
            super.value = JSON.stringify(getValueFromPath(valueFrom, this.path), null, 4)
        else if (this.yaml)
            super.value = yaml.safeDump(getValueFromPath(valueFrom, this.path))
        else
            super.storeToValue()
    }
}

customElements.define('c6o-text-area', TextArea)