import { CSSResult } from 'lit-element'
import { cssReboot, cssBase } from '@c6o/ui-theme'
import { mix } from 'mixwith'
import { MobxLitElement } from '@adobe/lit-mobx'

type mobxLitElementConstructorType = new (...a) => MobxLitElement
export const StyledMobxLitElement = (...styles: CSSResult[]): mobxLitElementConstructorType => mix(MobxLitElement).with(MinimalStyleMixin(...styles))

export const MinimalStyleMixin = (...styles: CSSResult[]) => (base) => class minimalStyleMixin extends base {
    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            ...styles
        ]
    }
}