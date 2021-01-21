import { property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

export class BaseDialog extends MobxLitElement {

    @property({ type: String, attribute: 'btn-text' })
    btnText = 'Close'

    @property({ type: String, attribute: 'btn-theme' })
    btnTheme = 'default'

    @property({ type: String })
    classes = ''

    @property({ type: Boolean, attribute: 'min-height' })
    minHeight = false

    @property({ type: Boolean })
    loading = true

    @property({ type: Boolean, attribute: 'no-close-on-outside-click' })
    noCloseOnOutsideClick = false

    // This may be necessary if a dialog is nested in another dialog
    @property({ type: Boolean })
    normal = false

    @property({ type: Boolean })
    opened = false

    @property({ type: String })
    subtitle: string

    @property({ type: Boolean })
    tall = false

    @property({ type: String })
    title = 'CodeZero'

    @property({ type: Boolean })
    wide = false

    get cssClasses() {
        return `${this.classes}${this.minHeight ? ' min-height' : ''}${this.normal ? ' normal' : ''}${this.tall ? ' tall' : ''}${this.wide ? ' wide' : ''}`
    }

    exposeEvent = (e: CustomEvent) => {
        const exposedEvent = new CustomEvent(e.type, {
            bubbles: true,
            composed: true,
            detail: e.detail
        })
        const cancelled = !this.dispatchEvent(exposedEvent)
        if (cancelled)
            e.preventDefault()
    }

    async onOpen() {
        return true
    }

    async onClose() { }

    open = async () => {
        this.opened = true
        const loaded = await this.onOpen()
        this.loading = !loaded
    }

    close = async () => {
        this.opened = false
        await this.onClose()
    }

    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('open', this.open)
        // This is necessary to set opened to false if the user clicks outside of the dialog to close it
        this.addEventListener('close', this.close)
    }

    async disconnectedCallback() {
        this.removeEventListener('open', this.open)
        this.removeEventListener('close', this.close)
        await super.disconnectedCallback()
    }
}