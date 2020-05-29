import { EntityStore } from '@traxitt/common'

export const EntityStoreMixin = (base) => class entityStoreMixin extends base {

    static get properties() {
        return {
            store: { type: EntityStore, observer: 'storeChanged', reflect: true },
            noInherit: { type: Boolean, reflect: true }
        }
    }

    _childMixins : Array<entityStoreMixin> = []
    storeChanged() {
        // Cannot use => notation in base class!?!
        // Do nothing in the base
        // Override this if you want to handle storeChanged events
        this._childMixins.forEach(child => child.store = this.store)
    }

    _parentStorePorvider
    addChildEntityStoreMixin(childElement: entityStoreMixin) {
        this._childMixins.push(childElement)
        childElement.store = this.store
        childElement._parentStorePorvider = this
        // The following can be used to debug store propagations
        // console.log(`Added ${childElement.localName} to store list for ${this.localName}`)
    }

    async connectedCallback() {
        super.connectedCallback()

        if (!this.store && !this.noInherit) {
            let el = this
            while (el) {
                el = el.parentNode
                if (el && el.addChildEntityStoreMixin) {
                    el.addChildEntityStoreMixin(this)
                    return
                }
                if (el && el.owner && el.owner.addChildEntityStoreMixin) {
                    el.owner.addChildEntityStoreMixin(this)
                    return
                }
            }
        }
    }
}