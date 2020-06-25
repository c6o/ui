import { css } from 'lit-element'

export const cssBase = css`
    html > body {
        background-color: var(--color-snow);
        color: var(--color-thunder);
        font-family: var(--font-family);
        font-weight: 500;
    }

    a {
        color: var(--color-ocean);
    }

    a:hover {
        color: var(--color-twilight-ocean);
    }

    a.icon {
        text-decoration: none;
    }

    a.icon iron-icon {
        height: 30px;
        width: 30px;
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
`
