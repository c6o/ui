
export interface IMessageQueue {
    publish(topic, key, payload)
    subscribe(topic, key, callback)
}

export interface IHotPath extends IMessageQueue {
    
}