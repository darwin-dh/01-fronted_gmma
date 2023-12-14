import React from "react";
//import { Navigate } from "react-router-dom";
import LoginCover from "../pages/Dash/Dash"
interface Route {
    path: string;
    component: React.ComponentType;
}


const authProtectedRoutes: Route[] = [

];

const publicRoutes: Route[] = [
    {
        path: '/',
        component: LoginCover
    },
]
export { authProtectedRoutes, publicRoutes };