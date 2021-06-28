import { FC } from 'react';
import { Photo } from '../../store/photosReducer';
import { Post } from '../../store/postsReducer';
import React from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';

interface Props {
	toggleFullscreen: () => void;
}

const EntitiesGridList: FC<Props> = ({ toggleFullscreen }) => {
	const [showAsList, setShowAsList] = useState(false);
	const posts = useSelector<RootState, Post[]>((store) => store.posts);
	const photos = useSelector<RootState, Photo[]>((store) => store.photos);

	return (
		<div className='row'>
			<div className='d-flex justify-content-between'>
				<h2>Entities</h2>
				<div>
					<button className='btn btn-sm btn-info me-2'>
						<i
							className='bx bx-fullscreen'
							onClick={() => {
								toggleFullscreen();
							}}></i>
					</button>
					<button
						className='btn btn-sm btn-primary'
						onClick={() => {
							setShowAsList(!showAsList);
						}}>
						{showAsList ? 'List' : 'Grid'}
						<i className={'bx ms-2 ' + (showAsList ? 'bx-list-ul' : 'bx-grid')}></i>
					</button>
				</div>
			</div>
			{posts.map((p) => (
				<div className={(showAsList ? 'col-12' : 'col-3') + ' entities-item'}>
					<div className='d-flex align-content-between'>
						<div className='photo' style={{ backgroundImage: `url(${photos[p.id].url})` }}></div>
						<div className='text-end w-100'>
							<p className='mb-1'>{p.title.substr(0, 12)}</p>
							<small>{p.body.substr(0, 12)}</small>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default EntitiesGridList;
