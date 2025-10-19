import { createContext } from "react";
import type { Todo } from "../lib/types";

export type TTodosContext = {
	loading: boolean;
	error: string | null;
	todos: Todo[];
	totalTodos: number;
	countCompletedTodos: number;
	handleAddTodo: (todoText: string) => void;
	handleToggleTodo: (id: number) => void;
	handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);
