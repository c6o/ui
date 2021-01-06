import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

registerStyles('vaadin-button', css`
    :host {
        --lumo-button-size: var(--c6o-button-size);
        background-color: var(--color-white, #fff);
        border: 1px solid var(--color-sea);
        border-radius: 500px;
        color: var(--color-sea);
        cursor: var(--lumo-clickable-cursor);
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
        margin: 0;
        padding-left: var(--xl-spacing);
        padding-right: var(--xl-spacing);
    }

    :host(:hover) {
        background-color: var(--color-sea);
        color: var(--color-white);
    }

    :host([disabled][disabled]) {
        border-color: var(--color-cloud);
    }

    :host([theme~="primary"]) {
        background-color: var(--color-sea);
        border: none;
        color: var(--color-white);
        min-width: calc(var(--lumo-button-size) * 3);
    }

    :host([theme~="primary"]:hover) {
        background-color: var(--color-morning-sea);
    }

    :host([theme~="tertiary"]) {
        border: none;
    }

    :host([theme~="tertiary"]:hover) {
        color: var(--color-morning-sea);
        opacity: 1 !important;
    }

    :host([theme~="default"]) {
        border-color: var(--color-rain);
        color: var(--color-storm);
        min-width: calc(var(--lumo-button-size) * 3);
    }

    :host([theme~="default"]:hover) {
        background-color: var(--color-rain);
        border-color: transparent;
        color: var(--color-white);
    }

    :host([theme~="info"]) {
        border-color: var(--color-sea);
        color: var(--color-sea);
        min-width: calc(var(--lumo-button-size) * 3);
    }

    :host([theme~="info"]:hover) {
        background-color: var(--color-sea);
        color: var(--color-white);
    }

    :host([theme~="info"][theme~="primary"]) {
        color: var(--color-white);
    }

    :host([theme~="info"][theme~="primary"]:hover) {
        background-color: var(--color-morning-sea);
        color: var(--color-white);
    }

    :host([theme~="info"][theme~="tertiary"]:hover) {
        color: var(--color-morning-sea);
    }

    :host([theme~="success"]) {
        border-color: var(--color-ocean);
        color: var(--color-ocean);
        min-width: calc(var(--lumo-button-size) * 3);
    }

    :host([theme~="success"]:hover) {
        background-color: var(--color-ocean);
        color: var(--color-white);
    }

    :host([theme~="success"][theme~="primary"]) {
        background-color: var(--color-ocean);
        color: var(--color-white);
    }

    :host([theme~="success"][theme~="primary"]:hover) {
        background-color: var(--color-twilight-ocean);
        color: var(--color-white);
    }

    :host([theme~="warning"]) {
        border-color: var(--color-sun);
        color: var(--color-thunder);
        min-width: calc(var(--lumo-button-size) * 3);
    }

    :host([theme~="warning"]:hover) {
        background-color: var(--color-sun);
        color: var(--color-navy);
    }

    :host([theme~="warning"][theme~="primary"]) {
        background-color: var(--color-sun);
        color: var(--color-thunder);
    }

    :host([theme~="warning"][theme~="primary"]:hover) {
        background-color: var(--color-evening-sun);
        color: var(--color-white);
    }

    :host([theme~="error"]) {
        border-color: var(--color-fire);
        color: var(--color-fire);
        min-width: calc(var(--lumo-button-size) * 3);
    }

    :host([theme~="error"]:hover) {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    :host([theme~="error"][theme~="primary"]) {
        background-color: var(--color-fire);
        color: var(--color-white);
    }

    :host([theme~="error"][theme~="primary"]:hover) {
        background-color: var(--color-night-fire);
        color: var(--color-white);
    }

    :host([theme~="error"][theme~="tertiary"]:hover) {
        color: var(--color-night-fire);
    }

    [part="label"],
    [part="prefix"],
    [part="suffix"] {
        line-height: var(--lumo-line-height-m);
    }

    [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding-top: 0;
        padding-bottom: 0;
    }

    :host([theme~="card"]) {
        border-color: var(--color-cloud);
        border-radius: var(--c6o-border-radius);
        color: var(--color-storm);
        height: 120px;
        margin: var(--md-spacing);
        padding: var(--sm-spacing) var(--md-spacing);
        width: 170px;
    }

    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
        :host([theme~="card"]) {
            height: 80px;
            width: 100px;
        }
    }

    @media (max-height: 700px) {
        :host([theme~="card"]) {
            margin: var(--xs-spacing) var(--md-spacing);
        }
    }

    :host([theme~="card"]:hover) {
        background-color: var(--color-snow);
        color: var(--color-thunder);
    }

    :host([theme~="card"]) [part="label"] {
        height: 100%;
        margin-bottom: 0;
        width: 100%;
        white-space: normal;
    }

    :host([theme~="card"]) [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        display: block;
        color: var(--color-sea);
        height: calc(var(--xl-spacing) * 2.1);
        margin: var(--xs-spacing) auto;
        width: calc(var(--xl-spacing) * 2.1);
    }

    :host([theme~="card"]) [part] ::slotted(iron-icon[icon^="vaadin:"].small) {
        height: calc(var(--xl-spacing) * 1.5);
        width: calc(var(--xl-spacing) * 1.5);
    }

    @media (max-width: 1200px) {
        :host([theme~="card"]) [part] ::slotted(iron-icon[icon^="vaadin:"]) {
            height: var(--xl-spacing);
            width: var(--xl-spacing);
        }
    }
`)