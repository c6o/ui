import { css } from 'lit-element'

export const cssModals = css`
    .modal-header {
        align-items: flex-start;
        border-bottom: 1px solid var(--color-cloud);
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--xl-spacing);
        padding-bottom: var(--md-spacing);
    }

    .modal-header img {
        padding-right: var(--c6o-icon-padding, 22px);
        width: var(--c6o-icon-width, 48px);
        height: auto;
        box-sizing: content-box;
    }

    .modal-header iron-icon {
        --iron-icon-width: 16px;
        --iron-icon-height: 16px;
        color: var(--color-rain);
        cursor: pointer;

        &:hover {
            color: var(--color-navy);
        }
    }

    .modal-title {
        color: var(--color-navy);
        flex: 1;
        line-height: 2em;
        margin-block-end: 0em;
        margin-block-start: 0em;
    }

    .modal-title .modal-subtitle {
        color: var(--color-thunder);
        font-size: var(--lumo-font-size-s);
        line-height: .2;
    }

    .modal-body {
        padding: 0 var(--md-spacing);
        overflow-y: scroll;
        max-height: 600px;
        min-height: 100px;
        width: 700px;
    }

    .modal-body.tall {
        height: calc(100vh - 400px);
    }

    .modal-body.min-height {
            min-height: 35vh;
    }

    @media (min-width: 768px) {
        .modal-body.wide {
            width: calc(100vw - 300px);
        }

        .modal-body.extra-wide {
            width: calc(100vw - 200px);
        }
    }

    @media (min-width: 1200px) {
        .modal-body.wide {
            width: calc(100vw - 600px);
        }

        .modal-body.extra-wide {
            width: calc(100vw - 300px);
        }
    }

    .modal-footer {
        border-top: 1px solid var(--color-cloud);
        margin-top: var(--lg-spacing);
        padding-top: var(--md-spacing);
    }

    c6o-horizontal-layout > .btn-group {
        flex: 1 1 auto;
    }

    c6o-horizontal-layout > .btn-group:last-child {
        text-align: right;
    }

    .btn-group > c6o-button:not(:first-child) {
        margin-left: var(--md-spacing);
    }
`