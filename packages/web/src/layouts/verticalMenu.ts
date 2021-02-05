import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { observable } from 'mobx'
import { cssAll } from '@c6o/ui-theme'

/**
 * `<c6o-vertical-menu>` is a Web Component that renders menu items vertically with menu content on the right.
 *
 * ```
 *   <c6o-vertical-menu .menuItems=${this.menuItems} title="Actions:">
 *      <c6o-image alt="volume" icon size="large" file="icon-database.svg"></c6o-image>
 *   </c6o-vertical-menu>
 * ```
 *
 * Property    | Description | Part name
 * ------------|-------------|------------
 * `menuItems` | An array of the menu items where each item in the array is in the following format:
 *               { label: 'Menu 1', icon: 'vaadin:eye', itemHtml: html`<p>Menu Content</p>` } | :host
 * 'title'     | The menu title
 *
 * @extends MobxLitElement
 */

export interface MenuItem { label: string, icon: string, itemHtml: HTMLElement }
export interface MenuItems extends Array<MenuItem> {}

@customElement('c6o-vertical-menu')
export class VerticalMenu extends MobxLitElement {

    @property({ type: Object })
    menuItems: MenuItems = []

    @property({ type: String })
    title = 'Menu:'

    @observable selectedMenuIndex = 0

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            css`
                #menu {
                    margin-top: var(--xl-spacing);
                    padding-right: var(--lg-spacing);
                }

                #menu ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }

                #menu li a {
                    align-items: center;
                    display: flex;
                    font-weight: 300;
                    margin-bottom: var(--md-spacing);
                }

                #menu li a.active {
                    font-weight: 500;
                }

                #menu iron-icon {
                    margin-right: var(--md-spacing);
                }
            `
        ]
    }

    render() {
        return html`
            <section c6o="grid">
                <section c6o="1">
                    <slot></slot>
                    <div id="menu">
                        <h3>${this.title}</h3>
                        <ul>
                            ${this.renderMenus()}
                        </ul>
                    </div>
                </section>
                <section c6o="11">
                    ${this.renderSelectedMenu()}
                </section>
            </section>
        `
    }

    renderMenus() {
        return this.menuItems.map((item, index) => {
            return html`
                <li>
                    <a class=${this.selectedMenuIndex === index ? 'active' : ''} href="#" @click=${() => this.selectedMenuIndex = index}>
                        <iron-icon icon=${item.icon}></iron-icon>
                        ${item.label}
                    </a>
                </li>
            `
        })
    }

    renderSelectedMenu = () => {
        return this.menuItems[this.selectedMenuIndex].itemHtml
    }
}