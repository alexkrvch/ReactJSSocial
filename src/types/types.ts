export type photosType = {
    small: string | null;
    large: string | null;
}

export type profileType = {
    aboutMe: string;
    contacts: contactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
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