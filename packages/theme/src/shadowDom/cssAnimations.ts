import { css } from 'lit-element'

export const cssAnimations = css`
    .c6o-chase {
        width: var(--xl-spacing);
        height: var(--xl-spacing);
        position: relative;
        animation: c6o-chase 2.5s infinite linear both;
    }

    .c6o-chase-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        animation: c6o-chase-dot 2.0s infinite ease-in-out both;
    }

    .c6o-chase-dot:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: var(--color-sea);
        border-radius: 100%;
        animation: c6o-chase-dot-before 2.0s infinite ease-in-out both;
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