import { html, customElement, property, css, CSSResult, query } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssAnimations } from '@c6o/ui-theme'

/**
 * `<c6o-search-field>` is a Web Component for providing a search field.
 * It can initiate the search when the user types in a value and presses ENTER,
 * or using the standard on-input and on-change events.
 *
 * ```
 * <c6o-search-field
 *   placeholder="Enter a search term..."
 *   theme="inline light tall"
 *   @search=${this.handleSearch}
 * ></c6o-search-field>
 *
 * <c6o-search-field
 *   ?busy=${this.appsListStore.busy}
 *   ?disabled=${this.appsListStore.nullState}
 *   placeholder="Filter by name..."
 *   @input-changed=${this.handleFilterChanged}
 * ></c6o-search-field>
 * ```
 *
 * Property    | Description
 * ------------|------------
 * `busy`      | Displays a spinner when true
 * `disabled`  | When true, disables the <c6o-text-field>
 * `placeholder` | Text that will appear in the field until a user puts it into focus
 * `theme`     | Set to change the appearance or size of the field. Possible values are 'light', 'tall', 'condensed', 'reversed'
 *
 * @extends MobxLitElement
 */

export type SearchFieldTheme = '' | 'light' | 'tall' | 'condensed' | 'reversed'

@customElement('c6o-search-field')
export class SearchField extends MobxLitElement {

    @property({ type: Boolean })
    busy = false

    @property({ type: Boolean })
    disabled = false

    @property({ type: String })
    placeholder = ''

    @property({ type: String })
    theme: SearchFieldTheme = ''

    @property({ type: String })
    value = ''

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssAnimations,
            css`
                @keyframes spinner {
                    to { transform: rotate(360deg); }
                }

                .busy::before {
                    top: 50%;
                    left: 262px;
                    width: 20px !important;
                    height: 20px !important;
                    margin-top: -10px;
                    margin-left: -10px;
                }

                @media (min-width: 1234px) {
                    .busy::before {
                        left: 422px;
                    }
                }
            `
        ]
    }

    @query('c6o-text-field')
    searchField

    render() {
        return html`
            <c6o-text-field
                class=${this.busy ? 'busy' : ''}
                clear-button-visible
                ?disabled=${this.disabled}
                placeholder=${this.placeholder}
                theme=${['inline search', `${this.theme}`].join(' ')}
                value=${this.value}
                @change=${(e) => this.fireCustomEvent(e, 'value-changed')}
                @input=${(e) => this.fireCustomEvent(e, 'input-changed')}
            >
                <iron-icon icon="lumo:search" slot="prefix"></iron-icon>
            </c6o-text-field>
        `
    }

    handleSearch = (e) => {
        // Explicitly perform a search only when ENTER is pressed
        if (e.key === 'Enter')
            this.fireCustomEvent(e, 'search')
    }

    fireCustomEvent(e, eventName) {
        const customEvent = new CustomEvent(eventName, {
            bubbles: true,
            composed: true,
            detail: e.target.value
        })

        this.dispatchEvent(customEvent)
    }

    reset() {
        this.searchField.value = ''
    }

    async connectedCallback() {
        await super.connectedCallback()

        await window.customElements.whenDefined('c6o-text-field')
        this.searchField?.addEventListener('keyup', this.handleSearch)
    }
}
