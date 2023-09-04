import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Resume from './Resume';
import './style.css';

const Page = ({ currentPage }) => {
	const renderPage = (page) => {
		switch (page) {
			case 'Portfolio':
				return <Portfolio />;
			case 'ContactMe':
				return <ContactMe />;
			case 'Resume':
				return <Resume />;
			default:
				return <About />;
		}
	};
	return (
		<section className="container py-4">
			<h2 className="mb-3">{currentPage}</h2>
			{renderPage(currentPage)}
		</section>
	);
};

export default Page;