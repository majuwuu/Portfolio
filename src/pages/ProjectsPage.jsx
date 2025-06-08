// import "./project.css";
// import React from "react";
// import { useState } from "react";

// const projects = [
// 	{
// 		id: 1,
// 		name: "USA Congress",
// 		description: "about the project about the projectabout the project ",
// 		tech: "React, Javascript, HTML, CSS, SCSS",
// 		link: "my project.com",
// 	},
// 	{
// 		id: 2,
// 		name: "3D Pokedex",
// 		description: "about the project about the projectabout the project ",
// 		tech: "React, Javascript, HTML, CSS, SCSS",
// 		link: "my project.com",
// 	},
// 	{
// 		id: 3,
// 		name: "project3",
// 		description: "about the project about the projectabout the project ",
// 		tech: "React, Javascript, HTML, CSS, SCSS",
// 		link: "my project.com",
// 	},
// ];

// export const ProjectsPage = () => {
// 	const [hovered, setHovered] = useState(null);

// 	return (
// 		<>
// 			<section className="projects-page">
// 				<h2 className="myProjcts">My projects</h2>
// 				<div className="projectsContainer">
// 					{projects.map((project, index) => (
// 						<div
// 							key={project.id}
// 							className={`projectCard ${
// 								hovered === project.id ? "hovered" : ""
// 							}`}
// 							style={{
// 								top: `${index * -6}rem`,
// 								left: `${index * 6 + 40}rem`,
// 								zIndex: hovered === project.id ? 3 : 3 - index,
// 							}}
// 							onMouseEnter={() => setHovered(project.id)}
// 							onMouseLeave={() => setHovered(null)}>
// 							<div className="cardDivision">
// 								<h3 className="projectName">{project.name}</h3>
// 								<p className="projectDesc">{project.description}</p>
// 								<p className="projectTech">
// 									<strong>Tech:</strong> {project.tech}
// 								</p>
// 								<a
// 									href={project.link}
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="projectTech">
// 									{project.link}
// 								</a>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 		</>
// 	);
// };
