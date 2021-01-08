import { html, customElement, property, query } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

/**
 * `<c6o-filter-field>` is a Web Component for providing a text input field for filtering a list.
 *
 * ```
 * <c6o-filter-field
 *   placeholder="Enter a search term..."
 *   @filter-changed=${this.filterChanged}
 * ></c6o-filter-field>
 *
 * <c6o-filter-field
 *   ?busy=${this.appsListStore.busy}
 *   ?disabled=${this.appsListStore.nullState}
 *   placeholder="Filter by name..."
 *   @filter-changed=${this.filterChanged}
 * ></c6o-filter-field>
 * ```
 *
 * Property    | Description
 * ------------|------------
 * `busy`      | Displays a spinner when true
 * `disabled`  | When true, disables the <c6o-text-field>
 * `placeholder` | Text that will appear in the field until a user puts it into focus
 *
 * @extends MobxLitElement
 */

@customElement('c6o-filter-field')
export class FilterField extends MobxLitElement {
    timeout

    @property({ type: Boolean })
    busy = false

    @property({ type: Boolean })
    disabled = false

    @property({ type: String })
    placeholder = ''

    @query('c6o-search-field')
    searchField

    render() {
        return html`
            <c6o-search-field
                ?busy=${this.busy}
                ?disabled=${this.disabled}
                placeholder=${this.placeholder}
                @input-changed=${this.handleFilterChanged}
            ></c6o-search-field>
        `
    }

    handleFilterChanged = (e) => {
        const value = e.detail || ''
        const later = () => this.filterChanged(value)
        if (this.timeout)
            clearTimeout(this.timeout)
        this.timeout = setTimeout(later, 300)
    }

    filterChanged(value) {
        const customEvent = new CustomEvent('filter-changed', {
            bubbles: true,
            composed: true,
            detail: value
        })

        this.dispatchEvent(customEvent)
    }

    reset() {
        this.searchField.reset()
    }
}
