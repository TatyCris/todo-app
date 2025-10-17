import DeleteButton from "./DeleteButton";

const initialTodos = ["buy groceries", "walk the dog", "do laudry"];
export default function TodoList() {
	return (
		<ul>
			{initialTodos.map((todo) => (
				<li
					key={todo}
					className="flex justify-between items-center border-b border-black/[8%] h-[50px] px-8 cursor-pointer"
				>
					<span>{todo}</span>
					<DeleteButton />
				</li>
			))}
		</ul>
	);
}
