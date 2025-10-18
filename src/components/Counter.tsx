import { useTodosContext } from "../lib/hooks";

export default function Counter() {
	const { countCompletedTodos, totalTodos } = useTodosContext();

	return (
		<p>
			<b>{countCompletedTodos}</b> / {totalTodos} todos completed
		</p>
	);
}
