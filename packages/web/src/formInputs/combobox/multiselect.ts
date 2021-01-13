import 'multiselect-combo-box/multiselect-combo-box.js'
import { html, customElement, CSSResult, query, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { computed } from 'mobx'
import { cssReboot, cssBase } from '@c6o/ui-theme'

/**
 * `<c6o-multiselect-combo-box>` is a Web Component that internally uses a multiselect combo box web component based on Polymer and the vaadin-combo-box.
 * See https://github.com/gatanaso/multiselect-combo-box for further documentation
 * and https://multiselect-combo-box.web.app/demo/ for examples
 *
 *
 * ```
 * <c6o-multiselect-combo-box
 *   label="Multi-Select field"
 *   placeholder="Add some"
 *.  items=${[
 *     'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron',
 *     'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon',
 *     'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus',
 *     'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
 *     'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese',
 *     'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc'
 *   ]}
 * ></c6o-multiselect-combo-box>
 *
 *
 * @query('c6o-multiselect-combo-box')
 * selectBox
 *
 * <c6o-multiselect-combo-box
 *     .items=${[
 *         'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron',
 *         'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon',
 *         'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus',
 *         'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
 *         'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese',
 *         'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc'
 *     ]}
 * ></c6o-multiselect-combo-box>
 *
 * <c6o-button @click=${() => console.log(this.selectBox.selectedItems)}></c6o-button>
 * ```
 *
 * Attribute  | Description
 * -----------|------------
 * `items`    | An array of strings or objects, e.g. {'id': 1, 'name': 'Hydrogen'}
 * `label`    | The field label
 * `placeholder` | Placeholder text
 *
 * @extends MobxLitElement
 */

@customElement('c6o-multiselect-combo-box')
export class MultiSelectComboBox extends MobxLitElement {

    @property({ type: Array })
    items: Array<any> = []

    @property({ type: String })
    label = 'Select one or more'

    @property({ type: String })
    placeholder = 'Add...'

    @computed get selectedItems() { return this.multiselect.selectedItems }

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase
        ]
    }

    @query('multiselect-combo-box')
    multiselect

    render() {
        return html`
            <multiselect-combo-box
                .items=${this.items}
                label=${this.label}
                placeholder=${this.placeholder}
            ></multiselect-combo-box>
        `
    }
}
