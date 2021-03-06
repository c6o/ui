import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import MarkdownIt from 'markdown-it'
import { cssReboot, cssBase, cssTypography } from '@c6o/ui-theme'

/**
 * `<c6o-rich-text>` is a Web Component for rendering either markdown or a string of HTML in the UI.
 *
 * ```
 * <c6o-rich-text rich-text=${this.store.shortSummary}></c6o-rich-text>
 * ```
 *
 * Attribute   | Description
 * ------------|------------
 * `rich-text` | A string of either markdown or HTML
 * `theme`     | Possible values are 'dark', 'no-margin', 'smaller', 'centered'
 *
 * @extends MobxLitElement
 */

export type RichTextTheme = '' | 'dark' | 'no-margin' | 'smaller' | 'centered'

export interface RichText extends MobxLitElement {
    theme: RichTextTheme
}

@customElement('c6o-rich-text')
export class RichText extends MobxLitElement {

    @property({ type: String, attribute: 'rich-text' })
    richText: string

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssTypography,
            css`
                :host([theme~="no-margin"]) p {
                    margin-bottom: 0;
                }

                :host([theme~="smaller"]) {
                    font-size: .9rem;
                }

                :host([theme~="dark"]) a {
                    color: var(--color-fog);
                }

                :host([theme~="dark"]) a:hover {
                    color: var(--color-white);
                }

                :host([theme~="centered"]) {
                    text-align: center;
                }
            `
         ]
    }

    render() {
        if (this.richText?.length) {
            let htmlToRender
            // Check if the content has HTML tags
            const hasHTML = this.richText.match(/\/[a-z]*>/i)
            if (hasHTML) {
                const parser = new DOMParser()
                const parsedContent = parser.parseFromString(this.richText, 'text/html').body
                htmlToRender = parsedContent.innerHTML
            } else {
                const md = new MarkdownIt()
                htmlToRender = md.render(this.richText)
            }
            const safeContent = document.createRange().createContextualFragment(htmlToRender)
            return html`${safeContent}`
        }
    }
}