import AppLogo from './AppLogo';
import { FC } from 'react';
import IconButton from '../buttons/IconButton';
import NavbarDropdown from './NavbarDropdown';
import NavbarSearch from './NavbarSearch';
import React from 'react';

const Navbar: FC = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light shadow'>
			<div className='container d-flex justify-content-between'>
				<AppLogo />
				<NavbarDropdown />
				<NavbarSearch />
				<div className='d-flex'>
					<IconButton iconClass='home' className='me-2' />
					<IconButton iconClass='home' className='me-2' />
					<IconButton iconClass='home' />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
