import React from "react";
import { Menu } from "../components/Menu";

import { PrincipalCards } from "../components/PrincipalCards";
import "./home.css";

export const Home = () => {
	return (
		<>
			<Menu />
			<PrincipalCards />
		</>
	);
};
