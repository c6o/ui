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

    inputChanged = (e) => {
        if (this.store && this.path)
            this.eventToStore(e)
    }

    async connectedCallback() {
        super.connectedCallback()
        super.addEventListener('change', this.inputChanged)
    }

    _errorDisposer
    _pendingDisposer
    storeChanged = () => {
        super.storeChanged()
        if (!this.path)
            throw new Error('path is required by JsonTextArea')

        if (this._errorDisposer)
            this._errorDisposer()
        if (this._pendingDisposer)
            this._pendingDisposer()

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

            this._pendingDisposer = observe(this.store, 'pending', () => {
                // If pending is path is not set, reload the value from store
                if (!this.store.pending[this.path])
                    this.storeToValue()
            })
        } else {
            this.value = ''
            this.errorMessage = ''
            this.invalid = false
        }
        return true
    }
}