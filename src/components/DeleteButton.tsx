type Props = {
	id: number;
	handleDeleteTodo: (id: number) => void;
};

export default function DeleteButton({ id, handleDeleteTodo }: Props) {
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
