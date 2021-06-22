import { FC } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const WorkspacesTiles: FC = () => {
	return (
		<div>
			<h1>Workspaces</h1>
			<Link to='/publications'>
				See all workspaces
				<i className='bx bx-right-arrow-alt'></i>
			</Link>
			<div className='workspaces-tiles mt-4'>
				<div className='workspaces-tile'>
					<div className='header-img'></div>
					<div className='header'>
						<div className='icon-box'>
							<i className='bx bx-file'></i>
						</div>
						<h4>Client contract</h4>
					</div>
					<div className='d-flex px-4'>
						<p className='me-4'>
							<i className='bx bx-brain'></i>
							Contract
						</p>
						<p>
							<i className='bx bx-user'></i>
							150 users
						</p>
					</div>
				</div>
				<div className='workspaces-tile'>
					<div className='header-img'></div>
					<div className='header'>
						<div className='icon-box'>
							<i className='bx bx-file'></i>
						</div>
						<h4>Client contract</h4>
					</div>
					<div className='d-flex px-4'>
						<p className='me-4'>
							<i className='bx bx-brain'></i>
							Contract
						</p>
						<p>
							<i className='bx bx-user'></i>
							150 users
						</p>
					</div>
				</div>
				<div className='workspaces-tile'>
					<div className='header-img'></div>
					<div className='header'>
						<div className='icon-box'>
							<i className='bx bx-file'></i>
						</div>
						<h4>Client contract</h4>
					</div>
					<div className='d-flex px-4'>
						<p className='me-4'>
							<i className='bx bx-brain'></i>
							Contract
						</p>
						<p>
							<i className='bx bx-user'></i>
							150 users
						</p>
					</div>
				</div>
				<div className='workspaces-tile'>
					<div className='header-img'></div>
					<div className='header'>
						<div className='icon-box'>
							<i className='bx bx-file'></i>
						</div>
						<h4>Client contract</h4>
					</div>
					<div className='d-flex px-4'>
						<p className='me-4'>
							<i className='bx bx-brain'></i>
							Contract
						</p>
						<p>
							<i className='bx bx-user'></i>
							150 users
						</p>
					</div>
				</div>
				<div className='workspaces-tile'>
					<div className='header-img'></div>
					<div className='header'>
						<div className='icon-box'>
							<i className='bx bx-file'></i>
						</div>
						<h4>Client contract</h4>
					</div>
					<div className='d-flex px-4'>
						<p className='me-4'>
							<i className='bx bx-brain'></i>
							Contract
						</p>
						<p>
							<i className='bx bx-user'></i>
							150 users
						</p>
					</div>
				</div>
				<div className='workspaces-tile'>
					<div className='header-img'></div>
					<div className='header'>
						<div className='icon-box'>
							<i className='bx bx-file'></i>
						</div>
						<h4>Client contract</h4>
					</div>
					<div className='d-flex px-4'>
						<p className='me-4'>
							<i className='bx bx-brain'></i>
							Contract
						</p>
						<p>
							<i className='bx bx-user'></i>
							150 users
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkspacesTiles;
