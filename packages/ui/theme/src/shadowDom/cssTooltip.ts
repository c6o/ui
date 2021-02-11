import { css } from 'lit-element'

export const cssTooltip = css`
    /* Tooltip container */
    .tooltip {
        display: inline-block;
        position: relative;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        background-color: var(--color-snow);
        border: 2px solid var(--color-sea);
        border-radius: var(--c6o-border-radius);
        color: var(--color-thunder);
        font-size: var(--lumo-font-size-xs);
        opacity: 0;
        position: absolute;
        transition: opacity 1s;
        width: 200px;
        visibility: hidden;
        z-index: 100;

        /* position */
        top: 100%;
        left: 50%;
        margin-left: -100px;
        margin-top: var(--sm-spacing);
    }

    .tooltip.narrow .tooltiptext {
        margin-left: -80px;
        width: 160px;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        opacity: 1;
        visibility: visible;
    }

    .tooltip .tooltiptext::after {
        border-width: 7px;
        border-style: solid;
        border-color: transparent transparent var(--color-sea) transparent;
        bottom: 100%;  /* At the top of the tooltip */
        content: " ";
        left: 50%;
        margin-left: -7px;
        position: absolute;
    }

    .tooltip .tooltiptext .tooltip-header {
        background-color: var(--color-sea);
        color: var(--color-white);
        font-weight: 500;
        padding: var(--xs-spacing);
        text-align: center;
    }

    .tooltip .tooltiptext .tooltip-content {
        padding: var(--sm-spacing);
        text-align: left;
    }
`