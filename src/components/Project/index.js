import React from 'react';
import './style.css';

const Project = ({ project }) => {
	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={require(`${project.name}`)}
					className=""
					alt={(project.name)}
				/>
				<div className="card-img-overlay d-flex flex-column justify-content-center project-info">
					<h3 className="card-title">
						<a href={project.link} className="card-text me-3">
							{(project.name)}
						</a>
						<a href={project.repo} className="card-text">
							<i className="fab fa-github"></i>
						</a>
					</h3>
					<p className="card-text">{project.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Project;
