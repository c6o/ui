import { ButtonElement } from '@vaadin/vaadin-button/src/vaadin-button'
import { PolymerElement } from '@polymer/polymer'
import { observe } from 'mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'
import { EntityStore } from '@c6o/common'

export interface Button extends EntityStoreMixin    {
    disabled: boolean
    noDisableWhenBusy: boolean
    store: EntityStore
}

export class Button extends mix(ButtonElement).with(EntityStoreMixin) implements PolymerElement {
    private busyDisposer
    noDisableWhenBusy: boolean

    static get properties() {
        return {
            ...super.properties,
            noDisableWhenBusy: { type: Boolean }
        }
    }

    storeChanged() {
        super.storeChanged()

        this.busyDisposer?.()
        delete this.busyDisposer

        if (this.store)
            this.busyDisposer = observe(this.store, 'busy', () => {
                if (!this.noDisableWhenBusy)
                    this.disabled = this.store.busy
            }, true)
    }

    async disconnectedCallback() {
        this.busyDisposer?.()
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-button', Button)
