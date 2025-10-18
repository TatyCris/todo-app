type Props = {
	id: number;
	onDeleteTodo: (id: number) => void;
};

export default function DeleteButton({ id, onDeleteTodo }: Props) {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				onDeleteTodo(id);
			}}
		>
			❌
		</button>
	);
}
