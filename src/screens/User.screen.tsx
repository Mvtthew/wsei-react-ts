import { FC } from 'react';
import React from 'react';
import UserCard from '../components/user/UserCard';
import UserDescription from '../components/user/UserDescription';
import UserInfo from '../components/user/UserInfo';

const UserScreen: FC = () => {
	return (
		<div className='d-flex'>
			<div className='left-bar'>
				<UserCard />
			</div>
			<div className='content ps-5'>
				<UserInfo />
				<hr />
				<UserDescription />
			</div>
		</div>
	);
};

export default UserScreen;
