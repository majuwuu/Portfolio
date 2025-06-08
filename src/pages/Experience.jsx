import React from "react";
import "./experience.css";
import { ModelViewer } from "../components/ModelViewer";

import { first, second, third } from "../utils/wordings/experience.json";

export const Experience = () => {
	return (
		<section className="experience-page id" id="experience">
			<div className="experience-div">
				<h2 className="title-exp">My experience</h2>
				<ModelViewer />
			</div>

			<div className="timeline">
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="content">
						<h2 className="company">{third.company}</h2>
						<p className="date">{third.date}</p>
						<p className="descr">{third.description}</p>
						<p className="descr">{third.role}</p>
						<p className="descr">{third.tecnologies}</p>
					</div>
				</div>

				<div className="timeline2-item">
					<div className="content">
						<h2 className="company">{second.company}</h2>
						<p className="date">{second.date}</p>
						<p className="descr">{second.description}</p>
						<p className="descr">{second.role}</p>
						<p className="descr">{second.tecnologies}</p>
					</div>
				</div>
				<div className="timeline-item">
					<div className="content">
						<h2 className="company">{first.company}</h2>
						<p className="date">{first.date}</p>
						<p className="descr">{first.description}</p>
						<p className="descr">{first.role}</p>
						<p className="descr">{first.tecnologies}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
