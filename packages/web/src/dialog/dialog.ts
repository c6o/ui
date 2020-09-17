import { html, customElement, property, query, PropertyValues } from 'lit-element'
import { render } from 'lit-html'
import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { MobxLitElement } from '@adobe/lit-mobx'
import { toggleFullScreen } from 'easymde'

@customElement('c6o-dialog')
export class Dialog extends MobxLitElement {

    @property({type: Boolean})
    opened

    @query('vaadin-dialog')
    dialog: DialogElement

    overlay

    render() {
        return html`
            <slot hidden></slot>
            <vaadin-dialog aria-label="simple" ?opened=${this.opened} .renderer=${this.renderContent}>
            </vaadin-dialog>
        `
    }

    renderContent = (root) => {
        if (root.firstElementChild)
            return
            this.update
        this.overlay = root
        const slot = this.shadowRoot.querySelector('slot')
        const elements = slot.assignedElements({flatten: true})
        for(const e of elements)
            root.appendChild(e)
    }
}