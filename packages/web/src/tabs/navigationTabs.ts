import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { navigate } from '@c6o/ui-web'
import { cssReboot, cssGrid, cssBase } from '@c6o/ui-theme'

/**
 * `<c6o-navigation-tabs>` is a Web Component that provides navigation functionality to a tab layout.
 *
 * ```
 *   <c6o-navigation-tabs
 *      selected=${this.selected}
 *      .tabs=${this.tabs}
 *   >
 *   </c6o-navigation-tabs>
 * ```
 *
 * Property  | Description | Part name
 * -----------|-------------|------------
 * `orientation` | Set to `horizontal` or `vertical` depending on the direction of items  | :host
 * `selected` | The currently selected tab index  | :host
 * `tabs` | An object of the tab items in the following format: { apps: { tabIndex: 0, label: 'My Apps'}, revenue: { tabIndex: 1, label: 'My Revenue'} } | :host
 *
 * @extends MobxLitElement
 */

 export interface NavigationTabsItems {
     [key: string]: { tabIndex: number, label: string }
 }

@customElement('c6o-navigation-tabs')
export class NavigationTabs extends MobxLitElement {

    @property({ type: String })
    orientation = 'horizontal'

    @property({ type: Number })
    selected = 0

    @property({ type: Object })
    tabs: NavigationTabsItems = {}

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            css`
                c6o-tabs {
                    height: var(--c6o-tabs-height);
                }

                c6o-tab {
                    width: 200px;
                }
            `
        ]
    }

    render() {
        return html`
            <c6o-tabs orientation=${this.orientation} selected=${this.selected}>
                ${this.renderTabs()}
            </c6o-tabs>
        `
    }

    renderTabs() {
        return Object.keys(this.tabs).map(pathname => {
            return html`
                <c6o-tab @click=${() => navigate(pathname)}>
                    ${this.tabs[pathname].label}
                </c6o-tab>
            `
        })
    }
}