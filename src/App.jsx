import "./App.css";
import { Home } from "./pages/Home.jsx";
// import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { Tecnologies } from "./pages/Tecnologies.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Loader } from "./components/Loader.jsx";
import { useEffect, useState } from "react";

export const App = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<Home />
			<Tecnologies />
			{/* <ProjectsPage /> */}
			<Experience />
			<Contact />
			<Footer />
		</>
	);
};
