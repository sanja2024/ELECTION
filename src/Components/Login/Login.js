import React from "react";
import { Dashboard_ROUTE } from "../../Common/Route/Routes";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (<>
        <button onClick={() => { navigate(Dashboard_ROUTE) }}>login</button>
    </>)

}

export default Login;