import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "buy groceries",
			completed: false,
		},
		{
			id: 2,
			text: "walk the dog",
			completed: true,
		},
		{
			id: 3,
			text: "do laudry",
			completed: false,
		},
	]);

	return (
		<ul>
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex justify-between items-center border-b border-black/[8%] h-[50px] px-8 cursor-pointer"
					onClick={() => {
						setTodos(
							todos.map((t) =>
								t.id === todo.id ? { ...t, completed: !t.completed } : t
							)
						);
					}}
				>
					<span
						className={`${todo.completed ? "line-through text-[#ccc]" : ""}`}
					>
						{todo.text}
					</span>
					<DeleteButton id={todo.id} setTodos={setTodos} />
				</li>
			))}
		</ul>
	);
}
