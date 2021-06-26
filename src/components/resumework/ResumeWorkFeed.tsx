import { useSelector, useStore } from 'react-redux';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../store/postsReducer';
import React from 'react';
import { RootState } from '../../store';
import { User } from '../../store/usersReducer';
import moment from 'moment';
import { useState } from 'react';

const ResumeWorkFeed: FC = () => {
	const posts = useSelector<RootState, Post[]>((store) => store.posts);
	const users = useSelector<RootState, User[]>((store) => store.users.users);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	const pageSize = 10;

	return (
		<div>
			<div className='d-flex justify-content-between'>
				<div>
					<h1>Resume your work</h1>
					<Link to='/feed'>
						See feed
						<i className='bx bx-right-arrow-alt'></i>
					</Link>
				</div>
				<div className='text-end'>
					<input type='text' placeholder='Filter...' className='form-control' value={search} onChange={(e) => setSearch(e.target.value)} />
				</div>
			</div>
			<div className='resume-work-feed mt-4'>
				{posts
					.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
					.map((p, i) =>
						i < page * pageSize && i > (page - 1) * pageSize ? (
							<div className='resume-work-feed-item mb-3'>
								<h4>{p.title}</h4>
								<p>{p.body}</p>
								<div className='d-flex'>
									<div>
										<i className='bx bx-accessibility'></i>
										{users[p.id % 10].name}
									</div>
									<div className='ms-3'>
										<i className='bx bx-building'></i>
										{users[p.id % 10].company.name}
									</div>
									<div className='ms-3'>
										<i className='bx bx-calendar'></i>
										Updated{' '}
										{moment()
											.subtract(Math.ceil(Math.random() * 30), 'day')
											.fromNow()}
									</div>
								</div>
							</div>
						) : (
							<></>
						),
					)}
			</div>
			{posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())).length > 0 && (
				<nav>
					<ul className='pagination'>
						{posts.map((p, i) =>
							i * pageSize <= posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())).length ? (
								<li className={'page-item ' + (i + 1 === page ? 'active' : '')}>
									<a className='page-link' onClick={() => setPage(i + 1)}>
										{i + 1}
									</a>
								</li>
							) : null,
						)}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default ResumeWorkFeed;
