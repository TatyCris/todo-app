export default function LoadingDots() {
	return (
		<div className="flex space-x-2 justify-center items-center bg-white h-full dark:invert">
			<div className="h-5 w-5 bg-black/[40%] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
			<div className="h-5 w-5 bg-black/[30%] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
			<div className="h-5 w-5 bg-black/[20%] rounded-full animate-bounce"></div>
		</div>
	);
}
