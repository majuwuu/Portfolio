import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

function Model({ mouse }) {
	const { scene } = useGLTF("/model.glb");
	const ref = useRef();

	useFrame(() => {
		if (ref.current) {
			// Rotación completa 360° basada en posición del mouse
			ref.current.rotation.y = mouse.current.x * Math.PI;
			ref.current.rotation.x = mouse.current.y * Math.PI;
		}
	});

	return <primitive object={scene} ref={ref} scale={1.5} />;
}

export function ModelViewer() {
	const mouse = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2; // -1 a 1
			mouse.current.y = (event.clientY / window.innerHeight - 0.5) * 2; // -1 a 1
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<Canvas camera={{ position: [0, 0, 5] }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} />
				<Model mouse={mouse} />
			</Canvas>
		</div>
	);
}
