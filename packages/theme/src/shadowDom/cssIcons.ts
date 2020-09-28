import { css } from 'lit-element'

export const cssIcons = css`
    iron-icon.default {
        margin-right: var(--sm-spacing);
    }

    iron-icon.info {
        color: var(--color-sea);
        margin-right: var(--sm-spacing);
    }

    iron-icon.success {
        color: var(--color-ocean);
        margin-right: var(--sm-spacing);
    }

    iron-icon.warning {
        color: var(--color-sun);
        margin-right: var(--sm-spacing);
    }

    iron-icon.error {
        color: var(--color-fire);
        margin-right: var(--sm-spacing);
    }

    @keyframes spinner {
        to { transform: rotate(360deg); }
    }

    iron-icon.busy:before {
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

    .vendor-logo,
    .c6o-icon {
        width: 60px;
        margin: 0 var(--md-spacing) var(--xl-spacing) 0;
    }

    .vendor-logo.small,
    .c6o-icon.small {
        width: 45px;
    }

    .vendor-logo img,
    .c6o-icon img {
        width: 100%;
    }
`