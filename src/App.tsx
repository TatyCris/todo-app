import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className="flex justify-center items-center font-sans bg-[#f1d4b3] h-dvh flex-col">
			<BackgroundHeading />

			<main className="relative w-[972px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[636px] bg-[#fff] rounded-[8px] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
				<Header />
				<TodoList />
				<Sidebar />
			</main>
			<Footer />
		</div>
	);
}

export default App;
