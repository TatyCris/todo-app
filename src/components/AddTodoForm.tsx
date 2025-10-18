import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ todos, setTodos }) {
	const [todoText, setTodoText] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setTodos((prev) => [
					...prev,
					{
						id: prev.length + 1,
						text: todoText,
						completed: false,
					},
				]);
				setTodoText("");
			}}
		>
			<h2 className="font-medium text-[#231d15]">Add a todo</h2>
			<input
				type="text"
				className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
				value={todoText}
				onChange={(e) => setTodoText(e.target.value)}
			/>
			<Button>Add to List</Button>
		</form>
	);
}
