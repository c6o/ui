import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { EntityStoreMixin } from './mixins/entityStore'
import { mix } from '@traxitt/common'
import { render, TemplateResult } from 'lit-html'

export abstract class DialogBase extends mix(DialogElement).with(EntityStoreMixin) {
    abstract renderContent(ok, cancel) : TemplateResult
    root

    renderer = (root) => {
        this.root = root
        render(this.renderContent(this.okClick, this.cancelClick), root)
    }

    storeChanged() {
        super.storeChanged()
        this.opened = this.store !== null
    }

    async doCancel() {
        if (this.store) {
            this.store.reset()
        }
        return true
    }

    async doOk() {
        if (this.store) {
            await this.store.save()
            if (!this.store.success) {
                return false
            }
        }
        return true
    }

    cancelClick = () => {
        const result = this.doCancel()
        if (result)
            this.store = null
    }

    okClick = async () => {
        const result = await this.doOk()
        if (result)
            this.store = null
    }
}