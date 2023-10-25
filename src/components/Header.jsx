import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header
			className="p-4 flex items-center justify-evenly position-sticky "
			style={{ backgroundColor: "#5e5d5d" }}>
			<div className="container mx-auto ">
				<h1 className="text-2xl font-bold text-white">
					<NavLink to={"/"}>Movie Rating App</NavLink>
				</h1>
			</div>
			<NavLink className="text-white" to="/all-movies">
				All Movies
			</NavLink>
			<NavLink className="text-white" to="/my-queue">
				My Queue
			</NavLink>
		</header>
	);
}

export default Header;
