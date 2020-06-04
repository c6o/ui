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

    .vendor-logo,
    .c6o-icon {
        width: 60px;
        margin: 0 var(--md-spacing) var(--xl-spacing) 0;
    }

    .vendor-logo img,
    .c6o-icon img {
        width: 100%;
    }
`