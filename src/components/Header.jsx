import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	return (
		<header
			className="p-4 flex items-center justify-evenly top-0 sticky z-50"
			style={{ backgroundColor: "#5e5d5d" }}>
			<div className="container mx-auto">
				<h1
					className="text-2xl font-bold text-white cursor-pointer"
					onClick={() => navigate("/")}>
					Movie Rating App
				</h1>
			</div>
			<Link className="text-white no-underline w-20" to="/all-movies">
				All Movies
			</Link>
			<Link className="text-white no-underline w-20" to="/my-queue">
				My Queue
			</Link>
		</header>
	);
}

export default Header;
