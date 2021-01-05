import { TabsElement } from '@vaadin/vaadin-tabs/src/vaadin-tabs'
import { mix } from 'mixwith'
import { EntityListStoreMixin } from '../mixins'

/**
 * `<c6o-tabs>` is a Web Component for easy switching between different views.
 *
 * ```
 *   <c6o-tabs selected="4">
 *     <c6o-tab>Page 1</c6o-tab>
 *     <c6o-tab>Page 2</c6o-tab>
 *     <c6o-tab>Page 3</c6o-tab>
 *     <c6o-tab>Page 4</c6o-tab>
 *   </c6o-tabs>
 *
 *   <c6o-tabs orientation="vertical">
 *     <c6o-tab>Page 1</c6o-tab>
 *     <c6o-tab>Page 2</c6o-tab>
 *     <c6o-tab>Page 3</c6o-tab>
 *   </c6o-tabs>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|--------------------------------------
 * `back-button`     | Button for moving the scroll back
 * `tabs`            | The tabs container
 * `forward-button`  | Button for moving the scroll forward
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `orientation` | Tabs disposition, valid values are `horizontal` and `vertical`. | :host
 * `overflow` | It's set to `start`, `end`, none or both. | :host
 * `theme` | Optional tabs theme, valid values are `thin` and `light`. | :host
 *
 * @extends TabsElement
 * @mixes EntityListStoreMixin
 */
export interface Tabs extends EntityListStoreMixin {
}

export class Tabs extends mix(TabsElement).with(EntityListStoreMixin) {
}

customElements.define('c6o-tabs', Tabs)