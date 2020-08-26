import { html, customElement, property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import MarkdownIt from 'markdown-it'

@customElement('c6o-markdown')
export class Markdown extends MobxLitElement {

    @property({ type: String })
    markdown

    render() {
        if (this.markdown) {
            const md = new MarkdownIt()
            return html`${unsafeHTML(md.render(this.markdown))}`
        }
    }
}