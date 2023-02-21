import {AdminPanel} from "./AdminPanel/AdminPanel";
import {Navigate, Route, Routes} from "react-router-dom";
import LkTemplatePage from "./common/LkTemplatePage/LkTemplatePage";
import {Login} from "./AdminPanel/Login/Login";
import React from "react";

export const PATH = {
    SIGN_IN: '/singIn',
    ADMIN: {
        MAIN: '/admin/*',
        INTERFACE: '/adminInterFace/*'
    },
    USER: {
        MAIN: '/user/*',
        SIGN_IN: '/register',
    }
}

export const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.SIGN_IN} />} />
            <Route path={PATH.SIGN_IN} element={<Login/>} />
            <Route path={PATH.ADMIN.MAIN} element={<AdminPanel/>} />
            <Route path={PATH.USER.MAIN} element={<LkTemplatePage/>} />
            <Route path={'*'} element={<div>Error</div>} />
        </Routes>
    )
}