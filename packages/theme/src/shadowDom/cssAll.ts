import { cssAnimations } from './cssAnimations'
import { cssBase } from './cssBase'
import { cssIcons } from './cssIcons'
import { cssGrid } from './cssGrid'
import { cssLayouts } from './cssLayouts'
import { cssReboot } from './cssReboot'
import { cssTypography } from './cssTypography'

// Does not include cssTooltip, cssBadge, cssModals
export const cssAll = [
    cssReboot,
    cssGrid,
    cssBase,
    cssLayouts,
    cssTypography,
    cssIcons,
    cssAnimations
]