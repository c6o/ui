import { EntityListStore } from '@traxitt/common'

export const EntityListStoreMixin = (base) =>  class entityStoreMixin extends base {
    listStore: EntityListStore

    static get properties() {
        return {
            listStore: {observer: 'listStoreChanged'}
        }
    }

    listStoreChanged() {
        // Cannot use => notation in base class!?!
        // Do nothing in the base
        // Override this if you want to handle listStoreChanged events
    }
}