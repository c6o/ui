import { NotificationElement } from '@vaadin/vaadin-notification/src/vaadin-notification'

export class Notification extends NotificationElement implements HTMLElement {
}

customElements.define('c6o-notification', Notification)