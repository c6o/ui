import { html, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

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

customElements.define('c6o-menu-button', MenuButton)
