import { css } from 'lit-element'

export const cssModals = css`
    :host {
        --color-help-text: var(--color-thunder);
    }

    header,
    .modal-header {
        align-items: flex-start;
        border-bottom: 1px solid var(--color-cloud);
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--xl-spacing);
        padding-bottom: var(--md-spacing);
    }

    header img,
    .modal-header img {
        padding-right: var(--c6o-icon-padding, 22px);
        width: var(--c6o-icon-width, 48px);
        height: auto;
        box-sizing: content-box;
    }

    header iron-icon,
    .modal-header iron-icon {
        --iron-icon-width: 16px;
        --iron-icon-height: 16px;
        color: var(--color-rain);
        cursor: pointer;
    }

    header iron-icon:hover,
    .modal-header iron-icon:hover {
        color: var(--color-navy);
    }

    .modal-title {
        color: var(--color-navy);
        flex: 1;
        line-height: 1.2em;
        margin-block-end: 0em;
        margin-block-start: 0em;
    }

    .modal-title .modal-subtitle {
        color: var(--color-thunder);
        font-size: var(--lumo-font-size-s);
    }

    footer,
    .modal-footer {
        border-top: 1px solid var(--color-cloud);
        margin-top: var(--lg-spacing);
        padding-top: var(--md-spacing);
    }
`