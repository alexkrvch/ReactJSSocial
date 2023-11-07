import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React from "react";

function WithRouter<WCP>(Component:React.ComponentType<WCP>) {
    function ComponentWithRouterProp(props:WCP) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default WithRouter