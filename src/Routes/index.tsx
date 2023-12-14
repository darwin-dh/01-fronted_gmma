import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
import VerticalLayout from "../Layouts/index";

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { Button } from 'reactstrap';
import AuthProtected from './AuthProtected';
const NotFound = () => (
    <div className=' d-flex justify-content-center flex-column   align-items-center ' style={{ width: "100vw" }}>
        <span className='fs-1 fw-bold text-center'>    Pagina no encontrada 404</span>
        <Button>Regresar al Inicio</Button>
    </div>
);
const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <VerticalLayout>
                                    <route.component />

                                </VerticalLayout>}
                            key={idx}
                        />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected>
                                    <VerticalLayout>{route.component}</VerticalLayout>
                                </AuthProtected>}
                            key={idx}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default Index;