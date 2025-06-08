import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "./contact.css";

export const Contact = () => {
	return (
		<section className="contactPage" id="contact">
			<h3 className="titleContactPage">Contact</h3>
			<div className="contactPageContainer">
				<div className="contact-card">
					<a
						href="https://www.linkedin.com/in/majo-zelaya-ab8973206/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn Profile">
						<FaLinkedin size="5rem" color="#a272b9" />
						<h6 className="contact-sub">Linkedin</h6>
					</a>
				</div>
				<div className="contact-card">
					<a
						href="https://github.com/Majuwuu"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Github Profile">
						<FaGithub size="5rem" color="#a272b9" />
						<h6 className="contact-sub">Github</h6>
					</a>
				</div>
				<div className="contact-card">
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=majozelaya00@gmail.com&su=Contacto"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Enviar correo a majozelaya00@gmail.com">
						<BiLogoGmail size="5rem" color="#a272b9" />
						<h6 className="contact-sub"> Gmail</h6>
					</a>
				</div>
			</div>
		</section>
	);
};
