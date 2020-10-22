import { observe, reaction } from 'mobx'
import { setValueFromPath, getValueFromPath } from './path'

// This has to come AFTER an EntityStoreMixin in mix(xx).with(EntityStoreMixin, EntityStorePathMixin,....)
export const EntityStorePathMixin = (base) => class EntityStorePathMixinClass extends base {
    _errorDisposer
    _reactionDisposer

    static get properties() {
        return {
            hasPendingReset: { type: Boolean, value: false },
            path: { type: String },
            type: { type: String }
        }
    }

    eventToStore(e) {
        this.valueToStore(e.target.value.trim())
    }

    valueToStore(value) {
        setValueFromPath(this.store.pending, this.path, value)
        if (this.type) {
            const path = `${this.path.split('.')[0]}.type`
            setValueFromPath(this.store.pending, path, this.type)
        }
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

    storeChanged = () => {
        super.storeChanged()

        // if the control doesn't have a path, we are using it without binding to the store
        if (this.store) {
            if (this.path) {
                // Load the value from the store if initialized
                if (this.store.initialized)
                    this.storeToValue()
                else if (!getValueFromPath(this.store.pending, this.path) && this.required && !this.disabled) {
                    // Set pending to an empty value if the field is required so an error is shown
                    // even if the field is never activated by the user
                    setValueFromPath(this.store.pending, this.path, '')
                    this.hasPendingReset = true
                }

                this._reactionDisposer?.()
                this._reactionDisposer = reaction(
                    () => ([this.store.pending, this.store.initialized]),
                    () => {
                        // Either the store was reset or initialized
                        // Load the value as long as it's not pending
                        if (!this.store.pending[this.path])
                            this.storeToValue()
                            if (this.hasPendingReset) {
                                // We set pending.path to an empty string previously, but now our store is initialized
                                // and we need to populate pending.path with its value, if it has one
                                this.valueToStore(super.value)
                            }
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