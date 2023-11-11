import React, {useEffect, useState} from "react";

const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
            <Messages />
            <AddMessage />
        </div>
    )
}

const Chat:React.FC = (props) => {
    return (
        <div>Messages...</div>
    )
}

const Messages:React.FC = () => {

    const [messagesItems, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChanel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessagesItems) =>[...prevMessagesItems, ...newMessages])
        })
    }, []);
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

const AddMessage:React.FC = (props) => {

    let [message, setMessage] = useState('');

    const sendMessage = () => {
       if(!message) {
           return
       }

        wsChanel.send(message)
        setMessage('')
    }

    return (
        <div>
            <hr />
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea><br/>
            <button onClick={sendMessage}>send</button>
        </div>
    )
}

export default ChatPage