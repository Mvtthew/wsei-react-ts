import { FC } from 'react';
import React from 'react';

const WorkspaceCards: FC = () => {
	return (
		<div className='row mb-4'>
			<div className='col-4'>
				<div className='card'>
					<div className='card-header'>
						<div className='display-2'>
							<i className='bx bx-building'></i>
						</div>
						Explore your <strong>buildings</strong>
					</div>
					<div className='card-body'>
						<p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nihil illo.</p>
					</div>
				</div>
			</div>
			<div className='col-4'>
				<div className='card'>
					<div className='card-header'>
						<div className='display-2'>
							<i className='bx bx-blanket'></i>
						</div>
						Structure the <strong>blanket</strong>
					</div>
					<div className='card-body'>
						<p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nihil illo blanditiis.</p>
					</div>
				</div>
			</div>
			<div className='col-4'>
				<div className='card'>
					<div className='card-header'>
						<div className='display-2'>
							<i className='bx bx-medal'></i>
						</div>
						Define the <strong>medal</strong>
					</div>
					<div className='card-body'>
						<p className='mb-0'>Accusamus qui tempora consequuntur architecto adipisci, incidunt quo</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceCards;
