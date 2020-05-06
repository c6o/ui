import { css } from 'lit-element'

export const cssTypography = css`
h1, h2, h3, h4, h5, h6 {
    margin-bottom: .75rem;
    font-weight: 500;
    line-height: 1.2;
}

h1 {
    color: var(--color-sea);
    font-size: var(--lumo-font-size-xxl);
    font-weight: 200;
}

h2, .subtitle {
    color: var(--color-sea);
    font-size: var(--lumo-font-size-xl);
    font-weight: 500;
}

h3 {
    color: var(--color-navy);
    text-transform: uppercase;
    font-size: var(--lumo-font-size-l);
    font-weight: 700;
}

h4 {
    font-size: var(--lumo-font-size-m);
}

h5 {
    font-size: var(--lumo-font-size-xm);
}

h6 {
    font-size: var(--lumo-font-size-s);
}

.title {
    color: var(--color-sea);
    font-size: var(--lumo-font-size-xxxl);
    font-weight: 100;
}

.help-text {
    color: var(--color-rain);
    font-size: var(--lumo-font-size-xs);
}

small,
.small {
    font-size: 80%;
    font-weight: 400;
}

code {
    font-size: 87.5%;
    word-wrap: break-word;
}
`