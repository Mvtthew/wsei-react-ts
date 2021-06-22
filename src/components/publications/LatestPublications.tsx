import { FC } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const LatestPublications: FC = () => {
	return (
		<div>
			<h1>Latest publications</h1>
			<Link to='/publications'>
				See all publications
				<i className='bx bx-right-arrow-alt'></i>
			</Link>

			<div className='d-flex latest-publications mt-4'>
				<div className='w-50' style={{ height: 250 }}>
					<img
						src='https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg'
						height={250}
						style={{ width: '100%', objectFit: 'cover' }}
					/>
				</div>
				<div className='w-50 d-flex flex-column ps-1 latest-publications-list' style={{ height: 250 }}>
					<div
						className='h-100 latest-publication'
						style={{
							backgroundImage:
								'url(https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg)',
						}}>
						<p>Lorem ipsum dolor sit amet, adipisicing elit.</p>
					</div>
					<div
						className='h-100 latest-publication my-1'
						style={{
							backgroundImage:
								'url(https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg)',
						}}>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
					<div
						className='h-100 latest-publication'
						style={{
							backgroundImage:
								'url(https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg)',
						}}>
						<p>Lorem ipsum dolor elit.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestPublications;
