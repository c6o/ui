import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { EntityStoreMixin } from '../mixins/entityStore'
import { mix } from '@traxitt/common'
import { html } from 'lit-element'
import { render, TemplateResult } from 'lit-html'

export abstract class DialogSaveToStore extends mix(DialogElement).with(EntityStoreMixin) {
    abstract renderContent(): TemplateResult
    abstract cancelCallback(): boolean
    abstract confirmCallback(): boolean
    btnTheme: string
    confirmBtnText: string
    cancelBtnText: string
    title: string
    size: string

    static get properties() {
        return {
            ...super.properties,
            btnTheme: { type: String, value: 'default' },
            confirmBtnText: { type: String, value: 'OK' },
            cancelBtnText: { type: String, value: 'Cancel' },
            size: { type: String, value: '' },
            title: { type: String, value: 'CodeZero' },
        }
    }

    renderer = (root) => {
        if (root.firstElementChild) return
        render(this.renderModal(), root)
    }

    renderModal = () => {
        return html`
            <div class="modal-header">
                <h2 class="modal-title">${this.title}</h2>
                <iron-icon icon="vaadin:close" @click=${this.cancel}></iron-icon>
            </div>
            <div class="modal-body ${this.size}">
                <div id="modal-content">
                    ${this.renderContent()}
                </div>
            </div>
            <div class="modal-footer" c6o="flex justify-between">
                <traxitt-button class="pointer cancel-button" theme="default" @click=${this.cancel}>${this.cancelBtnText}</traxitt-button>
                <traxitt-button class="pointer confirm-button" theme="${this.btnTheme}" @click=${this.confirm}>${this.confirmBtnText}</traxitt-button>
            </div>
        `
    }

    storeChanged() {
        super.storeChanged()
        this.opened = this.store !== null
    }

    cancel = () => {
        const success = this.cancelCallback?.() || true

        if (success && this.store) {
            this.store.reset()
            this.store = null
        }

        super.opened = !success
    }

    confirm = async () => {
        let closeModal = false
        const callback = this.confirmCallback?.() || true

        if (callback) {
            const result = await this.save()
            if (result) {
                closeModal = true
                this.store = null
            }
        }

        super.opened = !closeModal
    }

    async save() {
        if (this.store) {
            await this.store.save()
            if (!this.store.success) {
                return false
            }
        }
        return true
    }
}