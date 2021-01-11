import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area'
import { observe } from 'mobx'
import EasyMDE from 'easymde'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'
import { setValueFromPath, getValueFromPath } from '../../mixins/path'
import yaml from 'js-yaml'
import { EntityStore } from '@c6o/common'

/**
 * `<c6o-text-area>` is a Web Component for text area control in forms.
 *
 * ```html
 * <c6o-text-area label="Add description"></vaadin-text-area>
 *
 * <c6o-text-area
 *   colspan="2"
 *   label="Short Description"
 *   markdown
 *   maxlength="250"
 *   min-height="100px"
 *   path="summary"
 * ></c6o-text-area>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<c6o-text-area>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <c6o-text-area label="Add description">
 *   <div slot="prefix">Details:</div>
 *   <div slot="suffix">The end!</div>
 * </c6o-text-area>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 * `markdown` | Set to turn the text area into a rich text editor that uses markdown. Uses the EasyMDE plugin. | :host
 * `json` | Set to specify that the text area content is JSON | :host
 * `yaml` | Set to specify that the text area content is YAML | :host
 * `size` | Possible values are 'max-height', 'medium-height', 'large-height' | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStorePathMixin
 * @mixes TextAreaElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

 export type TextAreaSize = '' | 'max-height' | 'medium-height' | 'large-height'

export interface TextArea extends EntityStorePathMixin {
    errorMessage: string
    invalid: boolean
    path: string
    size: TextAreaSize
    store: EntityStore
    value: string
}

export class TextArea extends mix(TextAreaElement).with(EntityStoreMixin, EntityStorePathMixin) {
    autorefresh
    data
    easyMDE
    json: boolean
    markdown: boolean
    minHeight: string
    readonly: boolean
    root
    textAreaDisposer
    yaml: boolean

    static get properties() {
        return {
            ...super.properties,
            autorefresh: { type: Boolean, value: false },
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

    valueToStore(value) {
        this.errorMessage = ''
        this.invalid = false

        if (this.json) {
            try {
                setValueFromPath(this.store.pending, this.path, JSON.parse(value))
            } catch (e) {
                this.errorMessage = `Error setting JSON: ${e.message}`
                this.invalid = true
            }
        } else if (this.yaml) {
            try {
                setValueFromPath(this.store.pending, this.path, yaml.safeLoad(value))
            } catch (e) {
                this.errorMessage = `Error setting YAML: ${e.message}`
                this.invalid = true
            }
        } else
            super.valueToStore(value)
    }

    storeToValue() {
        if (this.store) {
            const valueFrom = this.store.entity || this.store.pending
            const valueFromPath = getValueFromPath(valueFrom, this.path)
            if (this.json && !this.isEmpty(valueFromPath))
                super.value = JSON.stringify(getValueFromPath(valueFrom, this.path), null, 4)
            else if (this.yaml && !this.isEmpty(valueFromPath))
                super.value = yaml.safeDump(valueFromPath)
            else
                super.storeToValue()
        }
    }

    isEmpty(value) {
        return value?.constructor === Object ? !Object.keys(value).length : !value?.length
    }

    startListening(cm, state) {
        const check = () => {
          if (cm.display.wrapper.offsetHeight) {
                this.stopListening(cm, state)
                if (cm.display.lastWrapHeight != cm.display.wrapper.clientHeight)
                cm.refresh()
          } else {
                state.timeout = setTimeout(check, state.delay)
          }
        }
        state.timeout = setTimeout(check, state.delay)
        state.hurry = function() {
            clearTimeout(state.timeout)
            state.timeout = setTimeout(check, 50)
        }
        this.easyMDE.codemirror.on(window, 'mouseup', state.hurry)
        this.easyMDE.codemirror.on(window, 'keyup', state.hurry)
      }

    stopListening(_cm, state) {
        clearTimeout(state.timeout)
        this.easyMDE.codemirror.off(window, 'mouseup', state.hurry)
        this.easyMDE.codemirror.off(window, 'keyup', state.hurry)
    }

    async connectedCallback() {
        await super.connectedCallback()

        if (this.store) {
            this.textAreaDisposer = observe(this.store, 'entity', () => {
                if (this.markdown) {
                    this.easyMDE = new EasyMDE({
                        element: this.root.querySelector('textarea'),
                        autoDownloadFontAwesome: false,
                        minHeight: this.minHeight,
                        showIcons: ['code', 'table', 'horizontal-rule']
                    })

                    this.store.entity ?
                        this.easyMDE.value(getValueFromPath(this.store.entity, this.path)) :
                        this.easyMDE.value('')

                    this.easyMDE.codemirror.on('change', () => {
                        setValueFromPath(this.store.pending, this.path, this.easyMDE.value())
                    })

                    // https://github.com/Ionaru/easy-markdown-editor/pull/249
                    if (this.autorefresh) {
                        const cm = this.easyMDE.codemirror
                        if (cm.state.autoRefresh) {
                            this.stopListening(cm, cm.state.autoRefresh)
                            cm.state.autoRefresh = null
                        }
                        if (cm.display.wrapper.offsetHeight == 0)
                            this.startListening(cm, cm.state.autoRefresh = { delay: 250 })
                    }
                }
            })
        }
    }
}

customElements.define('c6o-text-area', TextArea)
