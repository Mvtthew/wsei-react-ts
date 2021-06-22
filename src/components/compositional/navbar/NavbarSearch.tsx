import { FC } from 'react';
import React from 'react';

const NavbarSearch: FC = () => {
	return (
		<div className='position-relative'>
			<input type='text' className='navbar-search' placeholder='Search' />
			<i className='bx bx-search position-absolute' style={{ right: 15, top: 12 }}></i>
		</div>
	);
};

export default NavbarSearch;
