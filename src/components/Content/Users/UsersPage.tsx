import React from "react";
import {Users} from "./Users";

type UsersPageType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPageType> = (props) => {
    return (<>
       <h2>{props.pageTitle}</h2><Users />
        </>)
}
