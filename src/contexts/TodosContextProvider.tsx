import { createContext, useState } from "react";
import type { Todo } from "../lib/types";

type Props = {
	children: React.ReactNode;
};

type TTodosContext = {
	todos: Todo[];
	totalTodos: number;
	countCompletedTodos: number;
	handleAddTodo: (todoText: string) => void;
	handleToggleTodo: (id: number) => void;
	handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

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

	return (
		<TodosContext.Provider
			value={{
				todos,
				totalTodos,
				countCompletedTodos,
				handleAddTodo,
				handleToggleTodo,
				handleDeleteTodo,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
}
