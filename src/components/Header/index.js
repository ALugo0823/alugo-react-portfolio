import React from 'react';
import Nav from '../NavBar';
import './style.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
	return (
		<header className="container-fluid">
			<div className="container d-lg-flex justify-content-lg-between py-3">
				<h1 className="text-center">Abelardo Lugo</h1>
				<Nav
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</header>
	);
};

export default Header;