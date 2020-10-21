import { property } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'

export abstract class BaseDialog extends MobxLitElement {

    @property({ type: String, attribute: 'btn-theme' })
    btnTheme = 'default'

    @property({ type: String, attribute: 'btn-text' })
    btnText = 'Close'

    @property({ type: String })
    classes = ''

    @property({ type: Boolean, attribute: 'max-height' })
    maxHeight = false

    @property({ type: Boolean, attribute: 'min-height' })
    minHeight = false

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
        return `${this.classes} ${this.maxHeight ? 'max-height' : ''} ${this.minHeight ? 'min-height' : ''} ${this.tall ? 'tall' : ''} ${this.wide ? 'wide' : ''}`
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

    close = () => {
        this.opened = false
    }

    // These are necessary to set opened to false if the user clicks outside of the dialog to close it
    async connectedCallback() {
        await super.connectedCallback()
        this.addEventListener('close', this.close)
    }

    async disconnectedCallback() {
        this.removeEventListener('close', this.close)
        await super.disconnectedCallback()
    }
}