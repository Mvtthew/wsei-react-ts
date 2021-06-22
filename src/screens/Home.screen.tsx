import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import UserCard from '../components/user/UserCard';

const HomeScreen: FC = () => {
	return (
		<div className='d-flex'>
			<div className='left-bar'>
				<UserCard />
				<div className='px-4 mx-4 mt-5'>
					<Link to='/publications' className='d-flex justify-content-between'>
						<div>
							<i className='bx bx-area me-2'></i>
							Publications
						</div>
						<i className='bx bx-plus'></i>
					</Link>
					<Link to='/ecosystem' className='d-flex justify-content-between'>
						<div>
							<i className='bx bx-book-add me-2'></i>
							Ecosystem
						</div>
						<i className='bx bx-plus'></i>
					</Link>
					<Link to='/entities' className='d-flex justify-content-between'>
						<div>
							<i className='bx bx-bone me-2'></i>
							Entities
						</div>
						<i className='bx bx-plus'></i>
					</Link>
				</div>
			</div>
			<div className='content'></div>
		</div>
	);
};

export default HomeScreen;
