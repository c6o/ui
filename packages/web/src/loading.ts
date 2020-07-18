import { html, customElement, property, css } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase, cssLayouts, cssTypography } from '@traxitt/ui-theme'

@customElement('c6o-loading')
export class Loading extends MobxLitElement {

    @property({ type: String })
    text = 'Loading...'

    static get styles() {
        return [
            cssReboot,
            cssBase,
            cssLayouts,
            cssTypography,
            css`
                #loading {
                    animation: fadein 3s;
                }

                @keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `
        ]
    }

    render() {
        return html`
            <section id="loading" class="panel">
                <h3>${this.text}</h3>
                <c6o-progress-bar indeterminate value="0"></c6o-progress-bar>
            </section>
        `
    }
}