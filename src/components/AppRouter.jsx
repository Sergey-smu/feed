import React, {useContext} from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from '../UIComponent/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.component />}
                        path= {`${route.path}${route.exact?'/*':''}`}
                        key={route.path}

                    />
                    
                )}
                      <Route
                        element={<Navigate to="/posts"/>}
                        path= '*'
                    />
            </Routes>
                           

            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.component />}
                        path= {`${route.path}${route.exact?'/*':''}`}
                        key={route.path}
                    />
                )}
                    <Route
                        element={<Navigate to="/login"/>}
                        path= '*'
                    />
            </Routes>
    );
};

export default AppRouter;
