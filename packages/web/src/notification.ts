import { NotificationElement } from '@vaadin/vaadin-notification/src/vaadin-notification'

export interface Notification extends HTMLElement { }
export class Notification extends NotificationElement {
}

customElements.define('c6o-notification', Notification)