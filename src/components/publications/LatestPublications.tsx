import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../store/photosReducer';
import { Post } from '../../store/postsReducer';
import React from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const LatestPublications: FC = () => {
	const posts = useSelector<RootState, Post[]>((store) => store.posts);
	const photos = useSelector<RootState, Photo[]>((state) => state.photos);

	return (
		<div>
			<h1>Latest publications</h1>
			<Link to='/publications'>
				See all publications
				<i className='bx bx-right-arrow-alt'></i>
			</Link>

			<div className='d-flex latest-publications mt-4'>
				{posts.map((p, i) =>
					i < 1 ? (
						<div className='w-50' style={{ height: 250 }}>
							<img src={photos[p.id].url} height={250} alt='' style={{ width: '100%', objectFit: 'cover' }} />
						</div>
					) : (
						<></>
					),
				)}

				<div className='w-50 d-flex flex-column ps-1 latest-publications-list' style={{ height: 250 }}>
					{posts.map((p, i) =>
						i > 1 && i < 5 ? (
							<div
								className='h-100 latest-publication'
								style={{
									backgroundImage: `url(${photos[p.id].url})`,
								}}>
								<p>{p.title}</p>
							</div>
						) : (
							<></>
						),
					)}
				</div>
			</div>
		</div>
	);
};

export default LatestPublications;
