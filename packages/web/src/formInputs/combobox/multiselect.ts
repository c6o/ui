import MultiselectComboBox from 'multiselect-combo-box/multiselect-combo-box.js'
import { mix } from 'mixwith'
import { EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin } from '../../mixins'

export interface MultiSelectComboBox extends EntityStorePathMixin {
}

export class MultiSelectComboBox extends mix(MultiselectComboBox).with(EntityStoreMixin, EntityListStoreMixin, EntityStorePathMixin) {
}

customElements.define('c6o-multiselect-combo-box', MultiselectComboBox)
