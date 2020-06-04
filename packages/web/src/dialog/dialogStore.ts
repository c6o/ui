import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { EntityStoreMixin } from '../mixins/entityStore'
import { mix } from '@traxitt/common'
import { render, TemplateResult } from 'lit-html'

export abstract class DialogStore extends mix(DialogElement).with(EntityStoreMixin) {
    abstract renderContent(save, cancel): TemplateResult
    cancelCallback?(): void
    confirmCallback?(): void
    root

    renderer = (root) => {
        this.root = root
        render(this.renderContent(this.save, this.cancel), root)
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

        this.opened = false
    }

    save = async () => {
        const result = await this.saveToStore()
        if (result) {
            this.store = null

            if (this.confirmCallback)
                this.confirmCallback()
        }
        this.opened = !result

        return result
    }

    saveToStore = async () => {
        if (this.store) {
            await this.store.save()
            if (!this.store.success) {
                return false
            }
        }
        return true
    }
}