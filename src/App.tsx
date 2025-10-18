import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
	const [todos, setTodos] = useState([]);

	const handleAddTodo = (todoText) => {
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

	const handleToggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleDeleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	return (
		<div className="flex justify-center items-center font-sans bg-[#f1d4b3] h-dvh flex-col">
			<BackgroundHeading />

			<main className="relative w-[972px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[636px] bg-[#fff] rounded-[8px] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
				<Header todos={todos} setTodos={setTodos} />
				<TodoList
					todos={todos}
					handleToggleTodo={handleToggleTodo}
					handleDeleteTodo={handleDeleteTodo}
				/>
				<Sidebar handleAddTodo={handleAddTodo} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
