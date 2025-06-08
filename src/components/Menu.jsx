import "./menu.css";
import wordings from "../utils/wordings/menu.json";

export const Menu = () => {
	return (
		<>
			<header className="menu">
				<div className="logo">
					<h1 className="title">{wordings.title}</h1>
					<span className="subtitle">{wordings.subtitle}</span>
				</div>
				<nav className="navigate">
					<li className="nav-items">
						<ul className="home">
							<a href="#home">{wordings.home}</a>
						</ul>
						<ul className="project">
							<a href="#tecnologies">{wordings.tecnologies}</a>
						</ul>
						<ul className="experience">
							<a href="#experience">{wordings.experience}</a>
						</ul>
						<ul className="contact">
							<a href="#contact">{wordings.contact}</a>
						</ul>
					</li>
				</nav>
			</header>
		</>
	);
};
