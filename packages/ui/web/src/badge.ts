import { html, customElement, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssBadges } from '@c6o/ui-theme'

/**
 * `<c6o-badge>` is a Web Component that provides a simple UI badge.
 *
 * ```
 * <c6o-badge
 *   id=${app.category}
 *   label=${app.category}
 *   theme="link contrast"
 *   @click=${this.handleBadgeClick}
 * ></c6o-badge>
 * ```
 *
 * Property    | Description
 * ------------|------------
 * `label`     | The text that will appear in the badge
 * `theme`     | The theme determines what the badge will look like. Possible values: small, large, success, error, contrast, primary, link, delete, pill
 *
 * @extends MobxLitElement
 */

 export type BadgeThemes = '' | 'small' | 'large' | 'success' | 'error' | 'contrast' | 'primary' | 'link' | 'delete' | 'pill'

@customElement('c6o-badge')
export class Badge extends MobxLitElement {

    @property({ type: String })
    label

    @property({ type: String })
    theme: BadgeThemes = ''

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssBadges
        ]
    }

    render() {
        return html`
            <div class="badge" theme=${this.theme}>
                ${this.label}
            </div>
        `
    }
}