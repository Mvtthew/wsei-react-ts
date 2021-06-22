import { FC } from 'react';
import React from 'react';

interface Props {
	url: string;
	size: number;
}

const UserAvatar: FC<Props> = ({ size, url }) => {
	return <img src={url} alt={url} width={size} height={size} className='user-avatar' />;
};

export default UserAvatar;
