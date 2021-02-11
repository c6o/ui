import { RadioGroupElement } from '@vaadin/vaadin-radio-button/src/vaadin-radio-group'
import { mix } from 'mixwith'
import { EntityStore } from '@c6o/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'
import { getValueFromPath } from '../../mixins/path'

/**
 * `<c6o-radio-group>` is a Web Component for grouping c6o-radio-buttons.
 *
 * ```html
 * <c6o-radio-group>
 *   <c6o-radio-button name="foo">Foo</c6o-radio-button>
 *   <c6o-radio-button name="bar">Bar</c6o-radio-button>
 *   <c6o-radio-button name="baz">Baz</c6o-radio-button>
 * </c6o-radio-group>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `group-field` | The element that wraps radio-buttons
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled`   | Set when the radio group and its children are disabled. | :host
 * `readonly` | Set to a readonly radio group | :host
 * `invalid` | Set when the element is invalid | :host
 * `has-label` | Set when the element has a label | :host
 * `has-value` | Set when the element has a value | :host
 * `focused` | Set when the element contains focus | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStorePathMixin
 * @mixes RadioGroupElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

export interface RadioGroup extends EntityStorePathMixin {
    path: string
    store: EntityStore
    value: boolean
}

export class RadioGroup extends mix(RadioGroupElement).with(EntityStoreMixin, EntityStorePathMixin) {

    eventToStore() {
        super.valueToStore(this.value)
    }

    storeToValue() {
        if (this.store) {
            const valueFrom = this.store.entity || this.store.pending
            this.value = !!getValueFromPath(valueFrom, this.path)
        }
    }
}

customElements.define('c6o-radio-group', RadioGroup)
