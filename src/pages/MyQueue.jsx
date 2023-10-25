import React from "react";
import { useSelector } from "react-redux";
import QueueCard from "../components/QueueCard";

function MyQueue() {
	const queue = useSelector((state) => state.handleQueue.queue);
	console.log(queue);

	return (
		<div>
			<h1 class="mb-4 text-3xl text-center  mt-12 mb-12 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span className="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
					My Queue
				</span>
			</h1>
			<div className="flex flex-wrap justify-center px-2">
				{queue.map((upc) => (
					<QueueCard key={upc.id} movie={upc} />
				))}
			</div>
		</div>
	);
}

export default MyQueue;
