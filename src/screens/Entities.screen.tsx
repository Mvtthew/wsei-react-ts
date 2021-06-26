import EntitiesGridList from '../components/entities/EntitiesGridList';
import { FC } from 'react';
import React from 'react';
import UserCard from '../components/user/UserCard';

const EntitiesScreen: FC = () => {
	return (
		<div className='d-flex'>
			<div className='left-bar'>
				<UserCard />
			</div>

			<div className='content ps-5'>
				<EntitiesGridList></EntitiesGridList>
			</div>
		</div>
	);
};

export default EntitiesScreen;
