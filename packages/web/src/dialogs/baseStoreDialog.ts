import { property } from 'lit-element'
import { EntityStoreLitMixin, EntityStoreMixin} from '../mixins/entityStore'
import { mix } from 'mixwith'
import { BaseDialog } from './baseDialog'

export interface BaseStoreDialog extends EntityStoreMixin {
    btnText: string
    btnTheme: string
    classes: string
    cssClasses: string
    maxHeight: boolean
    minHeight: boolean
    opened: boolean
    subtitle: string
    tall: string
    title: string
    wide: boolean
    onClose?(): void
    onOpen?(): Promise<void>
}

export abstract class BaseStoreDialog extends mix(BaseDialog).with(EntityStoreLitMixin) {

    @property({ type: String, attribute: 'confirm-btn-text' })
    confirmBtnText = 'Save'

    @property({ type: String, attribute: 'confirm-btn-theme' })
    confirmBtnTheme = 'primary'

    @property({ type: String, attribute: 'delete-btn-text' })
    deleteBtnText = 'Delete'

    @property({ type: String, attribute: 'delete-btn-theme' })
    deleteMessage: string

    // Optional callbacks. These are tied to the cancel and confirm buttons.
    // Alternatively you can use onOpen or onClose to respond to the dialog opening and closing.
    cancelCallback?(): void
    confirmCallback?(): void

    close = () => {
        this.store ? this.store = null : this.opened = false
        this.onClose?.()
    }

    async storeChanged() {
        await super.storeChanged()
        this.opened = !!this.store
        if (this.opened && this.onOpen) {
            await this.onOpen()
        }
    }

    cancel = () => {
        this.cancelCallback?.()
        this.close()
    }

    save = async () => {
        const result = await this.saveToStore()
        if (result) {
            this.confirmCallback?.()
            this.close()
        }
        return result
    }

    saveToStore = async () => {
        await this.store?.save()
        return this.store?.isValid
    }
}