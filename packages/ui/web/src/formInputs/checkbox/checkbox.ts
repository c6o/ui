import { CheckboxElement } from '@vaadin/vaadin-checkbox/src/vaadin-checkbox'
import { mix } from 'mixwith'
import { EntityStore } from '@c6o/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'
import { getValueFromPath } from '../../mixins/path'

/**
 * `<c6o-checkbox>` is a Web Component for customized checkboxes.
 *
 * ```html
 * <c6o-checkbox>
 *   Make my profile visible
 * </c6o-checkbox>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|----------------
 * `checkbox`        | The wrapper element for the native <input type="checkbox">
 * `label`           | The wrapper element in which the component's children, namely the label, is slotted
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|--------------
 * `active`     | Set when the checkbox is pressed down, either with mouse, touch or the keyboard. | `:host`
 * `disabled`   | Set when the checkbox is disabled. | `:host`
 * `focus-ring` | Set when the checkbox is focused using the keyboard. | `:host`
 * `focused`    | Set when the checkbox is focused. | `:host`
 * `indeterminate` | Set when the checkbox is in indeterminate mode. | `:host`
 * `checked` | Set when the checkbox is checked. | `:host`
 * `empty` | Set when there is no label provided. | `label`
 * `theme` | Possible values are 'condensed', 'small' | `:host`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends CheckBoxBase
 * @mixes CheckboxElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

 export type CheckboxThemes = '' | 'condensed' | 'small'

 interface CheckBoxBase extends EntityStorePathMixin {
    checked: boolean
}

export interface Checkbox extends CheckBoxBase {
    path: string
    store: EntityStore
    theme: CheckboxThemes
}

export class Checkbox extends mix(CheckboxElement).with(EntityStoreMixin, EntityStorePathMixin) {

    eventToStore(e) {
        super.valueToStore(e.target.checked)
    }

    storeToValue() {
        if (this.store) {
            const valueFrom = this.store.entity || this.store.pending
            super.checked = !!getValueFromPath(valueFrom, this.path)
        }
    }
}

customElements.define('c6o-checkbox', Checkbox)
