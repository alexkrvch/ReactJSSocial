import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    ChatMessageTypeWithId,
    sendMessage,
    startMessagesListening,
    stopMessagesListening
} from "../../redux/chat-reducer";
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



    return (
        <div>
            {status === 'error' && <div>Some error, Please refresh page</div> }
            <Messages />
            <AddMessage />
        </div>
    )
}

const Messages:React.FC = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const messages = useSelector((state:AppStateType) => state.Chat.messages)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
          const element = e.currentTarget;
          if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300 ) {
              !isAutoScroll && setIsAutoScroll(true)
          }else{
              isAutoScroll && setIsAutoScroll(false)
          }
    }

    useEffect(() => {
        if(isAutoScroll){
            messagesAnchorRef.current?.scrollIntoView({behavior:'smooth'})
        }
    }, [messages]);

    return (
        <div style={{ height:'400px', overflowX:"hidden", overflowY:'scroll'}} onScroll={scrollHandler}>
            { messages.map(((m:ChatMessageTypeWithId, index) => <Message key={m.id} userId={m.userId} photo={m.photo} message={m.message} userName={m.userName} />)) }
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message:React.FC<ChatMessageType> = React.memo(({userId, userName, photo, message}) => {
    return (
        <div>
            <img style={{marginRight:'10px', display:'inline-block'}} src={photo} alt={userName} />
            <span>{userName}</span><br /><br />
            {message}
            <hr />
        </div>
    )
})

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