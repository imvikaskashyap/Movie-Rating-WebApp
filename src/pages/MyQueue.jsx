import React from "react";
import { useSelector } from "react-redux";
import Moviecard from "../components/Moviecard";

function MyQueue() {
	const queue = useSelector((state) => state.handleQueue.queue);
	console.log(queue);

	return (
		<div>
			<h2 className="text-white">My Queue</h2>
			{queue.map((upc) => (
				<Moviecard key={upc.id} movie={upc} />
			))}
		</div>
	);
}

export default MyQueue;
