import { FC } from 'react';
import React from 'react';

interface Props {
	name: string;
}

const WorkspaceHeader: FC<Props> = ({ name }) => {
	return <div className='w-100 d-flex align-items-center justify-content-center workspace-header'> {name}</div>;
};

export default WorkspaceHeader;
