import { ComboBoxElement } from '@vaadin/vaadin-combo-box/src/vaadin-combo-box'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin } from '../mixins'

export class ComboBox extends mix(ComboBoxElement).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
}

customElements.define('c6o-combo-box', ComboBox)