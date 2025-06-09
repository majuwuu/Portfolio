import { useRef, useEffect } from "react";
import "./principalCard.css";
import home from "../utils/wordings/home.json";

export const PrincipalCards = () => {
	const buttonRef = useRef(null);
	const kitty1Ref = useRef(null);
	const kitty2Ref = useRef(null);

	useEffect(() => {
		const handleMouseEnter = () => {
			if (kitty1Ref.current && kitty2Ref.current) {
				kitty1Ref.current.style.opacity = "0";
				kitty2Ref.current.style.opacity = "1";
			}
		};

		const handleMouseLeave = () => {
			if (kitty1Ref.current && kitty2Ref.current) {
				kitty1Ref.current.style.opacity = "1";
				kitty2Ref.current.style.opacity = "0";
			}
		};

		const button = buttonRef.current;
		if (button) {
			button.addEventListener("mouseenter", handleMouseEnter);
			button.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (button) {
				button.removeEventListener("mouseenter", handleMouseEnter);
				button.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	return (
		<main id="home" className="container">
			<div className="card">
				<section className="presentation">
					<span className="salute">Hi!, I'm</span>
					<h1 className="presentationTitle">{home.Presentation}</h1>
					<p className="description">{home.description}</p>
					<button
						ref={buttonRef}
						className="check-work"
						onClick={() => {
							const section = document.getElementById("tecnologies");
							section?.scrollIntoView({ behavior: "smooth" });
						}}>
						{home.check}
					</button>
				</section>
				<section className="image">
					<img
						ref={kitty1Ref}
						className="kitty1"
						src="/img/kitty1.png"
						alt="gato tricolor sonriendo"
						style={{ opacity: "1" }}
					/>
					<img
						ref={kitty2Ref}
						className="kitty2"
						src="/img/kitty2.png"
						alt="gato tricolor feliz"
						style={{ opacity: "0" }}
					/>
				</section>
			</div>
		</main>
	);
};
