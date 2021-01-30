import { css } from 'lit-element'

export const cssAnimations = css`
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

    .icon.animated {
        -webkit-animation: sail 2.2s infinite ease-in-out;
        animation: sail 2.2s infinite ease-in-out;
    }

    .icon.pulsing {
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