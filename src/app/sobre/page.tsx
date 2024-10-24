import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
export default async function SobrePage() {
	return (
		<div className="about-page container mx-auto px-4 py-8">
			<h1 className="text-lg font-semibold mb-2">Sobre nós</h1>
			<p className="text-sm">
				A FakeFashionStore é uma loja de demonstração projetada para destacar
				minhas habilidades como desenvolvedor front-end. Utilizando Next.js como
				framework, o projeto integra a API pública da{" "}
				<Link href={"https://fakestoreapi.com"} target="_blank">
					<b>Fake Store API</b>
				</Link>
				, proporcionando uma experiência interativa e moderna. Aqui, você pode
				explorar como o desenvolvimento front-end pode criar interfaces
				dinâmicas e atraentes.
			</p>
			<div className="py-16 flex flex-wrap gap-4 justify-around">
				<SiNextdotjs size={120} />
				<FaHtml5 size={120} />
				<RiTailwindCssFill size={120} />
				<SiTypescript size={120} />
				<TbApi size={120} />
			</div>
		</div>
	);
}
