import { html, customElement, query, css, CSSResult } from 'lit-element'
import { WebDialog } from 'web-dialog'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseDialog } from './baseDialog'

@customElement('c6o-dialog')
export class Dialog extends BaseDialog {

    // https://github.com/andreasbm/web-dialog/blob/master/src/lib/web-dialog.ts
    @query('web-dialog')
    dialog: WebDialog

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            cssModals,
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

                web-dialog.min-height #modal-body {
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
        return html`
            <web-dialog
                center
                class=${this.cssClasses}
                ?open=${this.opened}
                @close=${this.exposeEvent}
                @closing=${this.exposeEvent}
                @open=${this.exposeEvent}
            >
                <slot name="header"></slot>
                <div c6o="fill" id="modal-body">
                    <slot></slot>
                </div>
                <slot name="footer"></slot>
            </web-dialog>
        `
    }
}