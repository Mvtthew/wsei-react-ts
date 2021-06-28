import React, { FC } from 'react';

import LatestPublications from '../components/publications/LatestPublications';
import { Link } from 'react-router-dom';
import ResumeWorkFeed from '../components/resumework/ResumeWorkFeed';
import UserCard from '../components/user/UserCard';
import WorkspacesTiles from '../components/workspaces/WorkspacesTiles';

const HomeScreen: FC = () => {
	return (
		<div className='d-flex'>
			<div className='left-bar'>
				<UserCard />
			</div>
			<div className='content ps-5'>
				<LatestPublications />
				<div className='pt-5'></div>
				<WorkspacesTiles />
				<div className='pt-5'></div>
				<ResumeWorkFeed />
			</div>
		</div>
	);
};

export default HomeScreen;
