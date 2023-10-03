import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = () => {
    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                <Dialog name='Alex' id='1' />
                <Dialog name='Nast' id='2' />
                <Dialog name='Dmitry' id='3' />
                <Dialog name='Evgeny' id='4' />
                <Dialog name='Yan' id='5' />
                <Dialog name='Alber' id='6' />
                <Dialog name='Poul' id='7' />
            </div>
            <div className={s.messages_right}>
                <Message text='Hi Alex' date='08 September 2023' />
                <Message text='Hey Nasty, how are you?' date='10 September 2023' />
                <Message text='Im okay, but so busy, what about you?' date='10 September 2023' />
                <Message text='Im so good, im now in usa' date='11 September 2023' />
                <Message text='Wow, its so cool, what are you do?' date='13 September 2023' />
            </div>
        </div>
    );
}

export default Messages;
