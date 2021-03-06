import { NotificationElement } from '@vaadin/vaadin-notification/src/vaadin-notification'

/**
 * The container element for all notifications.
 *
 * @extends NotificationElement
 */

export class Notification extends NotificationElement {
}

customElements.define('c6o-notification', Notification)