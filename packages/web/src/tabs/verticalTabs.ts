import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { observable } from 'mobx'
import { cssAll } from '@c6o/ui-theme'
import { TabsItems } from './'

/**
 * `<c6o-vertical-tabs>` is a Web Component that renders tabs vertically with tab content on the right.
 *
 * ```
 *   <c6o-vertical-tabs
 *      .tabs=${this.tabs}
 *   >
 *   </c6o-vertical-tabs>
 * ```
 *
 * Property  | Description | Part name
 * ----------|-------------|------------
 * `tabs`    | An array of the tab items where each item in the array is in the following format: { label: 'Tab 1', tabHtml: html`<p>Tab Content</p>` } | :host
 *
 * @extends MobxLitElement
 */

export interface VerticalTabsItem { label: string, tabHtml: HTMLElement }
export interface VerticalTabsItems extends Array<VerticalTabsItem> {}

@customElement('c6o-vertical-tabs')
export class VerticalTabs extends MobxLitElement {

    @property({ type: Boolean })
    panel = false

    @property({ type: Object })
    tabs: TabsItems = []

    @observable selectedTabIndex = 0

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            css`
                c6o-tab {
                    min-width: 150px;
                }
            `
        ]
    }

    render() {
        return html`
            <div c6o="grid">
                <c6o-tabs c6o="2" orientation="vertical">
                    ${this.renderTabs()}
                </c6o-tabs>

                <section c6o="10" class="${this.panel ? 'panel' : ''}">
                    ${this.renderTab()}
                </section>
            </div>
        `
    }

    renderTabs() {
        return this.tabs.map((tab, index) => {
            return html`
                <c6o-tab @click=${() => this.selectedTabIndex = index}>
                    ${tab.label}
                </c6o-tab>
            `
        })
    }

    renderTab = () => {
        return this.tabs[this.selectedTabIndex].tabHtml
    }
}