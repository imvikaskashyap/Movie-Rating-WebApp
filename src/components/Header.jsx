import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="bg-blue-500 p-4">
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold text-white">Movie Rating App</h1>
				{/* <Link to={"/my-queue"}>My Queue</Link> */}
			</div>
			<NavLink to="/my-queue">My Queue</NavLink>
		</header>
	);
}

export default Header;
