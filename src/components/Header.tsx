import Counter from "./Counter";
import Logo from "./Logo";

type Props = {
	totalTodos: number;
	countCompletedTodos: number;
};

export default function Header({ totalTodos, countCompletedTodos }: Props) {
	return (
		<header className=" flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
			<Logo />
			<Counter
				totalTodos={totalTodos}
				countCompletedTodos={countCompletedTodos}
			/>
		</header>
	);
}
