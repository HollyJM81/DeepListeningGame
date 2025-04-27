import React from "react";

export function QuestionCard() {
	return (
		<div className="bg-white p-4 rounded shadow">
			<h2 className="text-lg font-semibold mb-2">
				What instrument did you hear?
			</h2>
			<div className="space-y-2">
				<button className="block w-full bg-blue-500 text-white p-2 rounded">
					Violin
				</button>
				<button className="block w-full bg-blue-500 text-white p-2 rounded">
					Piano
				</button>
				<button className="block w-full bg-blue-500 text-white p-2 rounded">
					Drums
				</button>
			</div>
		</div>
	);
}
