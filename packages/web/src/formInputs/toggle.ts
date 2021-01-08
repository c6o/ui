import { html, customElement, css, property, CSSResult } from 'lit-element'
import '@polymer/paper-toggle-button/paper-toggle-button.js'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'
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
 * `checked`   | Whether the toggle is on (checked) or off
 * `label-off` | The left-hand label for the OFF position
 * `label-on`  | The right-hand label for the ON position
 *
 * @extends MobxLitElement
 * @mixes MobxLitElement
 * @mixes EntityStoreMixin
 */

export interface Toggle extends EntityStoreMixin {
}

@customElement('c6o-toggle')
export class Toggle extends mix(MobxLitElement).with(EntityStoreMixin) {

    @property({ type: Boolean })
    checked: boolean

    @property({ type: String, attribute: 'label-off' })
    labelOff: string

    @property({ type: String, attribute: 'label-on' })
    labelOn: string

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
                    margin-bottom: var(--xl-spacing);
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
            <div c6o="flex align-center">
                ${this.labelOff ? html`
                    <label class="off inline ${this.checked ? '' : 'active'}">${this.labelOff}</label>
                ` : ''}
                <paper-toggle-button c6o="fit" ?checked=${this.checked} @click="${this.handleToggleClick}">
                    ${!this.labelOff && !this.labelOn ? html`
                        <span id="label">
                            <slot></slot>
                        </span>
                    ` : ''}
                </paper-toggle-button>
                ${this.labelOn ? html`
                    <label class="on inline ${this.checked ? 'active' : ''}">${this.labelOn}</label>
                ` : ''}
            </div>
        `
    }

    handleToggleClick = (e) => {
        this.checked = e.target.checked
        const customEvent = new CustomEvent('toggle', {
            detail: e.target.checked,
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(customEvent)
    }
}
