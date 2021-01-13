import { css } from 'lit-element'

export const cssBase = css`
    html,
    body {
        height: 100%;
        scroll-behavior: smooth;
    }

    html > body {
        background-color: var(--c6o-body-bkg-color);
        color: var(--c6o-body-text-color);
        font-family: var(--font-family);
    }

    p.section {
        margin-bottom: var(--xl-spacing);
    }

    a {
        color: var(--color-sea);
    }

    a:hover {
        color: var(--color-morning-sea);
    }

    a:focus {
        outline: none;
    }

    a.icon {
        text-decoration: none;
    }

    a.icon iron-icon {
        height: var(--xl-spacing);
        width: var(--xl-spacing);
    }

    a.text-error:hover {
        color: var(--color-night-fire);
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

    ul.inline {
        margin-bottom: 0;
        padding-left: 1em;
    }

    ul.inline li {
        float: left;
        padding-bottom: 3px;
        padding-right: 3em;
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid var(--color-wind);
    }

    pre {
        background-color: var(--color-wind);
        color: var(--color-navy);
        line-height: 1.4rem;
        padding: var(--sm-spacing);
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

    .icon.small {
        height: var(--c6o-icon-height-sm);
        width: var(--c6o-icon-height-sm);
    }

    .divider {
        border-top: 2px solid var(--color-sea);
        margin: var(--xl-spacing) 0;
        width: 100px;
    }

    .btn-group > c6o-button:not(:first-child) {
        margin-left: var(--sm-spacing);
    }

    .panel {
        background-color: var(--color-white);
        border: none;
        border-radius: var(--c6o-border-radius);
        color: var(--color-thunder);
        margin-bottom: var(--xl-spacing);
        padding: var(--xl-spacing);
    }
`
