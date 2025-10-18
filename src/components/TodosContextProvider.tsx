import { useState } from "react";
import type { Todo } from "../lib/types";
import { TodosContext, type TTodosContext } from "../contexts/TodosContext";
type Props = {
	children: React.ReactNode;
};

export default function TodosContextProvider({ children }: Props) {
	const [todos, setTodos] = useState<Todo[]>([]);

	const totalTodos = todos.length;
	const countCompletedTodos = todos.filter((todo) => todo.completed).length;

	const handleAddTodo = (todoText: string) => {
		if (todos.length >= 3) {
			alert("You can only have up to 3 todos.");
		} else {
			setTodos((prev) => [
				...prev,
				{
					id: prev.length + 1,
					text: todoText,
					completed: false,
				},
			]);
		}
	};

	const handleToggleTodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleDeleteTodo = (id: number) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const value: TTodosContext = {
		todos,
		totalTodos,
		countCompletedTodos,
		handleAddTodo,
		handleToggleTodo,
		handleDeleteTodo,
	};

	return (
		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
	);
}
