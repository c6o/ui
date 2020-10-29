import { css } from 'lit-element'

export const cssBadge = css`
    [theme~="badge"] {
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
        margin-bottom: var(--xs-spacing);
        margin-right: var(--sm-spacing);
        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
        padding: 0.6em calc(0.8em + var(--lumo-border-radius-m) / 4);
        text-transform: initial;
    }

    /* Ensure proper vertical alignment */
    [theme~="badge"]::before {
        display: inline-block;
        content: "\\2003";
        width: 0;
    }

    [theme~="badge"][theme~="small"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
    }

    /* Colors */

    [theme~="badge"][theme~="success"] {
        color: var(--lumo-success-text-color);
        background-color: var(--lumo-success-color-10pct);
    }

    [theme~="badge"][theme~="error"] {
        color: var(--lumo-error-text-color);
        background-color: var(--lumo-error-color-10pct);
    }

    [theme~="badge"][theme~="contrast"] {
        color: var(--lumo-contrast-60pct);
        background-color: var(--lumo-contrast-5pct);
    }

    /* Primary */

    [theme~="badge"][theme~="primary"] {
        color: var(--lumo-primary-contrast-color);
        background-color: var(--lumo-primary-color);
    }

    [theme~="badge"][theme~="success"][theme~="primary"] {
        color: var(--lumo-success-contrast-color);
        background-color: var(--lumo-success-color);
    }

    [theme~="badge"][theme~="error"][theme~="primary"] {
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
    }

    [theme~="badge"][theme~="contrast"][theme~="primary"] {
        color: var(--lumo-base-color);
        background-color: var(--lumo-contrast);
    }

    /* Links */

    [theme~="badge"][href]:hover {
        text-decoration: none;
        background-color: var(--lumo-contrast-20pct);
    }

    /* Icon */

    [theme~="badge"] iron-icon {
        margin: -0.25em 0;
        --iron-icon-width: 1.5em;
        --iron-icon-height: 1.5em;
    }

    [theme~="badge"] iron-icon:first-child {
        margin-left: -0.375em;
    }

    [theme~="badge"] iron-icon:last-child {
        margin-right: -0.375em;
    }

    [theme~="badge"][icon] {
        min-width: 0;
        padding: 0;
        font-size: 1rem;
        --iron-icon-width: var(--lumo-icon-size-m);
        --iron-icon-height: var(--lumo-icon-size-m);
    }

    [theme~="badge"][icon][theme~="small"] {
        --iron-icon-width: var(--lumo-icon-size-s);
        --iron-icon-height: var(--lumo-icon-size-s);
    }

    /* Empty */

    [theme~="badge"]:not([icon]):empty {
        min-width: 0;
        width: 1em;
        height: 1em;
        padding: 0;
        border-radius: 50%;
        background-color: var(--lumo-primary-color);
    }

    [theme~="badge"][theme~="small"]:not([icon]):empty {
        width: 0.75em;
        height: 0.75em;
    }

    [theme~="badge"][theme~="contrast"]:not([icon]):empty {
        background-color: var(--lumo-contrast);
    }

    [theme~="badge"][theme~="success"]:not([icon]):empty {
        background-color: var(--lumo-success-color);
    }

    [theme~="badge"][theme~="error"]:not([icon]):empty {
        background-color: var(--lumo-error-color);
    }

    /* Pill */

    [theme~="badge"][theme~="pill"] {
        --lumo-border-radius-s: 1em;
    }

    /* RTL specific styles */

    [dir="rtl"][theme~="badge"] iron-icon:first-child {
        margin-right: -0.375em;
        margin-left: 0;
    }

    [dir="rtl"][theme~="badge"] iron-icon:last-child {
        margin-left: -0.375em;
        margin-right: 0;
    }
`