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
}

export abstract class BaseStoreDialog extends mix(BaseDialog).with(EntityStoreLitMixin) {

    close = () => {
        this.store ? this.store = null : this.opened = false
    }

    storeChanged() {
        super.storeChanged()
        this.opened = !!this.store
    }
}