type Props = {
	totalTodos: number;
	countCompletedTodos: number;
};

export default function Counter({ totalTodos, countCompletedTodos }: Props) {
	return (
		<p>
			<b>{countCompletedTodos}</b> / {totalTodos} todos completed
		</p>
	);
}
