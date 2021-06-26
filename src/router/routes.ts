import HomeScreen from '../screens/Home.screen';
import React from 'react';
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
		component: WorkspaceScreen,
		path: '/workspace',
		exact: true,
	},
];

export default routes;
