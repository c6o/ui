import { observe } from 'mobx'

// This has to come AFTER an EntityStoreMixin in mix(xx).with(EntityStoreMixin, PathEntityStoreMixin,....)
export const PathEntityStoreMixin = (base) => class entityPathStoreMixin extends base {
    path: string

    static get properties() {
        return {
            //...super.properties,
            path: { type: String }
        }
    }

    eventToStore(e) {
        this.store.pending[this.path] = e.target.value
    }

    storeToValue() {
        super.value = this.store.entity ? this.store.entity[this.path] : ''
    }

    inputChanged = (e) => {
        if (this.store && this.path)
            this.eventToStore(e)
    }

    async connectedCallback() {
        super.connectedCallback()
        super.addEventListener('input', this.inputChanged)
    }

    _errorDisposer
    storeChanged = () => {
        super.storeChanged()
        if (!this.path)
            throw new Error('path is required by JsonTextArea')

        if (this._errorDisposer)
            this._errorDisposer()

        if (this.store) {
            // Set the value
            this.storeToValue()

            // Observe errors
            this._errorDisposer = observe(this.store, 'errors', () => {
                const error = this.store.errors[this.path]
                if (error) {
                    this.errorMessage = error.message
                    this.invalid = true
                } else {
                    this.errorMessage = ''
                    this.invalid = false
                }
            })
        } else {
            this.value = ''
            this.errorMessage = ''
            this.invalid = false
        }
        return true
    }
}