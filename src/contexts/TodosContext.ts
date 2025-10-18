import { createContext } from "react";
import type { Todo } from "../lib/types";

export type TTodosContext = {
	todos: Todo[];
	totalTodos: number;
	countCompletedTodos: number;
	handleAddTodo: (todoText: string) => void;
	handleToggleTodo: (id: number) => void;
	handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);
