import { FC } from 'react';
import React from 'react';
import ResumeWorkFeed from '../components/resumework/ResumeWorkFeed';
import UserCard from '../components/user/UserCard';
import WorkspaceCards from '../components/workspaces/WorkspaceCards';
import WorkspaceHeader from '../components/workspaces/WorkspaceHeader';

const WorkspaceScreen: FC = () => {
	return (
		<div className='d-flex'>
			<div className='left-bar'>
				<UserCard />
			</div>
			<div className='content ps-5'>
				<WorkspaceHeader name='Workspace'></WorkspaceHeader>
				<WorkspaceCards></WorkspaceCards>
				<ResumeWorkFeed></ResumeWorkFeed>
			</div>
		</div>
	);
};

export default WorkspaceScreen;
