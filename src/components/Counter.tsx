import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

export default function Counter() {
	const context = useContext(TodosContext);
	if (!context) return null;
	const { countCompletedTodos, totalTodos } = context;

	return (
		<p>
			<b>{countCompletedTodos}</b> / {totalTodos} todos completed
		</p>
	);
}
