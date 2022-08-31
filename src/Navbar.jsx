import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef();
	const linksRef = useRef();

	useEffect(() => {
		// console.log(linksRef.current.clientHeight)
		const linksHeight = linksRef.current.clientHeight;
		let linksContainerEl = linksContainerRef.current;
		if (showLinks) {
			linksContainerEl.style.height = `${linksHeight}px`;
		} else {
			linksContainerEl.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="coding-addict" />
					<button
						className="nav-toggle"
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{links.map(({ id, url, text }) => {
							return (
								// without react-router-dom
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="social-icons">
					{social.map(({ id, url, icon }) => {
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
