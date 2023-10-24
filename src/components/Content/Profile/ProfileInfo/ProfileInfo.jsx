import s from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const Profile = ({ profile: {photos, fullName, lookingForAJob, contacts}, status, setProfileStatus}) => {
    return (
        <div>
            <div className={s.profile_back}>
                <img src="https://via.placeholder.com/1456x200" alt="" />
            </div>
            <div className={s.profile_header}>
                <img src={photos.small!=null ? photos.small : 'https://via.placeholder.com/150'} alt="" />
                <h2>{fullName}</h2>
                <ProfileStatusWithHooks status={status} setProfileStatus={setProfileStatus} />
            </div>
            <div className={s.profile_content}>
                <p>{ lookingForAJob ? 'В поиске' : 'Не ищу работу' }</p>

                <div className={s.social_block}>

                    { contacts.facebook ? <a href={contacts.facebook} target="_blank" rel="noreferrer"  className="facebook"><FontAwesomeIcon icon={faFacebook} size='2x'/></a> : ''}
                    { contacts.github ? <a href={contacts.github} target="_blank" rel="noreferrer"  className="github"><FontAwesomeIcon icon={faGithub} size='2x' /></a> : '' }
                    { contacts.instagram ? <a href={contacts.instagram} target="_blank" rel="noreferrer"  className="instagram"><FontAwesomeIcon icon={faInstagram} size='2x' /></a> : '' }
                    { contacts.twitter ? <a href={contacts.twitter} target="_blank" rel="noreferrer"  className="twitter"><FontAwesomeIcon icon={faTwitter} size='2x' /></a> : '' }
                    { contacts.vk ? <a href={contacts.vk} target="_blank" rel="noreferrer"  className="vk"><FontAwesomeIcon icon={faVk} size='2x' /></a> : '' }


                </div>
            </div>
        </div>
    );
}

export default Profile;
