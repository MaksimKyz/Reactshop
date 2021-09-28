import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";
import { authRoutes, privateRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";

const AppRoute = () => {
    const isAuth = useSelector(state=>state.auth.isAuth)
    return (
        <Switch>
            {isAuth && authRoutes.map(({path,Component})=>
              <Route key={path} path={path} component={Component} exact/>
            )}
            {privateRoutes.map(({path,Component})=>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE}/>
        </Switch>
    );
};

export default AppRoute;