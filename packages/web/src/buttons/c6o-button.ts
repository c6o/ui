import { html } from 'lit-html'
import './button'

/**
 * Primary UI component for user interaction
 */
export const C6oButton = ({ theme, size, label, onClick }) => {

    return html`
        <c6o-button
            theme=${[`${theme || 'secondary'}`, `${size || 'medium'}`].join(' ')}
            @click=${onClick}
        >
            ${label}
        </c6o-button>
    `
}
