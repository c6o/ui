import { css } from 'lit-element'

export const cssLayouts = css`
    [c6o~="container"] {
        margin-top: var(--xl-spacing);
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
        border: 1px solid var(--color-wind);
        border-radius: var(--c6o-border-radius);
        margin: var(--lg-spacing) auto;
        max-width: 500px;
        padding: var(--xl-spacing);
    }

    .btn-group-left traxitt-button {
        margin-right: var(--md-spacing);
    }

    btn-group-right traxitt-button {
        margin-left: var(--md-spacing);
    }

    traxitt-select {
        width: 100%;
    }
`