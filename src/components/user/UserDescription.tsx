import { FC, useState } from 'react';

import { Photo } from '../../store/photosReducer';
import React from 'react';
import { RootState } from '../../store';
import { User } from '../../store/usersReducer';
import UserAvatar from './UserAvatar';
import UserInput from './UserInput';
import UserInputFile from './UserInputFile';
import UserInputSelect from './UserInputSelect';
import { useSelector } from 'react-redux';

const UserDescription: FC = () => {
	const users = useSelector<RootState, User[]>((state) => state.users.users);
	const photos = useSelector<RootState, Photo[]>((state) => state.photos);
	const [edit, setEdit] = useState(false);

	return (
		<div className='position-relative'>
			<div>
				<p className='mb-0'>Expertise</p>
				<UserInput className='badge bg-primary p-2 d-inline-block' edit={edit} initialValue='Mergers and acquisition'></UserInput>
				<p className='mb-0 mt-4'>Specialties</p>
				<UserInput className='badge bg-primary p-2 me-2 d-inline-block' edit={edit} initialValue='Cross border'></UserInput>
				<UserInput className='badge bg-primary p-2 d-inline-block' edit={edit} initialValue='Transaction over 500M€/$'></UserInput>
				<p className='mb-0 mt-4'>Admission to practice law</p>
				<UserInput className='badge bg-primary p-2 me-2 d-inline-block' edit={edit} initialValue='Paris bar association'></UserInput>
				<UserInput className='badge bg-primary p-2 d-inline-block' edit={edit} initialValue='Tunisian bar association'></UserInput>
				<p className='mb-0 mt-4'>Countries</p>
				<UserInputSelect
					className='badge bg-primary p-2 d-inline-block'
					edit={edit}
					initialValue='Tunisia'
					options={['Tunisia', 'Poland', 'Greece', 'Germany', 'Russia', 'USA', 'United Kingdom']}></UserInputSelect>
				<hr />
				<h4>Panel informations</h4>
				<h5 className='mb-0 mt-4'>Hourly fee</h5>
				<UserInput className='' edit={edit} initialValue='610€/hour (Negociated)'></UserInput>
				<h5 className='mb-0 mt-4'>Therms & conditions</h5>
				<UserInput className='' edit={edit} initialValue='Monthly 10€ rentainer - see with Jeanny Smith'></UserInput>
				<UserInputFile className=''></UserInputFile>
				<h5 className='mb-0 mt-4'>Services & projects</h5>
				<UserInput className='' edit={edit} initialValue='Corporate M&A and international acquisitions'></UserInput>
				<h5 className='mb-0 mt-4'>Internal correspondants</h5>
				<table>
					<tr>
						<td>
							<UserAvatar size={24} url={photos[3].url}></UserAvatar>
							<span className='ps-1'>{users[3].name}</span>
						</td>
						<td className='px-4'>
							<button className='btn btn-primary btn-sm'>
								<i className='bx bx-message'></i>
								Message
							</button>
						</td>
						<td className='px-4'>
							<button className='btn btn-primary btn-sm'>
								<i className='bx bx-user'></i>
								Profile
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<UserAvatar size={24} url={photos[4].url}></UserAvatar>
							<span className='ps-1'>{users[4].name}</span>
						</td>
						<td className='px-4'>
							<button className='btn btn-primary btn-sm'>
								<i className='bx bx-message'></i>
								Message
							</button>
						</td>
						<td className='px-4'>
							<button className='btn btn-primary btn-sm'>
								<i className='bx bx-user'></i>
								Profile
							</button>
						</td>
					</tr>
				</table>
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

export default UserDescription;
