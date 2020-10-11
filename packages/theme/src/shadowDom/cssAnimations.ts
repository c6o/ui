import { css } from 'lit-element'

export const cssAnimations = css`
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

    @keyframes spinner {
        to { transform: rotate(360deg); }
    }

    .busy:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border-top: 2px solid var(--color-twilight-ocean);
        border-right: 2px solid transparent;
        animation: spinner .4s linear infinite;
    }

    .icon.installing {
        -webkit-animation: sail 2.2s infinite ease-in-out;
        animation: sail 2.2s infinite ease-in-out;
    }

    .icon.error {
        -webkit-animation: pulse 1.2s infinite ease-in-out;
        animation: pulse 1.2s infinite ease-in-out;
    }

    @keyframes sail {
        0% {
            transform: translatey(0px) rotate(-5deg);
            -webkit-transform: translatey(0px) rotate(-5deg);
        }
        25% {
            transform: translatey(-6px);
            -webkit-transform: transform: translatey(-6px);
        }
        50% {
            transform: translatey(0px) rotate(5deg);
            -webkit-transform: translatey(0px) rotate(5deg);
        }
        75% {
            transform: translatey(0px);
            -webkit-transform: translatey(0px)
        }
        100% {
            transform: translatey(0px) rotate(-5deg);
            -webkit-transform: translatey(0px) rotate(-5deg);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 var(--color-night-fire));
        }

        70% {
            transform: scale(1.05);
            filter: drop-shadow(3px 3px 3px var(--color-night-fire));
        }

        100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 var(--color-night-fire));
        }
    }
`