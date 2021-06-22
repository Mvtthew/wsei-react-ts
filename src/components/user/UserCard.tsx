import { FC } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import UserAvatar from './UserAvatar';

const UserCard: FC = () => {
	return (
		<div className='user-card'>
			<div className='text-center'>
				<UserAvatar size={150} url='https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png' />
				<h2 className='mt-4'>Imię Nazwisko</h2>
				<p>Pozycja w firmie czy coś</p>
			</div>
			<hr className='my-4' />
			<Link to='/network' className='d-flex justify-content-between'>
				<div>
					<i className='bx bx-alarm me-2'></i>
					Your network
				</div>
				<i className='bx bx-plus'></i>
			</Link>
			<Link to='/publications' className='d-flex justify-content-between'>
				<div>
					<i className='bx bx-abacus me-2'></i>
					Your publications
				</div>
				<i className='bx bx-plus'></i>
			</Link>
		</div>
	);
};

export default UserCard;
