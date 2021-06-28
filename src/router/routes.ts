import EntitiesScreen from '../screens/Entities.screen';
import HomeScreen from '../screens/Home.screen';
import React from 'react';
import UserScreen from '../screens/User.screen';
import WorkspaceScreen from '../screens/Workspace.screen';

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
	{
		component: UserScreen,
		path: '/user',
		exact: true,
	},
	{
		component: WorkspaceScreen,
		path: '/workspace',
		exact: true,
	},
	{
		component: EntitiesScreen,
		path: '/entities',
		exact: true,
	},
];

export default routes;
