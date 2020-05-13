import { UploadElement } from '@vaadin/vaadin-upload/src/vaadin-upload'
import { mix } from '@traxitt/common'
import { EntityStoreMixin, PathEntityStoreMixin } from './mixins'

export class Upload extends mix(UploadElement).with(EntityStoreMixin, PathEntityStoreMixin) {
}

customElements.define('traxitt-upload', Upload)