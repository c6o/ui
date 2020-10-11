import { html, customElement, property, query, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { WebDialog } from 'web-dialog'
import { cssReboot, cssBase } from '@c6o/ui-theme'

@customElement('c6o-dialog')
export class Dialog extends MobxLitElement {

    @property({ type: String })
    classes: string

    @property({ type: Boolean, attribute: 'max-height' })
    maxHeight: boolean

    @property({ type: Boolean, attribute: 'min-height' })
    minHeight: boolean

    @property({ type: Boolean })
    opened = false

    @property({ type: Boolean })
    wide: boolean

    // https://github.com/andreasbm/web-dialog/blob/master/src/lib/web-dialog.ts
    @query('web-dialog')
    dialog: WebDialog

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            css`
                web-dialog {
                    --dialog-animation-duration: 0;
                    --dialog-border-radius: var(--c6o-border-radius);
                    --dialog-container-padding: 0;
                    --dialog-padding: var(--xl-spacing);
                    --dialog-z-index: 199;
                }

                web-dialog.wide {
                    --dialog-max-width: 80vw;
                }

                web-dialog.max-height {
                    --dialog-max-height: 600px;
                }

                web-dialog.min-height {
                    min-height: 35vh;
                }
            `
        ]
    }

    render() {
        const classes = this.classes || `${this.wide ? 'wide' : ''} ${this.maxHeight ? 'max-height' : ''} ${this.minHeight ? 'min-height' : ''}`
        return html`
            <web-dialog
                center
                class=${classes}
                ?open=${this.opened}
                @close=${this.exposeEvent}
                @closing=${this.exposeEvent}
                @open=${this.exposeEvent}
            >
                <slot name="header"></slot>
                <slot></slot>
                <slot name="footer"></slot>
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