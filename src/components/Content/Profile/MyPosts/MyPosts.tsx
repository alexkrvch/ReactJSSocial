import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {createField, GetStringKeys, Textarea} from "../../../Common/FormControls/FormsControls";
import {postDataType} from "@/types/types.ts";

const maxLength30 = maxLengthCreator(30);

type MyFormProps = {

}

type PostFormValuesType = {
    newPostText: string
}

type PostFormPropertiesTypeKeys = GetStringKeys<PostFormValuesType>

const NewPostForm:React.FC<InjectedFormProps<PostFormValuesType, MyFormProps> & MyFormProps> = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={s.form}>
            {createField<PostFormPropertiesTypeKeys>('New message', 'newPostText', [required, maxLength30], Textarea, {type:'text'})}
            <button>Send</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm<PostFormValuesType>({form: 'addPost'})(NewPostForm)



type MapStatePropsType = {
    posts: postDataType[]
}

type MapDispatchPropsType = {
    onAddPost: (newPostText:string) => void
}


const MyPosts:React.FC<MapStatePropsType & MapDispatchPropsType> = React.memo((props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} header={p.header} text={p.text} countLikes={p.countLikes} date={p.date} />);

    let addNewMessage = (data:PostFormValuesType) => {
        props.onAddPost(data.newPostText)
    }

    return (
        <div className={s.my_posts}>
            <hr />

            <NewPostReduxForm onSubmit={ addNewMessage } />

            <hr />

            { postsElements }
        </div>
    );
})

export default MyPosts;
