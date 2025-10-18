import type { Todo } from "../App";
import DeleteButton from "./DeleteButton";

type Props = {
	todos: Todo[];
	handleToggleTodo: (id: number) => void;
	handleDeleteTodo: (id: number) => void;
};

export default function TodoList({
	todos,
	handleToggleTodo,
	handleDeleteTodo,
}: Props) {
	return (
		<ul>
			{todos.length === 0 && (
				<li className="flex justify-center items-center h-full font-semibold">
					Start by ading a todo
				</li>
			)}
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex justify-between items-center border-b border-black/[8%] h-[50px] px-8 cursor-pointer"
					onClick={() => handleToggleTodo(todo.id)}
				>
					<span
						className={`${todo.completed ? "line-through text-[#ccc]" : ""}`}
					>
						{todo.text}
					</span>
					<DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
				</li>
			))}
		</ul>
	);
}
