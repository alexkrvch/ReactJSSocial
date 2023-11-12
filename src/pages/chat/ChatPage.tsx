import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from "../../redux/redux-store";


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
    const status = useSelector((state:AppStateType) => state.Chat.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return() => {
            dispatch(stopMessagesListening())
        }
    }, []);

    if(status === 'error') return <div>Some error, Please refresh page</div>

    return (
        <div>
            <Messages />
            <AddMessage />
        </div>
    )
}

const Messages:React.FC = () => {
    const messages = useSelector((state:AppStateType) => state.Chat.messages)

    return (
        <div style={{ height:'400px', overflowX:"hidden", overflowY:'scroll'}}>
            { messages.map(((m:ChatMessageType, index) => <Message key={index} userId={m.userId} photo={m.photo} message={m.message} userName={m.userName} />)) }
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

const AddMessage:React.FC = () => {
    const [message, setMessage] = useState('')
    const status = useSelector((state:AppStateType) => state.Chat.status)

    const dispatch = useDispatch()

    const onSendMessage = () => {
        if(!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div>
            <hr />
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea><br/>
            <button disabled={status!=='ready'} onClick={onSendMessage}>send</button>
        </div>
    )
}

export default ChatPage