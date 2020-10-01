import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { Header } from '../components/Header/Header';
import { IFilter } from './types';

interface PrivateRouteProps extends RouteProps {
    component: any;
    rest?: any;
    path: any,
    setFilter: Function,
    filter: IFilter,
    isAuth: boolean,
    isActiveFilter: boolean,
    setActiveFilter: Function
}

const PrivateRoute: React.SFC<PrivateRouteProps> = ({ component: Component, setFilter, filter, isAuth, isActiveFilter, setActiveFilter, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('token') ?
                <div>
                    <Header  {...props} setFilter={setFilter} filter={filter} isAuth={isAuth} isActiveFilter={isActiveFilter} setActiveFilter={setActiveFilter} />
                    <Component {...props} />
                </div>
                :
                <Redirect to='/login' />
        }
    />
);

export default PrivateRoute;