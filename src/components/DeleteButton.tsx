export default function DeleteButton({ id, handleDeleteTodo }) {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				handleDeleteTodo(id);
			}}
		>
			❌
		</button>
	);
}
