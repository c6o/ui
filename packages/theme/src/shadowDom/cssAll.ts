import { cssAnimations } from './cssAnimations'
import { cssBase } from './cssBase'
import { cssGrid } from './cssGrid'
import { cssIcons } from './cssIcons'
import { cssReboot } from './cssReboot'
import { cssTypography } from './cssTypography'

// Does not include cssTooltip, cssBadge, cssModals
export const cssAll = [
    cssReboot,
    cssBase,
    cssGrid,
    cssIcons,
    cssTypography,
    cssAnimations
]