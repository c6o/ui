import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles'

// Register any styles here that you want to apply to the shadow DOM of a Vaadin component
registerStyles('vaadin-accordion-panel', css`
    :host([opened]) [part="content"] {
        margin-bottom: var(--md-spacing);
    }

    [part~="summary"] {
        cursor: var(--lumo-clickable-cursor);
    }

    [part~="summary-content"] ::slotted(*) {
        margin: var(--md-spacing) 0;
    }

    :host([theme~="condensed"][opened]) [part="content"] {
        margin-bottom: var(--xs-spacing);
    }

    :host([theme~="condensed"]) [part~="summary-content"] ::slotted(*) {
        margin: var(--xs-spacing) 0;
    }
`)

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

    :host(.menu-link) {
        color: var(--color-thunder);
        padding: 0;
    }

    :host(.menu-link:hover) {
        text-decoration: none;
        color: var(--color-sea);
    }

    [part="label"], [part="prefix"], [part="suffix"] {
        line-height: var(--lumo-line-height-m);
    }

    [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding-top: 0;
        padding-bottom: 0;
    }

    :host(.inline-form-btn) {
        margin-top: 21px;
    }

    :host(.inline-after) {
        margin-left: var(--sm-spacing);
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

registerStyles('vaadin-checkbox vaadin-radio-button vaadin-text-area vaadin-text-field vaadin-upload', css`
    :host {
        margin-bottom: var(--xl-spacing);;
    }

    :host > label {
        cursor: pointer;
    }

    :host([theme~="condensed"]) {
        margin-bottom: var(--xs-spacing);
    }

    [part="error-message"] {
        text-align: left;
    }
`)

registerStyles('vaadin-checkbox', css`
    :host {
        display: block;
    }

    [part="checkbox"] {
        height: calc(1em + 10px);
        width: calc(1em + 10px);
    }

    [part="checkbox"]::after {
        left: .6em;
        top: 1.2em;
    }

    :host([checked]) [part="checkbox"]::after {
        height: 1.9em;
        width: .9em;
    }

    :host([theme~="small"]) {
        font-size: var(--lumo-font-size-xs);
    }

    :host([theme~="small"]) [part="checkbox"]::after {
        left: .65em;
        top: 1.3em;
    }

    label {
        align-items: center;
    }

    [part="label"]:not([empty]) {
        font-size: var(--lumo-font-size-s);
        line-height: 1.3;
    }
`)

registerStyles('vaadin-context-menu-item', css`
    :host([tabindex])::before {
        opacity: 0;
    }

    :host([tabindex])::after {
        color: var(--color-sea);
    }
`)

registerStyles('vaadin-dialog-overlay', css`
    :host {
        top: -1rem;
        z-index: 1000;
    }
`)

registerStyles('vaadin-form-layout', css`
    :host(.max-width) {
        max-width: 35em;
    }
`)

registerStyles('vaadin-grid', css`
    :host {
        margin-bottom: var(--xl-spacing);
    }

    :host [part~="row"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 500;
        padding-top: var(--md-spacing);
        padding-bottom: var(--md-spacing);
    }

    :host [part~="row"]:hover {
        z-index: 1;
    }

    :host [part~="row"]:hover [part~="body-cell"]{
        background-color: var(--color-wind);
        cursor: pointer;
    }

    :host [part~="body-cell"] ::slotted(vaadin-grid-cell-content){
        cursor: pointer;
    }

    [part~="header-cell"] {
        background-color: var(--color-rain);
        color: var(--color-white);
        font-weight: 700;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        overflow: visible;
    }

    [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
    [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
    [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-md);
        font-weight: 700;
    }
`)

registerStyles('vaadin-item', css`
    :host(:focus) {
        outline: none !important;
    }

    :host([theme~="account-switcher"]) {
        font-size: var(--lumo-font-size-s);
        text-align: left;
    }

    :host([theme~="profile"]) {
        margin-top: var(--sm-spacing);
    }

    :host([theme~="logout"]) {
        color: var(--color-fire);
        margin-bottom: var(--sm-spacing);
    }

    :host([tabindex])::after {
        color: var(--color-white);
        content: var(--lumo-icons-checkmark);
        display: var(--_lumo-item-selected-icon-display, none);
        flex: none;
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        font-weight: normal;
        height: 1em;
        line-height: 1;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
        width: 1em;
    }

    :host([tabindex]:hover)::after {
        color: var(--color-sea);
    }

    :host([theme~="profile"][tabindex])::after {
        display: none;
    }

    :host([selected])::after {
        opacity: 1;
    }
`)

registerStyles('vaadin-list-box', css`
    [part="items"] ::slotted(.profile) {
        font-size: var(--lumo-font-size-s);
        margin-top: var(--sm-spacing);
        padding: var(--sm-spacing) var(--lg-spacing);
        text-align: left;
    }

    [part="items"] ::slotted(.heading) {
        font-size: var(--lumo-font-size-xs);
        font-weight: 500;
        padding: var(--xs-spacing) var(--lg-spacing) var(--sm-spacing);
        text-align: left;
        text-transform: uppercase;
    }

    [part="items"] ::slotted(.dropdown-item) {
        font-size: var(--lumo-font-size-s);
        padding: 0 var(--lg-spacing);
        text-align: left;
    }

    [part="items"] ::slotted(vaadin-item) {
        border-radius: 0;
        cursor: pointer;
        height: 45px;
        padding: var(--sm-spacing) var(--lg-spacing);
    }

    [part="items"] ::slotted(vaadin-item:nth-child(even):not([theme~="logout"])) {
        background-color: var(--color-snow);
    }

    [part="items"] ::slotted(vaadin-item)::before {
        display: none;
    }

    [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--color-wind) !important;
        color: var(--color-navy) !important;
    }

    [part="items"] ::slotted(vaadin-item[selected]) {
        background-color: var(--color-sea) !important;;
        color: var(--color-white) !important;;
    }

    [part="items"] ::slotted(vaadin-item[selected][theme~="profile"]) {
        background-color: transparent !important;
    }

    [part="items"] ::slotted(vaadin-item[theme~="profile"]) {
        background-color: transparent;
    }

    [part="items"] ::slotted([focus-ring]) {
        box-shadow: inset 0 0 2px 0 var(--color-sea) !important;
    }

    :host([theme~="account-switcher"]) [part="items"] ::slotted([focus-ring]) {
        box-shadow: none !important;
    }
`)

registerStyles('vaadin-menu-bar', css`
    [part="menu-bar-button"] {
        cursor: pointer;
        border: none;
        border-radius: 0;
    }

    [part="menu-bar-button"][theme="hub"] {
        color: var(--color-white);
        min-width: auto;
    }

    [part="menu-bar-button"][theme="system"] {
        background: none;
        color: var(--color-white);
    }

    [part="menu-bar-button"][theme="system"]:hover {
        background: none;
    }
`)

registerStyles('vaadin-number-field', css`
    :host {
        width: 14em;
    }
`)

registerStyles('vaadin-progress-bar', css`
    :host([theme~="light"]) [part="bar"] {
        background-color: var(--color-white);
    }
`)

registerStyles('vaadin-radio-button', css`
    :host {
        display: block;
    }

    [part="radio"] {
        height: 22px;
        width: 22px;
    }

    [part="radio"]::after {
        border-width: 4px;
    }

    [part="label"] {
        font-size: var(--lumo-font-size-s);
        text-transform: uppercase;
    }

    label {
        align-items: center;
    }
`)

registerStyles('vaadin-select', css`
    :host([theme~="inline"]) {
        max-width: 300px;
    }
`)

registerStyles('vaadin-select-text-field', css`
    :host([theme~="account-switcher"]) {
        margin-bottom: 0;
        background: none;
        color: var(--color-snow);
    }

    :host([theme~="account-switcher"]:hover) {
        background: none;
    }

    :host([theme~="account-switcher"]) [part="input-field"] {
        background: none;
    }

    :host([theme~="account-switcher"]) ::slotted([part$="button"]) {
        color: var(--color-snow) !important;
    }

    :host([theme~="inline"]) {
        margin-bottom: 0;
    }
`)

registerStyles('vaadin-select-overlay', css`
    :host([theme~="account-switcher"]) [part~="overlay"] {
        padding: 0;
        outline: none !important;
    }

    :host([theme~="account-switcher"]) [part~="content"] {
        padding: 0;
    }
`)

registerStyles('vaadin-text-area vaadin-text-field', css`
    :host {
        --lumo-text-field-size: var(--c6o-field-size);
        --vaadin-text-field-default-width: var(--c6o-default-field-width, 25rem);
        padding-bottom: 0;
        padding-top: 0;
    }

    :host(:focus) {
        outline: none !important;
    }

    :host(.full-width) {
        width: 100%;
    }

    :host([has-label]) {
        padding-top: 0;
    }

    :host(.search-field) {
        margin-bottom: 0;
    }

    :host(.search-field) [part="value"] {
        font-size: var(--lumo-font-size-s);
    }

    @keyframes spinner {
        to { transform: rotate(360deg); }
    }

    :host(.search-field.busy)::before {
        top: 50%;
        left: 262px;
        width: 20px !important;
        height: 20px !important;
        margin-top: -10px;
        margin-left: -10px;
    }

    @media (min-width: 1234px) {
        :host(.search-field.busy)::before {
            left: 422px;
        }
    }

    :host(.single-row) {
        margin-left: 0 !important;
        margin-right: 100% !important;
    }

    [part="input-field"] ::slotted([part="value"]) {
        cursor: pointer;
    }

    :host([theme~="light"]) [part="input-field"] {
        background-color: var(--color-white);
    }

    :host([theme~="reversed"]) [part="input-field"] {
        background-color: hsla(214, 69%, 84%, 0.32);
    }

    :host([theme~="reversed"]) [part="input-field"] ::slotted(iron-icon) {
        color: var(--color-snow);
    }

    :host([theme~="reversed"]) [part="value"] {
        color: var(--color-snow);
    }

    :host([theme~="inline"]) {
        margin-bottom: 0;
    }
`)

registerStyles('vaadin-text-field', css`
    :host([theme~="tall"]) [part="input-field"] {
        height: 50px;
    }
`)

registerStyles('vaadin-text-area', css`
    :host(.min-height) {
        min-height: 130px;
    }

    :host(.medium-height) {
        min-height: 200px;
    }

    :host(.large-height) {
        min-height: 300px;
    }

    :host(.max-height) {
        min-height: 400px;
    }

    .CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta{color:#555}.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error{color:red}.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:0;position:relative}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:0}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:0 0}.EasyMDEContainer{display:block}.EasyMDEContainer.sided--no-fullscreen{display:flex;flex-direction:row;flex-wrap:wrap}.CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:0;word-wrap:break-word}.CodeMirror-scroll{cursor:text}.CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:8;border-right:none!important;border-bottom-right-radius:0!important}.CodeMirror-sided{width:50%!important}.CodeMirror-sided.sided--no-fullscreen{border-right:none!important;border-bottom-right-radius:0;position:relative;flex:1 1 auto}.CodeMirror-placeholder{opacity:.5}.CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}.editor-toolbar{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}.editor-toolbar:after,.editor-toolbar:before{display:block;content:' ';height:1px}.editor-toolbar:before{margin-bottom:8px}.editor-toolbar:after{margin-top:8px}.editor-toolbar.fullscreen{width:100%;height:50px;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}.editor-toolbar.fullscreen::before{width:20px;height:50px;background:-moz-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,#fff),color-stop(100%,rgba(255,255,255,0)));background:-webkit-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:-o-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}.editor-toolbar.fullscreen::after{width:20px;height:50px;background:-moz-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(100%,#fff));background:-webkit-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:-o-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:-ms-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);position:fixed;top:0;right:0;margin:0;padding:0}.editor-toolbar.sided--no-fullscreen{width:100%}.editor-toolbar .easymde-dropdown,.editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}.editor-toolbar button{width:30px}.editor-toolbar button.active,.editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}.editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}.editor-toolbar button:after{font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}.editor-toolbar button.heading-1:after{content:"1"}.editor-toolbar button.heading-2:after{content:"2"}.editor-toolbar button.heading-3:after{content:"3"}.editor-toolbar button.heading-bigger:after{content:"▲"}.editor-toolbar button.heading-smaller:after{content:"▼"}.editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){.editor-toolbar i.no-mobile{display:none}}.editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}.editor-statusbar.sided--no-fullscreen{width:100%}.editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}.editor-statusbar .lines:before{content:'lines: '}.editor-statusbar .words:before{content:'words: '}.editor-statusbar .characters:before{content:'characters: '}.editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}.editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}.editor-preview-active-side{display:block}.editor-preview-active-side.sided--no-fullscreen{flex:1 1 auto;height:auto;position:static}.editor-preview-active{display:block}.editor-preview{padding:10px;background:#fafafa}.editor-preview>p{margin-top:0}.editor-preview pre{background:#eee;margin-bottom:10px}.editor-preview table td,.editor-preview table th{border:1px solid #ddd;padding:5px}.cm-s-easymde .cm-tag{color:#63a35c}.cm-s-easymde .cm-attribute{color:#795da3}.cm-s-easymde .cm-string{color:#183691}.cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}.cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}.cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}.cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}.cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}.cm-s-easymde .cm-link{color:#7f8c8d}.cm-s-easymde .cm-url{color:#aab2b3}.cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}.editor-toolbar .easymde-dropdown{position:relative;background:linear-gradient(to bottom right,#fff 0,#fff 84%,#333 50%,#333 100%);border-radius:0;border:1px solid #fff}.editor-toolbar .easymde-dropdown:hover{background:linear-gradient(to bottom right,#fff 0,#fff 84%,#333 50%,#333 100%)}.easymde-dropdown-content{display:none;position:absolute;background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);padding:8px;z-index:2;top:30px}.easymde-dropdown:active .easymde-dropdown-content,.easymde-dropdown:focus .easymde-dropdown-content{display:block}.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}

    .EasyMDEContainer {
        width: 100%;
    }

    .EasyMDEContainer .editor-toolbar,
    .CodeMirror {
        border: none;
        border-radius: 0;
    }

    .fa {
        color: var(--color-thunder);
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1; }

    .fa-bold:before {
        content: "\\f032"; }

    .fa-italic:before {
        content: "\\f033"; }

    .fa-heading:before {
        content: "\\f1dc"; }

    .fa-quote-left:before {
        content: "\\f10d"; }

    .fa-list-ul:before {
        content: "\\f0ca"; }

    .fa-list-ol:before {
        content: "\\f0cb"; }

    .fa-link:before {
        content: "\\f0c1"; }

    .fa-image:before {
        content: "\\f03e"; }

    .fa-eye:before {
        content: "\\f06e"; }

    .fa-columns:before {
        content: "\\f0db"; }

    .fa-arrows-alt:before {
        content: "\\f0b2"; }

    .fa-question-circle:before {
        content: "\\f059"; }

    .fa-minus:before {
        content: "\\f068"; }

    .fa-code:before {
        content: "\\f121"; }

    .fa-table:before {
        content: "\\f0ce"; }

    .fa {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900; }
`)

registerStyles('vaadin-upload', css`
    :host(.center) {
        text-align: center;
    }

    [part~="primary-buttons"] {
        padding: 1rem;
    }

    [part~="upload-button"] {
        cursor: pointer;
        margin-bottom: var(--xs-spacing);
    }

    [part="drop-label"] {
        font-size: var(--lumo-font-size-s);
    }
`)

registerStyles('vaadin-upload-file', css`
    [part~="status"] {
        color: var(--color-sea);
    }

    [part="done-icon"]::before,
    [part="warning-icon"]::before,
    [part="start-button"]::before,
    [part="retry-button"]::before,
    [part="clear-button"]::before {
        vertical-align: -.1em;
    }

    [part="clear-button"] {
        color: var(--color-fire);
    }

    [part="row"] {
        align-items: center;
    }
`)


