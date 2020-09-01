import { PolymerElement } from '@polymer/polymer'
import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog'
import { EntityStoreMixin } from '../mixins/entityStore'
import { mix } from 'mixwith'
import { render, TemplateResult } from 'lit-html'

export interface DialogStore extends PolymerElement {
    render()
}

export abstract class DialogStore extends mix(DialogElement).with(EntityStoreMixin) {
    file
    filePath
    opened: boolean
    root
    store
    abstract renderContent(save, cancel): TemplateResult
    cancelCallback?(): void // Optional so don't mark as abstract (which must be implemented)
    confirmCallback?(): void

    static get properties() {
        return {
            ...super.properties,
            file: { type: Object },
            filePath: { type: String, value: 'image' },
            root: { type: Object },
        }
    }

    renderer = (root) => {
        this.root = root
        render(this.renderContent(this.save, this.cancel), root)
    }

    storeChanged() {
        super.storeChanged()
        this.opened = this.store !== null
    }

    upload = (e) => {
        this.file = e.detail.file
        this.file.complete = true
        this.file.status = ''

        const reader = new FileReader()
        reader.onload = this.fileProcessed
        reader.readAsDataURL(e.detail.file)
    }

    fileProcessed = (e) => {
        this.store.pending[this.filePath] = e.target.result
    }

    cancel = () => {
        if (this.store) {
            if (this.cancelCallback)
                this.cancelCallback()
            this.store.reset()
            this.store = null // this will close the dialog
        }
        this.opened = false
    }

    save = async () => {
        const result = await this.saveToStore()
        if (result) {
            if (this.confirmCallback)
                this.confirmCallback()
            this.store = null // this will close the dialog
        }
        return result
    }

    saveToStore = async () => {
        await this.store?.save()
        return !!this.store?.success
    }

    reset = async () => {
        this.store.reset()
    }
}