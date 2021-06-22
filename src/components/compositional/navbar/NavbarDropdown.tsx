import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';
import { useState } from 'react';

interface DropdownLink {
	iconClass: string;
	name: string;
	path: string;
	hide: boolean;
}

const NavbarDropdown: FC = () => {
	const [show, setShow] = useState(false);
	const [activeLink, setActiveLink] = useState<DropdownLink>({
		hide: false,
		iconClass: 'home',
		name: '404',
		path: '/',
	});
	const location = useLocation();

	const links: DropdownLink[] = [
		{
			iconClass: 'home',
			hide: false,
			path: '/',
			name: 'Home',
		},
	];

	const getActiveLink = () => {
		return (
			links.filter((l) => l.path === location.pathname)[0] || {
				hide: false,
				iconClass: 'home',
				name: '404',
				path: '/',
			}
		);
	};

	useEffect(() => {
		setActiveLink(getActiveLink());
	}, [location.pathname]);

	return (
		<div
			className='navbar-dropdown'
			onClick={() => {
				setShow(!show);
			}}>
			<div className='active-link'>
				<div>
					<i className={`bx bx-${activeLink.iconClass} pe-2`}></i>
					{activeLink.name}
				</div>
				<i className='bx bx-chevron-down'></i>
			</div>
			{show && (
				<div className='navbar-dropdown-links'>
					{links.map((link) => (
						<Link to={link.path} className='navbar-dropdown-link'>
							<i className={`bx bx-${link.iconClass} pe-2`}></i>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default NavbarDropdown;
