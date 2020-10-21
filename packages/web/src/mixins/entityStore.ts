export interface EntityStoreMixin {
    noInherit: boolean
    store: any
    storeChanged(): void
}

// Used by our Vaadin components, which are Polymer 3
export const EntityStoreMixin = (base) => class EntityStoreMixinClass extends base {
    _childMixins: Array<EntityStoreMixinClass> = []
    noInherit: boolean
    store

    static get properties() {
        return {
            noInherit: { type: Boolean, reflect: true },
            store: { type: Object, observer: 'storeChanged', reflect: true }
        }
    }

    storeChanged() {
        // Do nothing in the base
        // Override this if you want to handle storeChanged events
        this._childMixins.forEach(child => child.store = this.store)
    }

    _parentStoreProvider
    addChildEntityStoreMixin(childElement: EntityStoreMixinClass) {
        this._childMixins.push(childElement)
        childElement.store = this.store
        childElement._parentStoreProvider = this
        // The following can be used to debug store propagations
        // console.log(`Added ${childElement.localName} to store list for ${this.localName}`)
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

// Used by LitElement components
export const EntityStoreLitMixin = (base) => class EntityStoreLitMixinClass extends base {
    _childMixins: Array<EntityStoreLitMixinClass> = []
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
    addChildEntityStoreMixin(childElement: EntityStoreLitMixinClass) {
        this._childMixins.push(childElement)
        childElement.store = this.store
        childElement._parentStoreProvider = this
        // The following can be used to debug store propagations
        // console.log(`Added ${childElement.localName} to store list for ${this.localName}`)
    }

    updated(changedProperties) {
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