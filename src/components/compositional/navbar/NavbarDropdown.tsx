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
	const [linksFilterQuery, setLinksFilterQuery] = useState('');
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
		{
			iconClass: 'file',
			hide: false,
			path: '/publications',
			name: 'Publications',
		},
		{
			iconClass: 'user',
			hide: false,
			path: '/people',
			name: 'People',
		},
		{
			iconClass: 'building',
			hide: false,
			path: '/entities',
			name: 'Entities',
		},
		{
			iconClass: 'trim',
			hide: false,
			path: '/administration',
			name: 'Administration',
		},
		{
			iconClass: 'coin-stack',
			hide: false,
			path: '/client-contract',
			name: 'Client contract',
		},
		{
			iconClass: 'chair',
			hide: false,
			path: '/suplier-contract',
			name: 'Suplier contract',
		},
		{
			iconClass: 'table',
			hide: false,
			path: '/corporate',
			name: 'Corporate',
		},
		{
			iconClass: 'book-alt',
			hide: false,
			path: '/group-norms',
			name: 'Group norms',
		},
		{
			iconClass: 'bone',
			hide: false,
			path: '/real-estate-contracts',
			name: 'Real estate contracts',
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
		<div className='navbar-dropdown'>
			<div
				className='active-link'
				onClick={() => {
					setShow(!show);
				}}>
				<div>
					<i className={`bx bx-${activeLink.iconClass} pe-2`}></i>
					{activeLink.name}
				</div>
				<i className='bx bx-chevron-down'></i>
			</div>
			{show && (
				<div className='navbar-dropdown-links'>
					<div className='filter'>
						<input type='text' value={linksFilterQuery} onChange={(e) => setLinksFilterQuery(e.target.value)} placeholder='Filter...' />
					</div>
					{links
						.filter((l) => l.name.toLowerCase().includes(linksFilterQuery.toLowerCase()))
						.map((link) => (
							<Link
								to={link.path}
								className='navbar-dropdown-link d-block py-2'
								onClick={() => {
									setShow(!show);
								}}>
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
