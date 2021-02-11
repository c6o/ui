export interface TabsItem { label: string, tabHtml: HTMLElement }
export interface TabsItems extends Array<TabsItem> {}

export * from './tab'
export * from './tabs'
export * from './horizontalTabs'
export * from './navigationTabs'
export * from './verticalTabs'

export * from './styles'