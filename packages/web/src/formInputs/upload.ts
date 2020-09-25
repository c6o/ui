import { UploadElement } from '@vaadin/vaadin-upload/src/vaadin-upload'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export interface Upload extends PolymerElement {
    files
    set
    store
}

export class Upload extends mix(UploadElement).with(EntityStoreMixin, EntityStorePathMixin) {
    btnText: string
    errorText: string

    static get properties() {
        return {
            btnText: { type: String, value: 'Select File...' },
            errorText : { type: String, value: 'Error uploading file' }
        }
    }

    reset() {
        this.files = []
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.set('i18n.addFiles.one', this.btnText)
        this.set('i18n.error.fileIsTooBig', this.errorText)
    }
}

customElements.define('c6o-upload', Upload)