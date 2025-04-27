import { useState } from "react";
import { questions } from "./data/questions";
import React from "react";

export default function App() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [favorites, setFavorites] = useState<number[]>(
		JSON.parse(localStorage.getItem("favorites") || "[]")
	);

	const question = questions[currentQuestionIndex];

	function handleFavorite(id: number) {
		if (!favorites.includes(id)) {
			const updatedFavorites = [...favorites, id];
			setFavorites(updatedFavorites);
			localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
		}
	}

	function nextQuestion() {
		const randomIndex = Math.floor(Math.random() * questions.length);
		setCurrentQuestionIndex(randomIndex);
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
			<div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 space-y-4">
				<audio controls src={question.audioUrl} className="w-full" />

				<div className="text-lg font-semibold">{question.question}</div>

				<div className="grid grid-cols-2 gap-4">
					{question.options.map((option) => (
						<button
							key={option}
							className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded"
						>
							{option}
						</button>
					))}
				</div>

				<div className="flex justify-between mt-4">
					<button
						onClick={() => handleFavorite(question.id)}
						className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
					>
						Favorite ❤️
					</button>

					<a
						href={question.moreLink}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
					>
						Listen to More
					</a>
				</div>

				<button
					onClick={nextQuestion}
					className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
				>
					Next Track
				</button>
			</div>
		</div>
	);
}
