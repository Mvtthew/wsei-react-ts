import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../store/photosReducer';
import { Post } from '../../store/postsReducer';
import React from 'react';
import { RootState } from '../../store';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const WorkspacesTiles: FC = () => {
	const posts = useSelector<RootState, Post[]>((store) => store.posts);
	const photos = useSelector<RootState, Photo[]>((state) => state.photos);
	const workspaceRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			<h1>Workspaces</h1>
			<Link to='/publications'>
				See all workspaces
				<i className='bx bx-right-arrow-alt'></i>
			</Link>
			<div className='workspaces-tiles mt-4' ref={workspaceRef}>
				{posts.map((p, i) =>
					i > 5 && i < 10 ? (
						<div className='workspaces-tile'>
							<div className='header-img' style={{ backgroundImage: `url(${photos[p.id].url})` }}></div>
							<div className='header'>
								<div className='icon-box'>
									<i className='bx bx-file'></i>
								</div>
								<h4>{p.title.substr(0, 12)}</h4>
							</div>
							<div className='d-flex px-4'>
								<p className='me-4'>
									<i className='bx bx-brain'></i>
									{p.body.split(' ')[0].substr(0, 9)}
								</p>
								<p>
									<i className='bx bx-user'></i>
									{Math.ceil(Math.random() * 500)} users
								</p>
							</div>
						</div>
					) : (
						<></>
					),
				)}
			</div>
			<div className='d-flex w-100'>
				<button
					className='btn btn-sm btn-outline-info  w-100'
					onClick={() => {
						if (workspaceRef.current) {
							workspaceRef.current.scroll({
								left: -400,
								behavior: 'smooth',
							});
						}
					}}>
					<i className='bx bx-caret-left'></i>
				</button>
				<button
					className='btn btn-sm btn-outline-info w-100'
					onClick={() => {
						if (workspaceRef.current) {
							workspaceRef.current.scroll({
								left: 400,
								behavior: 'smooth',
							});
						}
					}}>
					<i className='bx bx-caret-right'></i>
				</button>
			</div>
		</div>
	);
};

export default WorkspacesTiles;
