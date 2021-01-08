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
                text-decoration: none;
                color: var(--color-sea);
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
