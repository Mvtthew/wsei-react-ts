import HomeScreen from '../screens/Home.screen';
import React from 'react';

export interface RouteType {
	path: string;
	component: React.FC;
	exact?: boolean;
}

const routes: RouteType[] = [
	{
		component: HomeScreen,
		path: '/',
		exact: true,
	},
];

export default routes;
