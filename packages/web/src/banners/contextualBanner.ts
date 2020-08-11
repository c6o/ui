import { html, customElement, css, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssGrid, cssBase, cssIcons } from '@c6o/ui-theme'

@customElement('c6o-contextual-banner')
export class ContextualBanner extends MobxLitElement {

    @property({ type: String })
    icon = 'info-circle'

    @property({ type: String })
    theme = 'info'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            cssIcons,
            css`
                .banner {
                    align-items: flex-start;
                    border-radius: var(--c6o-border-radius);
                    display: flex;
                    flex-wrap: nowrap;
                    padding: 1rem;
                    width: 100%;
                    margin-bottom: var(--xl-spacing);
                }

                .banner.info {
                    background-color: var(--color-white);
                    border: 1px solid var(--color-sea);
                    color: var(--color-sea);
                }

                .banner.success {
                    background-color: var(--color-white);
                    border: 1px solid var(--color-ocean);
                    color: var(--color-ocean);
                }

                .banner.warning {
                    background-color: var(--color-white);
                    border: 1px solid var(--color-sun);
                    color: var(--color-navy);
                }

                .banner.error {
                    background-color: var(--color-white);
                    border: 1px solid var(--color-fire);
                    color: var(--color-fire);
                }

                .banner.centered {
                    justify-content: center;
                    margin: var(--lg-spacing) 0;
                }

                .banner iron-icon {
                    flex-shrink: 0;
                }

                .banner ::slotted(p:last-child) {
                    margin-bottom: 0 !important;
                }
            `
        ]
    }

    render() {
        return html`
            <div class="banner ${this.theme}">
                <iron-icon class="${this.theme}" icon="vaadin:${this.icon}"></iron-icon>
                <span>
                    <slot></slot>
                </span>
          </div>
        `
    }
}