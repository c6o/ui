import { html, customElement, property, css, CSSResult } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { cssReboot, cssBase } from '@c6o/ui-theme'

/**
 * `<c6o-installing-animation>` is a Web Component that provides a spinning dot animation.
 *
 * ```
 *   <c6o-installing-animation type="waiting"></c6o-installing-animation>
 * ```
 *
 * Property   | Description
 * -----------|------------
 * `type`     | Possible values are `warning` or `waiting`
 *
 * @extends MobxLitElement
 */

 export type AnimationType = '' | 'warning' | 'waiting'

@customElement('c6o-installing-animation')
export class InstallingAnimation extends MobxLitElement {

    @property({ type: String })
    type: AnimationType = ''

    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            css`
                .c6o-chase {
                    animation: c6o-chase 2.5s infinite linear both;
                    height: var(--xl-spacing);
                    position: relative;
                    width: var(--xl-spacing);
                }

                .c6o-chase.small {
                    height: var(--lg-spacing);
                    width: var(--lg-spacing);
                }

                .c6o-chase-dot {
                    animation: c6o-chase-dot 2.0s infinite ease-in-out both;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                .c6o-chase-dot:before {
                    animation: c6o-chase-dot-before 2.0s infinite ease-in-out both;
                    background-color: var(--color-sea);
                    border-radius: 100%;
                    content: '';
                    display: block;
                    height: 25%;
                    width: 25%;
                }

                .c6o-chase.warning .c6o-chase-dot:before {
                    background-color: var(--color-sun);
                }

                .c6o-chase.waiting .c6o-chase-dot:before {
                    background-color: var(--color-ocean);
                }

                .c6o-chase-dot:nth-child(1) { animation-delay: -1.1s; }
                .c6o-chase-dot:nth-child(2) { animation-delay: -1.0s; }
                .c6o-chase-dot:nth-child(3) { animation-delay: -0.9s; }
                .c6o-chase-dot:nth-child(4) { animation-delay: -0.8s; }
                .c6o-chase-dot:nth-child(5) { animation-delay: -0.7s; }
                .c6o-chase-dot:nth-child(6) { animation-delay: -0.6s; }
                .c6o-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
                .c6o-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
                .c6o-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
                .c6o-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
                .c6o-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
                .c6o-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

                @keyframes c6o-chase {
                    100% { transform: rotate(360deg); }
                }

                @keyframes c6o-chase-dot {
                    80%, 100% { transform: rotate(360deg); }
                }

                @keyframes c6o-chase-dot-before {
                    50% {
                        transform: scale(0.4);
                    } 100%, 0% {
                        transform: scale(1.0);
                    }
                }
            `
        ]
    }

    render() {
        return html`
            <div class=${['c6o-chase', `${this.type}`].join(' ').trim()}>
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