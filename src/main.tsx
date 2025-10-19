import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TodosContextProvider from "./components/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<KindeProvider
			clientId="20d223ed28924c8a87f9c77064819c8d"
			domain="https://taty.kinde.com"
			redirectUri="http://localhost:5173"
			logoutUri="http://localhost:5173"
		>
			<TodosContextProvider>
				<App />
			</TodosContextProvider>
		</KindeProvider>
	</StrictMode>
);
