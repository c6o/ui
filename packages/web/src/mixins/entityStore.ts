export interface EntityStoreMixinClass {
    noInherit: boolean
    store: any
    storeChanged(): void
}

export const EntityStoreMixin = (base) => class entityStoreMixin extends base {
    _childMixins: Array<entityStoreMixin> = []
    noInherit: boolean
    store

    static get properties() {
        return {
            noInherit: { type: Boolean, attribute: 'no-inherit' },
            store: { type: Object }
        }
    }

    storeChanged() {
        // Do nothing in the base
        // Override this if you want to handle storeChanged events
        this._childMixins.forEach(child => child.store = this.store)
    }

    _parentStoreProvider
    addChildEntityStoreMixin(childElement: entityStoreMixin) {
        this._childMixins.push(childElement)
        childElement.store = this.store
        childElement._parentStoreProvider = this
        // The following can be used to debug store propagations
        // console.log(`Added ${childElement.localName} to store list for ${this.localName}`)
    }

    updated(changedProperties) {
        super.updated(changedProperties)
        if (changedProperties.has('store'))
            this.storeChanged()
    }

    async connectedCallback() {
        await super.connectedCallback()

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