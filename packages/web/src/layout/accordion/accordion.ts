import { AccordionElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion'

/**
 * `<c6o-accordion>` is a Web Component implementing accordion widget —
 * a vertically stacked set of expandable panels. The component should be
 * used as a wrapper for two or more `<c6o-accordion-panel>` components.
 *
 * Panel headings function as controls that enable users to open (expand)
 * or hide (collapse) their associated sections of content. The user can
 * toggle panels by mouse click, Enter and Space keys.
 *
 * Only one panel can be opened at a time, opening a new one forces
 * previous panel to close and hide its content.
 *
 * ```
 * <c6o-accordion>
 *   <c6o-accordion-panel>
 *     <div slot="summary">Panel 1</div>
 *     This panel is opened, so the text is visible by default.
 *   </c6o-accordion-panel>
 *   <c6o-accordion-panel>
 *     <div slot="summary">Panel 2</div>
 *     After opening this panel, the first one becomes closed.
 *   </c6o-accordion-panel>
 * </c6o-accordion>
 * ```
 *
 * ### Styling
 *
 * See the `<c6o-accordion-panel>`
 * documentation for the available state attributes and stylable shadow parts.
 *
 * **Note:** You can apply the theme to `<c6o-accordion>` component itself,
 * especially by using the following CSS selector:
 *
 * ```
 * :host ::slotted(c6o-accordion-panel) {
 *   margin-bottom: 5px;
 * }
 * ```
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends AccordionElement
 */

export interface Accordion extends HTMLElement {
}

export class Accordion extends AccordionElement {
}

customElements.define('c6o-accordion', Accordion)