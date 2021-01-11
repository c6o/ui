import { css } from 'lit-element'

export const cssLayouts = css`
    .panel {
        background-color: var(--color-white);
        border: none;
        border-radius: var(--c6o-border-radius);
        color: var(--color-thunder);
        margin-bottom: var(--xl-spacing);
        padding: var(--xl-spacing);
    }

    .nested-panel {
        background-color: var(--color-wind);
    }

    .sub-panel {
        max-width: 500px;
        padding: var(--md-spacing) var(--xxl-spacing);
    }

    .btn-group > c6o-button:not(:first-child) {
        margin-left: var(--sm-spacing);
    }

    c6o-select {
        width: 100%;
    }
`