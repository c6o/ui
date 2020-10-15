import { css } from 'lit-element'

export const cssIcons = css`
    iron-icon {
        flex-shrink: 0;
    }

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

    .vendor-logo,
    .c6o-icon {
        margin: 0 var(--md-spacing) var(--xl-spacing) 0;
        width: calc(var(--xl-spacing) * 2);
    }

    .vendor-logo.small,
    .c6o-icon.small {
        width: 45px;
    }

    .vendor-logo img,
    .c6o-icon img {
        height: auto;
        width: 100%;
    }

    .vendor-icon {
        height: auto;
        margin-right: var(--md-spacing);
        width: var(--xl-spacing);
    }
`