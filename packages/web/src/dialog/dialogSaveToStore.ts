import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { EntityStoreMixin } from '../mixins/entityStore'
import { mix } from '@traxitt/common'
import { html } from 'lit-element'
import { render, TemplateResult } from 'lit-html'

export abstract class DialogSaveToStore extends mix(DialogElement).with(EntityStoreMixin) {
    abstract renderContent(): TemplateResult
    abstract cancelCallback(): void
    abstract confirmCallback(): void
    root

    static get properties() {
        return {
            btnTheme: { type: String, value: 'default' },
            confirmBtnText: { type: String, value: 'OK' },
            cancelBtnText: { type: String, value: 'Cancel' },
            size: { type: String, value: '' },
            title: { type: String, value: 'CodeZero' },
        }
    }

    renderer = (root) => {
        this.root = root
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
                <traxitt-button class="cancel-button" theme="default" @click=${this.cancel}>${this.cancelBtnText}</traxitt-button>
                <traxitt-button class="confirm-button" theme="${this.btnTheme}" @click=${this.confirm}>${this.confirmBtnText}</traxitt-button>
            </div>
        `
    }

    storeChanged() {
        super.storeChanged()
        this.opened = this.store !== null
    }

    cancel = () => {
        if (this.store) {
            this.store.reset()
            this.store = null
            if (this.cancelCallback)
                this.cancelCallback()
        }

        super.opened = false
    }

    confirm = async () => {
        const result = await this.save()
        if (result) {
            this.store = null
            if (this.confirmCallback)
                this.confirmCallback()
        }

        super.opened = !result
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