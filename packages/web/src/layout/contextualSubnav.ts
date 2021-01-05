import { html, customElement, css, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssGrid, cssBase, cssTypography } from '@c6o/ui-theme'
import { navigate } from '@c6o/ui-web'

@customElement('c6o-contextual-subnav')
export class ContextualSubnav extends MobxLitElement {

    @property({ type: Object })
    location: any

    @property({ type: String })
    entityId: string

    @property({ type: String })
    headingFirstPart: string

    @property({ type: String })
    headingFirstPartLink: string

    @property({ type: String })
    headingSecondPart: string

    @property({ type: String })
    headingSecondPartLink: string

    @property({ type: String })
    headingThirdPart: string

    @property({ type: String })
    format: string

    @property({ type: Object })
    tabs: any

    @property({ type: String })
    theme = 'thin'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssGrid,
            cssBase,
            cssTypography,
            css`
                :host {
                    align-items: center;
                    background-color: var(--color-blizzard);
                    border-bottom: 1px solid var(--color-blizzard);
                    display: flex;
                    height: var(--c6o-subnav-height);
                    width: 100%;
                }

                :host([theme~="light"]) {
                    background-color: var(--color-rain);
                }

                :host([theme~="light"]) a {
                    color: var(--color-snow);
                }

                [c6o~="container"] {
                    height: var(--c6o-subnav-height);
                }

                c6o-tabs {
                    height: 58px;
                }

                c6o-tab {
                    width: 150px;
                }

                h1 {
                    color: var(--color-navy);
                    font-size: var(--lumo-font-size-xl);
                    font-weight: 400;
                    margin: 0;
                    padding-bottom: 1rem;
                }

                :host([theme~="light"]) h1 {
                    color: var(--color-snow);
                }

                span.first-part {
                    margin-right: .75rem;
                }

                span.second-part {
                    font-weight: 600;
                    margin-left: 1rem;
                    margin-right: 1rem;
                    vertical-align: middle;
                }

                span.third-part {
                    font-weight: 300;
                    margin-left: 1rem;
                    vertical-align: middle;
                }

                span.first-part + span.second-part {
                    vertical-align: inherit;
                }

                .sentence-case {
                    text-transform: capitalize;
                }
            `
        ]
    }

    get path() {
        return this.location?.pathname.split('/')
    }

    get selected() {
        const selectedIndex = this.tabs[this.path[4]]?.tabIndex || this.tabs[this.path[3]]?.tabIndex || this.tabs[this.path[2]]?.tabIndex || '0'
        return selectedIndex
    }

    render() {
        return html`
            <div c6o="container flex justify-between align-end" theme="${this.theme}">
                <h1>
                    ${this.headingFirstPartLink ? html`
                        <a class="icon" href="/${this.headingFirstPartLink}">
                            <iron-icon icon="vaadin:angle-left"></iron-icon>
                        </a>
                    ` : html`
                        <span class="first-part">
                            ${this.headingFirstPart}
                        </span> /
                    `}
                    <span class="second-part ${this.format === 'sentenceCase' ? 'sentence-case' : ''}">
                        ${this.headingSecondPartLink ? html`
                            <a alt="go back" href=${this.headingSecondPartLink}>${this.headingSecondPart}</a>
                        ` : html`${this.headingSecondPart}`}
                    </span>
                    ${this.headingThirdPart ? html`
                        / <span class="third-part ${this.format === 'sentenceCase' ? 'sentence-case' : ''}">${this.headingThirdPart}</span>
                    ` : ''}
                </h1>
                <c6o-tabs
                    id="contextual-subnav"
                    selected=${this.selected}
                    theme="${this.theme}"
                >
                    ${this.renderTabs()}
                </c6o-tabs>
            </div>
        `
    }

    renderTabs() {
        return Object.keys(this.tabs).map(pathname => {
            const link = this.entityId ? this.path[3] === this.entityId ?
                `${this.path[1]}/${this.path[2]}/${this.entityId}/${pathname}` :
                `${this.path[1]}/${this.entityId}/${pathname}` :
                `${this.path[1]}/${pathname}`

            return html`
                <c6o-tab @click=${() => navigate(link)}>
                    ${this.tabs[pathname].label}
                </c6o-tab>
            `
        })
    }
}