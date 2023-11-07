import s from "../ProfileInfo.module.css";
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
import {profileType} from "@/types/types.ts";
import React from "react";

type OwnPropsType = {
    owner:boolean,
    onEditForm:(editMode: boolean) => void
}

type PropsType = profileType & OwnPropsType

const ProfileData:React.FC<PropsType> = ({lookingForAJob, contacts, lookingForAJobDescription, aboutMe, owner, onEditForm, fullName}) => {
    return (
        <div className={s.profile_content}>
            { owner && <div><button onClick={ () => {onEditForm(true)}}>Edit</button></div> }
            <p>Имя: {fullName}</p>
            <p>Поиск работы: { lookingForAJob ? 'В поиске' : 'Не ищу работу' }</p>
            <p>Описание поиска работы: { lookingForAJobDescription && lookingForAJobDescription}</p>
            <p>About Me: { aboutMe && aboutMe}</p>

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
        </div>
    )
}

export default ProfileData