import { TabsElement } from '@vaadin/vaadin-tabs/src/vaadin-tabs'
import { mix } from 'mixwith'
import { EntityListStoreMixin } from '../mixins'

export interface Tabs extends HTMLElement { }
export class Tabs extends mix(TabsElement).with(EntityListStoreMixin) {
}

customElements.define('c6o-tabs', Tabs)