import { css } from 'lit-element'

export const cssBadges = css`
    .badge {
        align-items: center;
        background-color: var(--lumo-primary-color-10pct);
        border-radius: var(--lumo-border-radius-s);
        box-sizing: border-box;
        color: var(--lumo-primary-text-color);
        display: inline-flex;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xs);
        font-weight: 500;
        justify-content: center;
        letter-spacing: initial;
        line-height: 1;
        margin-right: var(--sm-spacing);
        margin-top: var(--sm-spacing);
        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
        padding: 0.6em calc(0.8em + var(--lumo-border-radius-m) / 4);
        position: relative;
        text-transform: initial;
    }

    /* Ensure proper vertical alignment */
    .badge::before {
        display: inline-block;
        content: "\\2003";
        width: 0;
    }

    .badge[theme~="small"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
    }

    .badge[theme~="large"] {
        font-size: var(--lumo-font-size-s);
        line-height: 1;
        padding: 0.8em calc(1em + var(--lumo-border-radius-m) / 4);
    }

    /* Colors */

    .badge[theme~="success"] {
        color: var(--lumo-success-text-color);
        background-color: var(--lumo-success-color-10pct);
    }

    .badge[theme~="error"] {
        color: var(--lumo-error-text-color);
        background-color: var(--lumo-error-color-10pct);
    }

    .badge[theme~="contrast"] {
        color: var(--lumo-contrast-60pct);
        background-color: var(--lumo-contrast-5pct);
    }

    /* Primary */

    .badge[theme~="primary"] {
        color: var(--lumo-primary-contrast-color);
        background-color: var(--lumo-primary-color);
    }

    .badge[theme~="success"][theme~="primary"] {
        color: var(--lumo-success-contrast-color);
        background-color: var(--lumo-success-color);
    }

    .badge[theme~="error"][theme~="primary"] {
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
    }

    .badge[theme~="contrast"][theme~="primary"] {
        color: var(--lumo-base-color);
        background-color: var(--lumo-contrast);
    }

    /* Links */

    .badge[theme~="link"]:hover {
        background-color: var(--lumo-contrast-20pct);
        cursor: pointer;
        text-decoration: none;
    }

    .badge[theme~="delete"][theme~="link"]:hover {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    .badge[theme~="delete"][theme~="link"]:hover::after {
        content: "\\f057";
        color: var(--color-black);
        font-family: 'Font Awesome 5 Free';
        font-size: 1rem;
        font-style: normal;
        font-weight: 900;
        position: absolute;
        right: -4px;
        top: -4px;
    }

    /* Icon */

    .badge iron-icon {
        margin: -0.25em 0;
        --iron-icon-width: 1.5em;
        --iron-icon-height: 1.5em;
    }

    .badge iron-icon:first-child {
        margin-left: -0.375em;
    }

    .badge iron-icon:last-child {
        margin-right: -0.375em;
    }

    .badge[icon] {
        min-width: 0;
        padding: 0;
        font-size: 1rem;
        --iron-icon-width: var(--lumo-icon-size-m);
        --iron-icon-height: var(--lumo-icon-size-m);
    }

    .badge[icon][theme~="small"] {
        --iron-icon-width: var(--lumo-icon-size-s);
        --iron-icon-height: var(--lumo-icon-size-s);
    }

    /* Empty */

    .badge:not([icon]):empty {
        min-width: 0;
        width: 1em;
        height: 1em;
        padding: 0;
        border-radius: 50%;
        background-color: var(--lumo-primary-color);
    }

    .badge[theme~="small"]:not([icon]):empty {
        width: 0.75em;
        height: 0.75em;
    }

    .badge[theme~="contrast"]:not([icon]):empty {
        background-color: var(--lumo-contrast);
    }

    .badge[theme~="success"]:not([icon]):empty {
        background-color: var(--lumo-success-color);
    }

    .badge[theme~="error"]:not([icon]):empty {
        background-color: var(--lumo-error-color);
    }

    /* Pill */

    .badge[theme~="pill"] {
        --lumo-border-radius-s: 1em;
    }
`