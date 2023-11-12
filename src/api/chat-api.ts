import {ChatMessageType} from "@/redux/chat-reducer.ts";

let subscribers = {
    'message-received': [] as MessagesSubscriberType[],
    'status-changed': [] as StatusSubscriberType[]
}

let ws: WebSocket | null = null

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers["message-received"].forEach(s => s(newMessages));
}

const closeHandler = () => {
    console.log('Close channel')
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.addEventListener('open', openHandler)
    ws?.addEventListener('error', errorHandler)
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('Error WS')
}

type EventsNames = 'message-received' | 'status-changed'

const notifySubscribersAboutStatus = (status: statusType) => {
    subscribers["status-changed"].forEach(s => s(status))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
    // setTimeout(()=>{
    //     ws?.close()
    // }, 10000)
}

function createChannel () {
    cleanUp()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers["message-received"] = []
        subscribers["status-changed"] = []
        ws?.close()
        cleanUp()
    },
    subscribe(eventName: EventsNames, callback: MessagesSubscriberType | StatusSubscriberType ){
        // @ts-ignore
        subscribers[eventName].push(callback);
        return  () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNames, callback: MessagesSubscriberType | StatusSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message:string) {
        ws?.send(message)
    }
}


type MessagesSubscriberType = Array<(messages: ChatMessageType) => void>
type StatusSubscriberType = Array<(status: statusType) => void>
type statusType = 'pending' | 'ready' | 'error';