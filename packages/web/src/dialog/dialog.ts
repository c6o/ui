import { html, customElement, property, query, css } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { WebDialog } from 'web-dialog'

@customElement('c6o-dialog')
export class Dialog extends MobxLitElement {

    @property({ type: Boolean })
    opened

    @property({ type: String })
    size = 'default'

    // https://github.com/andreasbm/web-dialog/blob/master/src/lib/web-dialog.ts
    @query('web-dialog')
    dialog: WebDialog

    static get styles() {
        return css`
            web-dialog {
                --dialog-container-padding: 0;
                --dialog-border-radius: var(--c6o-border-radius);
                --dialog-animation-duration: 0;
            }

            web-dialog.wide {
                --dialog-max-width: 80vw;
            }
        `
    }

    render() {
        return html`
            <web-dialog
                center
                class=${this.size}
                ?open=${this.opened}
                @closing=${this.exposeEvent}
                @close=${this.exposeEvent}
                @open=${this.exposeEvent}
            >
                <slot name='header'></slot>
                <slot></slot>
                <slot name='footer'></slot>
            </web-dialog>
        `
    }

    exposeEvent = (e: CustomEvent) => {
        const exposedEvent = new CustomEvent(e.type, {
            detail: e.detail,
            bubbles: true,
            composed: true
        })
        const cancelled = !this.dispatchEvent(exposedEvent)
        if (cancelled)
            e.preventDefault()
    }
}