import { FC } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const ResumeWorkFeed: FC = () => {
	return (
		<div>
			<h1>Resume your work</h1>
			<Link to='/feed'>
				See feed
				<i className='bx bx-right-arrow-alt'></i>
			</Link>
			<div className='resume-work-feed mt-4'>
				<div className='resume-work-feed-item'>
					<h4>Title</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, sapiente quia fugiat ducimus veritatis suscipit velit
						doloremque illum enim magnam quae quis cumque incidunt magni vero aliquam beatae totam natus.
					</p>
					<div className='d-flex'>
						<div>
							<i className='bx bx-accessibility'></i>
							Company
						</div>
						<div>
							<i className='bx bx-building'></i>
							Corporate
						</div>
						<div>
							<i className='bx bx-calendar'></i>
							Updated 5 days ago
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeWorkFeed;
