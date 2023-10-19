import s from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const Profile = (props) => {
    return (
        <div>
            <div className={s.profile_back}>
                <img src="https://via.placeholder.com/1456x200" alt="" />
            </div>
            <div className={s.profile_header}>
                <img src={props.profile.photos.small!=null ? props.profile.photos.small : 'https://via.placeholder.com/150'} alt="" />
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status='Default status' />
            </div>
            <div className={s.profile_content}>
                <p>{ props.profile.lookingForAJob ? 'В поиске' : 'Не ищу работу' }</p>

                <div className={s.social_block}>

                    { props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook} target="_blank" rel="noreferrer"  className="facebook"><FontAwesomeIcon icon={faFacebook} size='2x'/></a> : ''}
                    { props.profile.contacts.github ? <a href={props.profile.contacts.github} target="_blank" rel="noreferrer"  className="github"><FontAwesomeIcon icon={faGithub} size='2x' /></a> : '' }
                    { props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram} target="_blank" rel="noreferrer"  className="instagram"><FontAwesomeIcon icon={faInstagram} size='2x' /></a> : '' }
                    { props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter} target="_blank" rel="noreferrer"  className="twitter"><FontAwesomeIcon icon={faTwitter} size='2x' /></a> : '' }
                    { props.profile.contacts.vk ? <a href={props.profile.contacts.vk} target="_blank" rel="noreferrer"  className="vk"><FontAwesomeIcon icon={faVk} size='2x' /></a> : '' }


                </div>
            </div>
        </div>
    );
}

export default Profile;
