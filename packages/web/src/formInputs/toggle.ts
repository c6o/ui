import { LitElement, html, customElement, css, property, CSSResult } from 'lit-element'
import '@polymer/paper-toggle-button/paper-toggle-button.js'
import { cssReboot, cssBase, cssGrid, cssTypography } from '@c6o/ui-theme'

/**
 * `<c6o-toggle>` is a Web Component for a left-right toggle.
 *
 * ```
 * <c6o-toggle
 *   ?checked=${!store.hasPrivacyUrl}
 *   label-off="URL"
 *   label-on="Full Text"
 *   @toggle=${this.handlePrivacyToggle}
 * ></c6o-toggle>
 * ```
 *
 * Both labels are optional
 *
 *  Attribute | Description
 * ------------|------------
 * `is-checked` | Whether the toggle is on (checked) or off
 * `label-off` | The left-hand label for the OFF position
 * `label-on`  | The right-hand label for the ON position
 *
 * @extends LitElement
 */

@customElement('c6o-toggle')
export class Toggle extends LitElement {

    @property({ type: Boolean, attribute: 'is-checked' })
    isChecked: boolean

    @property({ type: String, attribute: 'label-off' })
    labelOff = 'OFF'

    @property({ type: String, attribute: 'label-on' })
    labelOn = 'ON'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            cssTypography,
            css`
                :host {
                    --paper-toggle-button-checked-bar-color: var(--color-ocean);
                    --paper-toggle-button-checked-button-color: var(--color-ocean);
                    cursor: pointer;
                    display: block;
                    margin-bottom: var(--lg-spacing);
                }

                #label {
                    color: var(--color-thunder);
                    font-size: var(--lumo-font-size-s);
                    margin-left: var(--xs-spacing);
                }

                label {
                    font-weight: 500;
                    text-transform: uppercase;
                }

                label.off {
                    margin-left: 0;
                    margin-right: var(--lg-spacing);
                }

                label.active {
                    font-weight: bold;
                }

                :host([theme~="condensed"]) {
                    margin-bottom: var(--xs-spacing);
                }
            `
        ]
    }

    render() {
        return html`
            <c6o-flex v-centered>
                ${this.labelOff ? html`
                    <label class="off inline ${this.isChecked ? '' : 'active'}">${this.labelOff}</label>
                ` : ''}

                <paper-toggle-button c6o="fit" ?checked=${this.isChecked} @click="${this.handleToggleClick}">
                    ${!this.labelOff && !this.labelOn ? html`
                        <span id="label">
                            <slot></slot>
                        </span>
                    ` : ''}
                </paper-toggle-button>

                ${this.labelOn ? html`
                    <label class="on inline ${this.isChecked ? 'active' : ''}">${this.labelOn}</label>
                ` : ''}
            </c6o-flex>
        `
    }

    handleToggleClick = (e) => {
        this.isChecked = e.target.checked
        const customEvent = new CustomEvent('toggle', {
            detail: e.target.checked,
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(customEvent)
    }
}
