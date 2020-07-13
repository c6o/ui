import { observe } from 'mobx'
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
        if (errors.type !== 'FeathersError') {
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
    _pendingDisposer
    storeChanged = () => {
        super.storeChanged()

        // if the control doesn't have a path, we are using it without binding to the store
        if (this.store) {
            if (this.path) {
                this.storeToValue()

                if (this._pendingDisposer)
                    this._pendingDisposer()
                this._pendingDisposer = observe(this.store, 'pending', () => {
                    // If pending value at path is not set, reload the value from store
                    if (!this.store.pending[this.path])
                        this.storeToValue()
                })
            }

            if (this._errorDisposer)
                this._errorDisposer()
            // Observe errors
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
        super.removeEventListener('change', this.inputChanged)
        await super.disconnectedCallback()
    }
}