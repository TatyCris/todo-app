import DeleteButton from "./DeleteButton";

export default function TodoList({ todos, setTodos }) {
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
