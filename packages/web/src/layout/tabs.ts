import { TabsElement } from '@vaadin/vaadin-tabs/src/vaadin-tabs'
import { mix } from '@c6o/common'
import { EntityListStoreMixin } from '../mixins'

export class Tabs extends mix(TabsElement).with(EntityListStoreMixin) {
}

customElements.define('c6o-tabs', Tabs)