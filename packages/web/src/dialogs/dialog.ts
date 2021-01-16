import { html, customElement, query, css, CSSResult, property } from 'lit-element'
import { WebDialog } from 'web-dialog'
import { cssAll, cssModals } from '@c6o/ui-theme'
import { BaseDialog } from './baseDialog'

@customElement('c6o-dialog')
export class Dialog extends BaseDialog {

    // https://github.com/andreasbm/web-dialog
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
                    --dialog-color: var(--color-navy);
                    --dialog-container-padding: 0;
                    --dialog-padding: var(--xl-spacing);
                    --dialog-z-index: 199;
                }

                web-dialog #modal-body {
                    max-height: 75vh;
                    padding: 0 var(--xs-spacing);
                    overflow: auto;
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

                web-dialog.normal {
                    --dialog-height: auto;
                    --dialog-max-width: 700px;
                }

                @media screen and (max-width: 1200px), screen and (max-height: 900px) {
                    web-dialog.tall {
                        --dialog-height: 90vh;
                    }
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
                @close=${this.handleClose}
                @closing=${this.handleClosing}
                @open=${this.exposeEvent}
            >
                <slot name="header"></slot>
                <div c6o="fill" id="modal-body">
                    ${this.loading ? html`
                        <c6o-loading></c6o-loading>
                    ` : html`
                        <slot></slot>
                    `}
                </div>
                <slot name="footer"></slot>
            </web-dialog>
        `
    }

    handleClose = (e) => {
        if (!this.noCloseOnOutsideClick)
            this.exposeEvent(e)
    }

    handleClosing = (e) => {
        this.exposeEvent(e)
        if (this.noCloseOnOutsideClick)
            e.preventDefault()
    }
}