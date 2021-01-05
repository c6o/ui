import { CSSResult } from 'lit-element'
import { cssReboot, cssBase, cssAll } from '@c6o/ui-theme'
import { mix } from 'mixwith'
import { MobxLitElement } from '@adobe/lit-mobx'

type mobxLitElementConstructorType = new (...a) => MobxLitElement

export const MinStyledMobxLitElement = (...styles: CSSResult[]): mobxLitElementConstructorType => mix(MobxLitElement).with(MinimalStylesMixin(...styles))
export const StyledMobxLitElement = (...styles: CSSResult[]): mobxLitElementConstructorType => mix(MobxLitElement).with(AllStylesMixin(...styles))

export const MinimalStylesMixin = (...styles: CSSResult[]) => (base) => class MinimalStylesMixinClass extends base {
    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssReboot,
            cssBase,
            ...styles
        ]
    }
}

export const AllStylesMixin = (...styles: CSSResult[]) => (base) => class AllStylesMixinClass extends base {
    static get styles(): (CSSResult[] | CSSResult)[] {
        return [
            cssAll,
            ...styles
        ]
    }
}