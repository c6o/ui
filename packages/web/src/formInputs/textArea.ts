import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area'
import EasyMDE from 'easymde'
import { mix } from 'mixwith'
import { EntityStore } from '@c6o/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'
import { setValueFromPath, getValueFromPath } from '../mixins/path'
import yaml from 'js-yaml'

export class TextArea extends mix(TextAreaElement).with(EntityStoreMixin, EntityStorePathMixin) {
    easyMDE
    json: boolean
    markdown: boolean
    minHeight: string
    path: string
    readonly: boolean
    root
    store: EntityStore
    value
    yaml: boolean

    static get properties() {
        return {
            ...super.properties,
            data: { type: Object, observer: 'dataChanged' },
            json: { type: Boolean },
            markdown: { type: Boolean },
            minHeight: { type: String, value: '300px'},
            readonly: { type: Boolean, value: false },
            yaml: { type: Boolean }
        }
    }

    // This is used in the StoreReview class
    dataChanged(newVal, oldVal) {
        if (newVal === oldVal === undefined)
            return

        if (this.store || !this.readonly)
            throw new Error('c6o-text-area .data property cannot be used when store is specified or if it is not readonly')

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
                console.log('Error setting JSON value from path', e)
            }
        } else if (this.yaml) {
            try {
                setValueFromPath(this.store.pending, this.path, yaml.safeLoad(value))
            }
            catch (e) {
                // ignore - we don't update until YAML is valid
                console.log('Error setting YAML value from path', e)
            }
        } else
            super.eventToStore(e)
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        const valueFromPath = getValueFromPath(valueFrom, this.path)
        if (this.json && !this.isEmpty(valueFromPath))
            super.value = JSON.stringify(getValueFromPath(valueFrom, this.path), null, 4)
        else if (this.yaml && !this.isEmpty(valueFromPath))
            super.value = yaml.safeDump(valueFromPath)
        else
            super.storeToValue()
    }

    isEmpty(value) {
        if (value?.constructor === Object)
            return !Object.keys(value).length
        else
            return !value?.length
    }

    async connectedCallback() {
        await super.connectedCallback()

        if (this.markdown) {
            const easyMDE = new EasyMDE({
                element: this.root.querySelector('textarea'),
                autoDownloadFontAwesome: false,
                minHeight: this.minHeight,
                showIcons: ['code', 'table', 'horizontal-rule']
            })

            easyMDE.codemirror.on('change', () => {
                setValueFromPath(this.store.pending, this.path, easyMDE.value())
            })
        }
    }
}

customElements.define('c6o-text-area', TextArea)
