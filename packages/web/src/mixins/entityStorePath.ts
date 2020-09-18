import { observe, reaction } from 'mobx'
import { setValueFromPath, getValueFromPath } from './path'

// This has to come AFTER an EntityStoreMixin in mix(xx).with(EntityStoreMixin, EntityStorePathMixin,....)
export const EntityStorePathMixin = (base) => class entityStorePathMixin extends base {

    static get properties() {
        return {
            path: { type: String },
        }
    }

    eventToStore(e) {
        setValueFromPath(this.store.pending, this.path, e.target.value.trim())
    }

    storeToValue() {
        const valueFrom = this.store.entity || this.store.pending
        super.value = getValueFromPath(valueFrom, this.path)
    }

    checkForErrors = () => {
        const errors = this.store?.errors
        if (errors && errors.type !== 'FeathersError') {
            const error = Object.keys(errors).find(key => key === this.path || key === this.id)
            if (error) {
                this.errorMessage = errors[error].message
                this.invalid = true
            } else {
                this.errorMessage = ''
                this.invalid = false
            }
        }
    }

    inputChanged = (e) => {
        if (this.store && this.path)
            this.eventToStore(e)
    }

    _errorDisposer
    _reactionDisposer

    storeChanged = () => {
        super.storeChanged()

        // if the control doesn't have a path, we are using it without binding to the store
        if (this.store) {
            if (this.path) {
                // Load the value from the store if initialized
                if (this.store.initialized)
                    this.storeToValue()

                this._reactionDisposer?.()
                this._reactionDisposer = reaction(
                    () => ([this.store.pending, this.store.initialized]),
                    () => {
                        // Either the store is reset or initialized
                        // load the value as long as it's not pending
                        if (!this.store.pending[this.path])
                            this.storeToValue()
                    }
                )
            }

            this._errorDisposer?.()
            this._errorDisposer = observe(this.store, 'errors', () => {
                this.checkForErrors()
            })
        } else {
            this.value = ''
            this.errorMessage = ''
            this.invalid = false
        }
    }

    async connectedCallback() {
        await super.connectedCallback()
        super.addEventListener('change', this.inputChanged)
    }

    async disconnectedCallback() {
        this._reactionDisposer?.()
        this._errorDisposer?.()

        super.removeEventListener('change', this.inputChanged)
        await super.disconnectedCallback()
    }
}