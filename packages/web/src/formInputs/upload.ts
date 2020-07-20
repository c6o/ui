import { UploadElement } from '@vaadin/vaadin-upload/src/vaadin-upload'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, EntityStorePathMixin } from '../mixins'

export class Upload extends mix(UploadElement).with(EntityStoreMixin, EntityStorePathMixin) {

    static get properties() {
        return {
            btnText: { type: String, value: 'Select File...' },
            errorText : { type: String, value: 'Error uploading file' }
        }
    }

    async connectedCallback() {
        await super.connectedCallback()

        this.set('i18n.addFiles.one', this.btnText)
        this.set('i18n.error.fileIsTooBig', this.errorText)
    }
}

customElements.define('c6o-upload', Upload)