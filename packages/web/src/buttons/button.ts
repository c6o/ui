import { ButtonElement } from '@vaadin/vaadin-button/src/vaadin-button'
import { PolymerElement } from '@polymer/polymer'
import { observe } from 'mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStoreMixinClass } from '../mixins'

export interface Button extends PolymerElement, ButtonElement, EntityStoreMixinClass    {
    disabled: boolean
    noDisableWhenBusy: boolean
    store
}

export class Button extends mix(ButtonElement).with(EntityStoreMixin)  {
    private busyDisposer
    noDisableWhenBusy: boolean

    static get properties() {
        return {
            ...super.properties,
            noDisableWhenBusy: { type: Boolean }
        }
    }

    storeChanged() {
        //@ts-ignore
        super.storeChanged()

        this.busyDisposer?.()
        delete this.busyDisposer

        if (this.store)
            this.busyDisposer = observe(this.store, 'busy', () => {
                if (!this.noDisableWhenBusy)
                    this.disabled = this.store.busy
            })
    }

    async disconnectedCallback() {
        this.busyDisposer?.()
        await super.disconnectedCallback()
    }
}

customElements.define('c6o-button', Button)
