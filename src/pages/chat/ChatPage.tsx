import React, {useEffect, useState} from "react";


export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const ChatPage:React.FC = (props) => {
    return (
        <div style={{width:'100%', alignItems:'start', textAlign:'left'}}>
            <h1>Chat</h1>
            <Chat />
        </div>
    )
}

const Chat:React.FC = (props) => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)


    useEffect(() => {
        let ws: WebSocket

        const closeHandler = () => {
            console.log('Close channel')
            setTimeout(createChannel, 3000)
        }

        function createChannel () {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)

            setWsChannel(ws)
        }

        createChannel();

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, []);

    return (
        <div>
            <Messages wsChannel={wsChannel} />
            <AddMessage wsChannel={wsChannel} />
        </div>
    )
}

const Messages:React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {


    const [messagesItems, setMessages] = useState<ChatMessageType[]>([])

    const messageHandler = (e: MessageEvent) => {
        let newMessages = JSON.parse(e.data)
        setMessages((prevMessagesItems) =>[...prevMessagesItems, ...newMessages])
    }

    useEffect(() => {
        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel]);
    return (
        <div style={{ height:'400px', overflowX:"hidden", overflowY:'scroll'}}>
            { messagesItems.map(((m:ChatMessageType, index) => <Message key={index} userId={m.userId} photo={m.photo} message={m.message} userName={m.userName} />)) }
        </div>
    )
}

const Message:React.FC<ChatMessageType> = ({userId, userName, photo, message}) => {
    return (
        <div>
            <img style={{marginRight:'10px', display:'inline-block'}} src={photo} alt={userName} />
            <span>{userName}</span><br /><br />
            {message}
            <hr />
        </div>
    )
}

const AddMessage:React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {

    let [message, setMessage] = useState('');

    let [readyStatus, setReadyStatus] = useState<'pending'| 'ready'>('pending')

    const sendMessage = () => {
       if(!message) {
           return
       }

        wsChannel?.send(message)
        setMessage('')
    }

    const openHandler = () => {
        setReadyStatus('ready');
    }

    useEffect(() => {
        wsChannel?.addEventListener('open', openHandler)
        return() => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel]);

    return (
        <div>
            <hr />
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea><br/>
            <button disabled={wsChannel===null || readyStatus !== 'ready'} onClick={sendMessage}>send</button>
        </div>
    )
}

export default ChatPage