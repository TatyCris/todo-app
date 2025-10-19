import { useEffect, useState } from "react";
import type { Todo } from "../lib/types";
import { TodosContext, type TTodosContext } from "../contexts/TodosContext";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type Props = {
	children: React.ReactNode;
};

const getInitialTodos = () => {
	const storedTodos = localStorage.getItem("todos");
	if (storedTodos) {
		return JSON.parse(storedTodos);
	} else {
		return [];
	}
};

export default function TodosContextProvider({ children }: Props) {
	const { isAuthenticated } = useKindeAuth();

	// state
	const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	// derived state
	const totalTodos = todos.length;
	const countCompletedTodos = todos.filter((todo) => todo.completed).length;

	// event handlers / actions
	const handleAddTodo = (todoText: string) => {
		if (todos.length >= 5 && !isAuthenticated) {
			alert("You can only have up to 5 todos.");
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

	// side effects
	// useEffect(() => {
	// 	const fetchTodos = async () => {
	// 		setLoading(true);
	// 		try {
	// 			const response = await fetch(
	// 				"https://bytegrad.com/course-assets/api/todos"
	// 			);
	// 			const data = await response.json();
	// 			setTodos(data);
	// 		} catch (error) {
	// 			console.error("Error fetching todos:", error);
	// 			setError("Failed to fetch todos.");
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	fetchTodos();
	// }, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// context value
	const value: TTodosContext = {
		loading,
		error,
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
