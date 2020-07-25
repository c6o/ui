import { css } from 'lit-element'

export const cssBase = css`
    html,
    body {
        height: 100%
    }

    html > body {
        background-color: var(--c6o-body-bkg-color);
        color: var(--c6o-body-text-color);
        font-family: var(--font-family);
        font-weight: 500;
    }

    p.section {
        margin-bottom: var(--xl-spacing);
    }

    a {
        color: var(--color-sea);
    }

    a:hover {
        color: var(---color-morning-sea);
    }

    a.icon {
        text-decoration: none;
    }

    a.icon iron-icon {
        height: var(--xl-spacing);
        width: var(--xl-spacing);
    }

    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }

    button:hover,
    button:focus,
    button:active {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        outline: 0;
    }

    ul.error-message {
        color: var(--color-fire);
        font-size: var(--lumo-font-size-s);
        padding-inline-start: 0;
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid var(--color-wind);
    }

    .hidden {
        display: none;
    }

    .pointer {
        cursor: var(--lumo-clickable-cursor);
    }

    .icon {
        height: calc(var(--xl-spacing) * 2.5);
        width: calc(var(--xl-spacing) * 2.5);
    }

    .icon.inline {
        margin-right: var(--xl-spacing);
    }
`
