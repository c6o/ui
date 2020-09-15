import { html, css, property, CSSResult } from 'lit-element'
import { PolymerElement } from '@polymer/polymer'
import { MobxLitElement } from '@adobe/lit-mobx'
import { mix } from 'mixwith'
import { EntityStoreMixin } from '../mixins'
import { cssReboot, cssBase, cssGrid } from '@c6o/ui-theme'

export interface SaveButton extends PolymerElement {
    shadowRoot
    store
}

export class SaveButton extends mix(MobxLitElement).with(EntityStoreMixin) {
    timeout

    @property({ type: String, attribute: 'label-text' })
    labelText = 'Save successful'

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssGrid,
            css`
                #save-btn-label {
                    display: none;
                }

                @keyframes fadeOut {
                    0% {
                      opacity: 1;
                      visibility: visible;
                    }
                    100% {
                      opacity: 0;
                      visibility: hidden;
                    }
                }

                #save-btn-label[saved] {
                    animation: fadeOut .5s ease-in-out forwards;
                    animation-delay: 3s;
                    display: block;
                }
            `
        ]
    }

    get label() { return this.shadowRoot.querySelector('c6o-label') as unknown as HTMLElement }

    render() {
        return html`
            <div c6o="flex align-center">
                <c6o-button ?disabled=${this.store.busy} @click=${this.handleSave}>Save</c6o-button>
                <c6o-label id="save-btn-label">${this.labelText}</c6o-label>
            </div>
        `
    }

    handleSave = async () => {
        this.label.removeAttribute('saved')
        await this.store.save()
        if (this.store.success) {
            if (this.timeout)
                clearTimeout(this.timeout)
            this.label.setAttribute('saved', '')
            this.timeout = setTimeout(() => { this.label.removeAttribute('saved') }, 3500)
        }
    }
}

customElements.define('c6o-save-button', SaveButton)
