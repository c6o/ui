import { html, customElement, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

/**
 * `<c6o-menu-button>` is a Web Component that provides a button for use as a menu item.
 *
 * ```
 * <c6o-menu-button>
 *   <img src="${this.meStore.pictureUrl}">
 *     ${this.meStore.displayFullName}
 *   </c6o-menu-button>
 * ```
 *
 * @extends MobxLitElement
 */

@customElement('c6o-menu-button')
export class MenuButton extends MobxLitElement {

    static get styles(): CSSResult[] | CSSResult {
        return css`
            #menu-link {
                color: var(--color-thunder);
                padding: 0;
            }

            #menu-link:hover {
                color: var(--color-sea);
                text-decoration: none;
            }

            ::slotted(img) {
                border-radius: var(--c6o-border-radius);
                height: var(--lumo-icon-size-l);
                margin-right: var(--sm-spacing);
                width: var(--lumo-icon-size-l);
            }
        `
    }

    render() {
        return html`
            <c6o-button id="menu-link" theme="tertiary">
                <slot></slot>
            </c6o-button>
        `
    }
}
