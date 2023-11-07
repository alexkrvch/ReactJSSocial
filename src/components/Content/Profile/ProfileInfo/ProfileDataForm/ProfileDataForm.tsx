import s from "../ProfileInfo.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../../../Common/FormControls/FormsControls";
import {required} from "../../../../../utils/validators/validators";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faInstagram, faMendeley,
    faTwitter,
    faVk,
    faWeibo,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {InjectedFormProps, reduxForm} from "redux-form";
import React, {useEffect} from "react";
import {contactsType, ProfileFormValuesType, profileType} from "@/types/types.ts";


type ProfileFormType = profileType


type OwnPropsType = {
    owner:boolean,
    onEditForm:(editMode: boolean) => void
}

type MyFormProps = ProfileFormType & OwnPropsType

type ProfileFormPropertiesTypeKeys = GetStringKeys<ProfileFormValuesType>


const ProfileForm:React.FC<InjectedFormProps<ProfileFormValuesType, MyFormProps> & MyFormProps> = ({handleSubmit, lookingForAJob, contacts, lookingForAJobDescription, aboutMe, owner, fullName, initialize, error}) => {
    useEffect(() => {
        const data: {AboutMe: string, contacts: contactsType, lookingForAJob: boolean, LookingForAJobDescription: string, FullName: string} = {
            "AboutMe": aboutMe,
            "contacts": contacts,
            "lookingForAJob": lookingForAJob,
            "LookingForAJobDescription": lookingForAJobDescription,
            "FullName": fullName
        }
        initialize(data)
    }, [lookingForAJob, contacts, lookingForAJobDescription, aboutMe, owner, fullName, initialize]);

    let errorsList
    if(error) {
        errorsList = `<p>Error: ${error}</p>`;
    }


    return (
        <form onSubmit={ handleSubmit } className={s.profile_content}>
            { owner && <div><button>Save</button></div> }
            <p>Введите имя</p>
            {createField<ProfileFormPropertiesTypeKeys>('Имя', 'FullName', [required], Input, {type:'text'})}
            <p>В поиске работы</p>
            {createField<ProfileFormPropertiesTypeKeys>('В поиске работы', 'lookingForAJob', [], Input, {type:'checkbox'})}
            <p>Мои скиллы</p>
            {createField<ProfileFormPropertiesTypeKeys>('Мои скилы', 'LookingForAJobDescription', [required], Input, {type:'text'})}
            <p>Обо мне</p>
            {createField<ProfileFormPropertiesTypeKeys>('Обо мне', 'AboutMe', [required], Textarea, {type:'text'})}
            <p>Имя: { fullName }</p>
            <p>Поиск работы: { lookingForAJob ? 'В поиске' : 'Не ищу работу' }</p>
            <p>Описание поиска работы: { lookingForAJobDescription && lookingForAJobDescription}</p>
            <p>About Me: { aboutMe && aboutMe}</p>

            <div>{createField<ProfileFormPropertiesTypeKeys>('facebook', 'contacts.facebook', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('github', 'contacts.github', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('instagram', 'contacts.instagram', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('twitter', 'contacts.twitter', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('vk', 'contacts.vk', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('website', 'contacts.website', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('youtube', 'contacts.youtube', [], Input, {type:'text'})}</div>
            <div>{createField<ProfileFormPropertiesTypeKeys>('mainLink', 'contacts.mainLink', [], Input, {type:'text'})}</div>

            <div className={s.social_block}>


                { contacts.facebook ? <a href={contacts.facebook} target="_blank" rel="noreferrer"  className="facebook"><FontAwesomeIcon icon={faFacebook} size='2x'/></a> : ''}
                { contacts.github ? <a href={contacts.github} target="_blank" rel="noreferrer"  className="github"><FontAwesomeIcon icon={faGithub} size='2x' /></a> : '' }
                { contacts.instagram ? <a href={contacts.instagram} target="_blank" rel="noreferrer"  className="instagram"><FontAwesomeIcon icon={faInstagram} size='2x' /></a> : '' }
                { contacts.twitter ? <a href={contacts.twitter} target="_blank" rel="noreferrer"  className="twitter"><FontAwesomeIcon icon={faTwitter} size='2x' /></a> : '' }
                { contacts.vk ? <a href={contacts.vk} target="_blank" rel="noreferrer"  className="vk"><FontAwesomeIcon icon={faVk} size='2x' /></a> : '' }
                { contacts.website ? <a href={contacts.website} target="_blank" rel="noreferrer"  className="website"><FontAwesomeIcon icon={faWeibo} size='2x' /></a> : '' }
                { contacts.youtube ? <a href={contacts.youtube} target="_blank" rel="noreferrer"  className="website"><FontAwesomeIcon icon={faYoutube} size='2x' /></a> : '' }
                { contacts.mainLink ? <a href={contacts.mainLink} target="_blank" rel="noreferrer"  className="website"><FontAwesomeIcon icon={faMendeley} size='2x' /></a> : '' }


            </div>
            { error && <div className={s.form_error}>{ errorsList }</div> }
        </form>
    )
}

const ProfileReduxForm = reduxForm<ProfileFormValuesType, MyFormProps>({
    form: 'profile'
})(ProfileForm)

export default ProfileReduxForm