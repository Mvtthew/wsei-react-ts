import { FC } from 'react';
import { Photo } from '../../store/photosReducer';
import React from 'react';
import { RootState } from '../../store';
import { User } from '../../store/usersReducer';
import UserAvatar from './UserAvatar';
import UserInput from './UserInput';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const UserInfo: FC = () => {
	const principal = useSelector<RootState, User>((state) => state.users.principal);
	const photo = useSelector<RootState, Photo>((state) => state.photos[0]);

	const [edit, setEdit] = useState(false);

	return (
		<div className='position-relative'>
			<div className='d-flex'>
				<UserAvatar size={78} url={photo.url}></UserAvatar>
				<div className='ms-5'>
					<UserInput className='fw-bold' edit={edit} initialValue={principal.name} />
					<UserInput className='fw-bold' edit={edit} initialValue={principal.company.name} />
					<UserInput className='' edit={edit} initialValue={principal.address.city} />
				</div>
				<div className='ms-5 ps-5 mt-auto'>
					<UserInput className='' edit={edit} initialValue={principal.email} />
					<UserInput className='' edit={edit} initialValue={principal.phone} />
				</div>
			</div>
			<button
				className='position-absolute top-0 end-0 btn btn-sm btn-outline-primary'
				onClick={() => {
					setEdit(!edit);
				}}>
				<i className='bx bx-edit-alt'></i>
			</button>
		</div>
	);
};

export default UserInfo;
