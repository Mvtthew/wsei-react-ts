import { BrowserRouter, Route } from 'react-router-dom';
import React, { FC } from 'react';

import Navbar from '../components/compositional/navbar/Navbar';
import routes from './routes';

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='container py-5'>
				{routes.map((route) => (
					<Route component={route.component} exact={route.exact} path={route.path}></Route>
				))}
			</div>
		</BrowserRouter>
	);
};

export default Router;
