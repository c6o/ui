import { html, customElement, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import MarkdownIt from 'markdown-it'
import { cssReboot, cssBase } from '@c6o/ui-theme'

@customElement('c6o-markdown')
export class Markdown extends MobxLitElement {

    @property({ type: String })
    markdown: string

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [ cssReboot, cssBase ]
    }

    render() {
        if (this.markdown) {
            const md = new MarkdownIt()
            const safeContent = document.createRange().createContextualFragment(md.render(this.markdown))
            return html`${safeContent}`
        }
    }
}