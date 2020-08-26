import { html, customElement, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import MarkdownIt from 'markdown-it'

@customElement('c6o-markdown')
export class Markdown extends MobxLitElement {

    @property({ type: String })
    markdown

    render() {
        if (this.markdown) {

            const md = new MarkdownIt()
            const safeContent = document.createRange().createContextualFragment(md.render(this.markdown))
            return html`${safeContent}`
        }
    }
}