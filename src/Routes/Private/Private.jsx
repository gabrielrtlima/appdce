import React, {  useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import Context from "../../Store/Context";


const PrivateRoute = ({component: Component, ...rest}) => {
    const { token } = useContext(Context);

    return token ? <Outlet /> : <Navigate to="/cadastrar" />

}

export default PrivateRoute