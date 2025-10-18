export default function DeleteButton({ setTodos, id }) {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				setTodos((prev) => prev.filter((todo) => todo.id !== id));
			}}
		>
			❌
		</button>
	);
}
