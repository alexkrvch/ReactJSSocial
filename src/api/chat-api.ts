import {ChatMessageType} from "@/redux/chat-reducer.ts";

let subscribers = [] as SubscriberType[]

let ws: WebSocket | null = null

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages));
}

const closeHandler = () => {
    console.log('Close channel')
    setTimeout(createChannel, 3000)
}

function createChannel () {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler);

}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        ws?.close()
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler);
    },
    subscribe(callback: SubscriberType ){
        subscribers.push(callback);
        return  () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message:string) {
        ws?.send(message)
    }
}


type SubscriberType = Array<(messages: ChatMessageType) => void>