import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import ServerService from './ServerService';

export default function PrivateRoute({ component: Component, path: path, location, match, ...rest }) {

    const { isAuth, setIsAuth, user, setUser } = useContext(AuthContext);
    useEffect(() => {
        ServerService.isClientAuthorized().then(result => {
            console.log(result, "autharized ");
            setIsAuth(result.data.status);
            setUser(result.data.user)
        }).catch(err => {
            console.log(err, "err in authorized")
        })
        return () => {
        }
    }, [])

    return (
        <Route {...rest} path={path} render={(probs) => {
            if (isAuth) {
                return <Component />
            } else {
                return <Redirect to={{ pathname: "/", state: { from: probs.location } }} />
            }
        }} />
    )
}