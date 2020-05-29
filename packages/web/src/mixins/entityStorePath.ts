import { observe } from 'mobx'

// This has to come AFTER an EntityStoreMixin in mix(xx).with(EntityStoreMixin, EntityStorePathMixin,....)
export const EntityStorePathMixin = (base) => class entityStorePathMixin extends base {

    static get properties() {
        return {
            path: { type: String },
            skipStore: { type: Boolean, value: false }
        }
    }

    // From: https://stackoverflow.com/questions/6842795/dynamic-deep-setting-for-a-javascript-object
    setValue(value) {
        const a = this.path.split('.')
        let o = this.store.pending
        while (a.length - 1) {
            const n = a.shift()
            if (!(n in o)) o[n] = {}
            o = o[n]
        }
        o[a[0]] = value
    }

    getValue() {
        if (!this.store.entity)
            return ''
        let path = this.path.replace(/\[(\w+)\]/g, '.$1')
        path = path.replace(/^\./, '')
        const a = path.split('.')
        let o = this.store.entity
        while (a.length) {
            const n = a.shift()
            if (!(n in o)) return
            o = o[n]
        }
        return o
    }

    eventToStore(e) {
        this.setValue(e.target.value.trim())
    }

    storeToValue() {
        super.value = this.getValue()
    }

    checkForErrors = () => {
        const errors = this.store?.errors
        if (errors.type !== 'FeathersError') {
            const error = Object.keys(errors).find(key => key === this.path)
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
        if (!this.skipStore && this.store && this.path)
            this.eventToStore(e)
    }

    _errorDisposer
    _pendingDisposer
    storeChanged = () => {
        super.storeChanged()

        if (!this.path)
            throw new Error('path is required by EntityStorePathMixin')

        if (this.store) {
            if (!this.skipStore)
                this.storeToValue()

            if (this._errorDisposer)
                this._errorDisposer()
            // Observe errors
            this._errorDisposer = observe(this.store, 'errors', () => {
                this.checkForErrors()
            })

            if (this._pendingDisposer)
                this._pendingDisposer()
            this._pendingDisposer = observe(this.store, 'pending', () => {
                // If pending value at path is not set, reload the value from store
                if (!this.store.pending[this.path])
                    this.storeToValue()
            })
        } else {
            this.value = ''
            this.errorMessage = ''
            this.invalid = false
        }
    }

    async connectedCallback() {
        super.connectedCallback()
        super.addEventListener('change', this.inputChanged)
    }

    async disconnectedCallback() {
        await super.disconnectedCallback()
        super.removeEventListener('change', this.inputChanged)
    }
}