import { BrowserRouter, Route } from 'react-router-dom';
import React, { FC, useEffect } from 'react';

import Navbar from '../components/compositional/navbar/Navbar';
import { getPhotos } from '../store/photosReducer';
import { getPosts } from '../store/postsReducer';
import { getUsers } from '../store/usersReducer';
import routes from './routes';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Router: FC = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const loadFromApi = async () => {
		dispatch(await getUsers());
		dispatch(await getPhotos());
		dispatch(await getPosts());
	};

	useEffect(() => {
		loadFromApi().then(() => {
			setLoading(false);
		});
	}, []);

	return (
		<>
			<div className={'loader ' + (loading ? '' : 'hide')}>
				<div className='spinner-border' role='status'></div>
			</div>
			<main className={loading ? '' : 'show'}>
				{!loading && (
					<BrowserRouter>
						<Navbar />
						<div className='container py-5'>
							{routes.map((route) => (
								<Route component={route.component} exact={route.exact} path={route.path} key={route.path}></Route>
							))}
						</div>
					</BrowserRouter>
				)}
			</main>
		</>
	);
};

export default Router;
