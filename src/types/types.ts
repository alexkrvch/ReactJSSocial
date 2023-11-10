export type photosType = {
    small: string | undefined;
    large: string | undefined;
}

export type profileType = {
    aboutMe: string;
    contacts: contactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number | null;
    photos: null | photosType;
}

export type postDataType = {
    id: number;
    header: string;
    text: string;
    countLikes: number;
    date: string;
}

export type contactsType = {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
}

export type userType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: photosType;
    status: string | null;
    followed: boolean;
}

export type DialogDataType = {
    id: number;
    name: string;
}

export type MessageDataType = {
    id: number;
    text: string;
    date: string;
    img: string;
}

export type FriendType = {
    id: number;
    name: string;
    img: string;
}

export type NavType = {
    id: number,
    link: string,
    text: string
}

export type PropsForRouter = {
    location: {
        hash: string
        key: string,
        pathname: string,
        search: string,
        state: null | string
    },
    params: {
        userId: number
    },
    navigate: (to:string, options?:{}) => void
}

export type ProfileFormValuesType = {
    FullName: string,
    lookingForAJob: boolean,
    LookingForAJobDescription: string,
    AboutMe: string,
    'contacts.facebook': string;
    'contacts.website': string;
    'contacts.vk': string;
    'contacts.twitter': string;
    'contacts.instagram': string;
    'contacts.youtube': string;
    'contacts.github': string;
    'contacts.mainLink': string;
}