import EntitiesGridList from '../components/entities/EntitiesGridList';
import { FC } from 'react';
import React from 'react';
import UserCard from '../components/user/UserCard';
import { useState } from 'react';

const EntitiesScreen: FC = () => {
	const [showFullscreen, setShowFullscreen] = useState(false);

	return (
		<div className='d-flex'>
			<div className={'left-bar ' + (showFullscreen ? 'd-none' : '')}>
				<UserCard />
			</div>

			<div className='content ps-5'>
				<EntitiesGridList
					toggleFullscreen={() => {
						setShowFullscreen(!showFullscreen);
					}}></EntitiesGridList>
			</div>
		</div>
	);
};

export default EntitiesScreen;
