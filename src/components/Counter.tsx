export default function Counter({ todos }) {
	return (
		<p>
			<b>{todos.filter((todo) => todo.completed).length}</b> / {todos.length}{" "}
			todos completed
		</p>
	);
}
