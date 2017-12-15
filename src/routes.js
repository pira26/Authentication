import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Base from './components/Base';
import Auth from './modules/Auth';
import LogInPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';
import HomePage from './components/HomePage';

const Routes = () => (

	<Switch>
        	<Route exact path='/' component={Base} />
	</Switch>

	// {
	// 	component: Base,
	// 	childRoutes: [
	// 		{
	// 			path: '/',
	// 			getComponent: (location, callback) => {
	// 				if (Auth.isUserAuthenticated()) {
	// 					callback(null, HomePage);
	// 				} else {
	// 					callback(null, LogInPage);
	// 				}
	// 			}
	// 		},
	// 		{
	// 			path: '/login',
	// 			component: LoginPage
	// 		},
	// 		{
	// 			path: '/signup',
	// 			component: SignUpPage
	// 		}
	// 	]
	// }
)

export default Routes;