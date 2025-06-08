// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Impo
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaGitAlt,
	FaGithub,
	FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiJest, SiTailwindcss } from "react-icons/si";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../pages/tecnologies.css";

export const Tecnologies = () => {
	return (
		<section id="tecnologies" className="tecnologiesPage">
			<h3 className="TecnologieTile">Tecnologies</h3>

			<Swiper
				spaceBetween={50}
				slidesPerView={5}
				modules={[Navigation, Autoplay]}
				loop={true}
				navigation={true}
				autoplay={{ delay: 2500 }}>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaHtml5 size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">HTML</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaCss3Alt size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">CSS</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaJs size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">JavaScript</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaReact size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">React</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<SiTypescript size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">Typescript</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<SiRedux size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">Redux</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaGitAlt size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">Git</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaGithub size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">Github</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<SiJest size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">Jest</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<FaNodeJs size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">NodeJs</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContent">
						<div className="cardSlider">
							<SiTailwindcss size="5rem" color="#a272b9" />
							<h5 className="iconSubtitle">TailwindCss</h5>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
