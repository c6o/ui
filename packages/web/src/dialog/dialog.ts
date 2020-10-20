import { html, customElement, property, query, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { WebDialog } from 'web-dialog'
import { cssReboot, cssBase } from '@c6o/ui-theme'

@customElement('c6o-dialog')
export class Dialog extends MobxLitElement {

    @property({ type: String })
    classes = ''

    @property({ type: Boolean, attribute: 'max-height' })
    maxHeight = false

    @property({ type: Boolean, attribute: 'min-height' })
    minHeight = false

    @property({ type: Boolean })
    opened = false

    @property({ type: Boolean })
    tall = false

    @property({ type: Boolean })
    wide = false

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
                    color: var(--color-navy);
                }

                web-dialog.max-height {
                    --dialog-max-height: 600px;
                }

                web-dialog.min-height {
                    min-height: 35vh;
                }

                web-dialog.tall {
                    --dialog-height: 80vh;
                }

                web-dialog.wide {
                    --dialog-max-width: 80vw;
                }
            `
        ]
    }

    render() {
        const classes = `
            ${this.classes}
            ${this.maxHeight ? 'max-height' : ''}
            ${this.minHeight ? 'min-height' : ''}
            ${this.tall ? 'tall' : ''}
            ${this.wide ? 'wide' : ''}
        `

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