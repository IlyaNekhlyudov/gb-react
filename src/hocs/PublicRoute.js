import React from "react";
import {Navigate} from "react-router-dom";

const PublicRoute = ({ children, authenticated }) => {
    return authenticated ? <Navigate to="/"/> : children;
}

export default PublicRoute;
