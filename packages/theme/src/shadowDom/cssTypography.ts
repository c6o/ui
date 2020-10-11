import { css } from 'lit-element'

export const cssTypography = css`
    h1, h2, h3 {
        line-height: 1.2;
        margin-bottom: 1rem;
    }

    h4, h5, h6 {
        line-height: 1.2;
        margin-bottom: .85rem;
    }

    h1.inline, h2.inline, h3.inline, h4.inline, h5.inline, h6.inline {
        margin-bottom: 0;
    }

    h1 {
        color: var(--color-h1);
        font-size: var(--lumo-font-size-xxl);
        font-weight: 200;
    }

    h2, .subtitle {
        color: var(--color-h2);
        font-size: var(--lumo-font-size-xl);
        font-weight: 500;
    }

    h3 {
        color: var(--color-h3);
        font-size: var(--lumo-font-size-l);
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    h4 {
        font-size: var(--lumo-font-size-l);
        font-weight: 500;
    }

    h5 {
        font-size: var(--lumo-font-size-xm);
        font-weight: 500;
    }

    h6 {
        font-size: var(--lumo-font-size-s);
        font-weight: 300;
    }

    .text-info {
        color: var(--color-sea);
    }

    .text-success {
        color: var(--color-ocean);
    }

    .text-warning {
        color: var(--color-sun);
    }

    .text-error {
        color: var(--color-fire);
    }

    .text-default {
        color: var(--color-navy);
    }

    .text-suffix {
        font-size: 1.2rem;
        font-weight: 600;
    }

    .status-text {
        font-weight: 700;
    }

    .status-text.pending {
        color: var(--color-rain);
    }

    .status-text.installing {
        color: var(--color-evening-sun);
    }

    .status-text.error {
        color: var(--color-fire);
    }

    .status-text.completed {
        color: var(--color-ocean);
    }

    .title {
        color: var(--color-title);
        font-size: var(--lumo-font-size-xxxl);
        font-weight: 100;
    }

    .help-text {
        color: var(--color-help-text);
        font-size: var(--lumo-font-size-xs);
        margin-bottom: var(--xl-spacing);
    }

    .help-text.inline {
        margin-bottom: 0;
    }

    small,
    .small {
        font-size: 80%;
        font-weight: 400;
    }

    code {
        font-size: 87.5%;
        word-wrap: break-word;
    }

    label {
        align-self: flex-start;
        color: var(--lumo-secondary-text-color);
        font-weight: 500;
        font-size: var(--lumo-font-size-s);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
        line-height: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    label.inline {
        line-height: inherit;
        margin-bottom: 0;
        margin-left: var(--md-spacing);
    }
`