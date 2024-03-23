import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/elements/Navbar";

const Home = lazy(() => import("./pages/Home"));

function App() {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Suspense>
	);
}

export default App;
