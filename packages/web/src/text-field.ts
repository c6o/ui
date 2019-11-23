import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field'
import { mix, EntityStoreMixin } from './mixins'
import { observe, toJS } from 'mobx'

export class TextField extends mix(TextFieldElement).with(EntityStoreMixin) {
    path: string

    static get properties() {
            return {
            //...super.properties,
            path: {type: String}
        }
    }

    inputChanged = (e) => {
        if (this.store && this.path)
            this.store.pending[this.path] = e.target.value
    }

    async connectedCallback() {
        super.connectedCallback()
        super.addEventListener('input', this.inputChanged)
    }

    _errorDisposer
    storeChanged = () => {
        super.storeChanged()
        if (!this.path)
            throw new Error('path is required by TextField')

        if (this._errorDisposer)
            this._errorDisposer()

        if (this.store) {
            // Set the value
            super.value = this.store.entity ? this.store.entity[this.path] : ''

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

customElements.define('traxitt-text-field', TextField)