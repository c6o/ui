import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { observable } from 'mobx'
import { cssAll } from '@c6o/ui-theme'
import { TabsItems } from './'

/**
 * `<c6o-horizontal-tabs>` is a Web Component that renders tabs horizontall with tab content below.
 *
 * ```
 *   <c6o-horizontal-tabs
 *      .tabs=${this.tabs}
 *   >
 *   </c6o-horizontal-tabs>
 * ```
 *
 * Property  | Description | Part name
 * ----------|-------------|------------
 * `tabs`    | An array of the tab items where each item in the array is in the following format: { label: 'Tab 1', tabHtml: html`<p>Tab Content</p>` } | :host
 *
 * @extends MobxLitElement
 */

@customElement('c6o-horizontal-tabs')
export class HorizontalTabs extends MobxLitElement {

    @property({ type: Object })
    tabs: TabsItems = []

    @observable selectedTabIndex = 0

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            css`
                c6o-tabs {
                    border-bottom: 1px solid var(--color-blizzard);
                    height: var(--c6o-tabs-height);
                    width: 100%;
                }

                c6o-tab {
                    min-width: 150px;
                }
            `
        ]
    }

    render() {
        return html`
            <c6o-tabs>
                ${this.renderTabs()}
            </c6o-tabs>

            <c6o-container padded>
                ${this.renderTab()}
            </c6o-container>
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