import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase } from '@c6o/ui-theme'

/**
 * `<c6o-label>` is a Web Component for simple labels that can be themed.
 *
 * ```
 * <c6o-label>${this.successMessage}</c6o-label>
 * ```
 *
 * Property   | Description
 * -----------|------------
 * `theme`    | Possible values are `success` or `error`
 *
 * @extends MobxLitElement
 */

@customElement('c6o-label')
export class Label extends MobxLitElement {

    @property({ type: String })
    theme = 'success'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            css`
                label {
                    font-size: var(--lumo-font-size-s);
                    padding-left: var(--sm-spacing);
                }

                label[theme~="success"] {
                    color: var(--color-ocean);
                }

                label[theme~="error"] {
                    color: var(--color-fire);
                }
            `
        ]
    }

    render() {
        return html`
            <label theme="${this.theme}">
                <slot></slot>
            <label>
        `
    }
}