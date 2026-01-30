import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocomotive } from "./hooks/useLocomotive";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/Projects";

function App() {
	useLocomotive();

	return (
		<ThemeProvider>
			<Router>
				<div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
					<Header />
					<Routes>
						<Route
							path="/"
							element={
								<main data-scroll-container>
									<Hero />
									<About />
									<LeetCode />
									<Projects />
									<Contact />
								</main>
							}
						/>
						<Route path="/projects" element={<ProjectsPage />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
