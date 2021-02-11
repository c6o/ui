import { UploadElement } from '@vaadin/vaadin-upload/src/vaadin-upload'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityStorePathMixin } from '../../mixins'
import { EntityStore } from '@c6o/common'

/**
 * `<c6o-upload>` is a Web Component for uploading multiple files with drag and drop support.
 *
 * Example:
 *
 * ```
 * <c6o-upload></c6o-upload>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `primary-buttons` | Upload container
 * `upload-button` | Upload button
 * `drop-label` | Label for drop indicator
 * `drop-label-icon` | Icon for drop indicator
 * `file-list` | File list container
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part name
 * ---|---|---
 * `nodrop` | Set when drag and drop is disabled (e. g., on touch devices) | `:host`
 * `dragover` | A file is being dragged over the element | `:host`
 * `dragover-valid` | A dragged file is valid with `maxFiles` and `accept` criteria | `:host`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends EntityStorePathMixin
 * @mixes UploadElement
 * @mixes EntityStoreMixin
 * @mixes EntityStorePathMixin
 */

export interface Upload extends EntityStorePathMixin {
    btnText: string
    errorText: string
    files: Array<File>
    set
    store: EntityStore
}

export class Upload extends mix(UploadElement).with(EntityStoreMixin, EntityStorePathMixin) {

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