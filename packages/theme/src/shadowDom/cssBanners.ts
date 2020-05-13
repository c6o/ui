import { css } from 'lit-element'

export const cssBanners = css`
    .banner {
        align-items: flex-start;
        border-radius: var(--c6o-border-radius);
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        margin: var(--lg-spacing) 0;
    }

    .banner.info {
        background-color: var(--color-white);
        border: 1px solid var(--color-sea);
        color: var(--color-sea);
    }

    .banner.success {
        background-color: var(--color-white);
        border: 1px solid var(--color-ocean);
        color: var(--color-ocean);
    }

    .banner.warning {
        background-color: var(--color-white);
        border: 1px solid var(--color-sun);
        color: var(--color-navy);
    }

    .banner.error {
        background-color: var(--color-white);
        border: 1px solid var(--color-fire);
        color: var(--color-fire);
    }

    .banner iron-icon {
        flex-shrink: 0;
    }
`