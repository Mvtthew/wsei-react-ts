import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../store/photosReducer';
import React from 'react';
import { RootState } from '../../store';
import { User } from '../../store/usersReducer';
import UserAvatar from './UserAvatar';
import { useSelector } from 'react-redux';

const UserCard: FC = () => {
	const principal = useSelector<RootState, User>((state) => state.users.principal);
	const photo = useSelector<RootState, Photo>((state) => state.photos[0]);

	return (
		<div className='user-card'>
			<div className='text-center'>
				<UserAvatar size={150} url={photo.url} />
				<h2 className='mt-4'>{principal.name}</h2>
				<p>{principal.company.name}</p>
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
