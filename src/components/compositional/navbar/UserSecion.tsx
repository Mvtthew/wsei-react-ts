import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../../store/photosReducer';
import React from 'react';
import { RootState } from '../../../store';
import { User } from '../../../store/usersReducer';
import UserAvatar from '../../user/UserAvatar';
import { useSelector } from 'react-redux';

const UserSecion: FC = () => {
	const principal = useSelector<RootState, User>((state) => state.users.principal);
	const photo = useSelector<RootState, Photo>((state) => state.photos[0]);

	return (
		<div className='user-section d-flex mt-4'>
			<UserAvatar size={50} url={photo.url} />
			<div className='ms-3'>
				<p className='fw-bold mb-2'>{principal.name}</p>
				<Link to='/user'>Go to profile</Link>
			</div>
		</div>
	);
};

export default UserSecion;
