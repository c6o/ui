import { ButtonElement } from '@vaadin/vaadin-button/src/vaadin-button'
import { PolymerElement } from '@polymer/polymer'
import { observe } from 'mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'
import { EntityStore } from '@c6o/common'

/**
 * `<c6o-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <c6o-button @click=${() => doSomething()}>Click Me</c6o-button>
 *
 * <c6o-button theme="primary" @click=${doSomething}>Click Me</c6o-button>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 * 'theme' | Determines the button's look and size
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStoreMixin
 * @mixes ButtonElement
 * @mixes EntityStoreMixin
 */

export type ButtonThemes = '' | 'primary' | 'secondary' | 'tertiary' | 'default' | 'info' | 'error' | 'success' | 'warning' | 'large' | 'small' | 'icon' | 'card'

export interface Button extends EntityStoreMixin {
    disabled: boolean
    noDisableWhenBusy: boolean
    store: EntityStore
    theme: ButtonThemes
}

export class Button extends mix(ButtonElement).with(EntityStoreMixin) implements PolymerElement {
    private _busyDisposer
    noDisableWhenBusy: boolean

    static get properties() {
        return {
            ...super.properties,
            noDisableWhenBusy: { type: Boolean, value: false },
            theme: { type: String }
        }
    }

    storeChanged() {
        super.storeChanged()

        this._busyDisposer?.()
        delete this._busyDisposer

        if (this.store)
            this._busyDisposer = observe(this.store, 'busy', () => {
                if (!this.noDisableWhenBusy)
                    this.disabled = this.store.busy
            }, true)
    }

    async disconnectedCallback() {
        this._busyDisposer?.()
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-button', Button)
