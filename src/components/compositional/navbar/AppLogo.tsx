import { FC } from 'react';
import React from 'react';
import logo from './logo.png';

const AppLogo: FC = () => {
	return (
		<div>
			<img src={logo} className='app-logo' alt='LOGO' />
		</div>
	);
};

export default AppLogo;
