import { css } from 'lit-element'

export const cssLayouts = css`
    .container-content {
        padding-top: var(--xl-spacing);
    }

    .panel {
        background-color: var(--color-white);
        border: none;
        border-radius: var(--c6o-border-radius);
        margin-bottom: var(--xl-spacing);
        padding: var(--xl-spacing);
    }

    .nested-panel {
        background-color: var(--color-wind);
    }

    .sub-panel {
        max-width: 500px;
        padding: var(--md-spacing) calc(var(--xl-spacing) * 2);
    }

    .btn-group-left c6o-button {
        margin-right: var(--md-spacing);
    }

    btn-group-right c6o-button {
        margin-left: var(--md-spacing);
    }

    c6o-select {
        width: 100%;
    }

    .card {
        background-color: var(--color-white);
        box-shadow: 4px 4px 10px var(--color-cloud);
        margin: var(--xl-spacing) calc(var(--xl-spacing) * 1.5);
        padding: var(--xl-spacing);
        text-align: center;
    }

    .card .icon {
        margin: 0 auto var(--xl-spacing);
    }
`