import { html, customElement, property, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssAnimations } from '@c6o/ui-theme'

@customElement('c6o-installing-animation')
export class InstallingAnimation extends MobxLitElement {

    @property({ type: String })
    type = ''

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            cssAnimations
        ]
    }

    render() {
        return html`
            <div class="c6o-chase ${this.type}">
                <div class="c6o-chase-dot"></div>
                <div class="c6o-chase-dot"></div>
                <div class="c6o-chase-dot"></div>
                <div class="c6o-chase-dot"></div>
                <div class="c6o-chase-dot"></div>
                <div class="c6o-chase-dot"></div>
            </div>
        `
    }
}