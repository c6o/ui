import { html, customElement, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import MarkdownIt from 'markdown-it'
import { cssReboot, cssBase } from '@c6o/ui-theme'

@customElement('c6o-rich-text')
export class RichText extends MobxLitElement {

    @property({ type: String, attribute: 'rich-text' })
    richText: string

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [ cssReboot, cssBase ]
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