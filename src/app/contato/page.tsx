import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { IoNewspaperOutline, IoLogoGithub } from "react-icons/io5";
export default async function SobrePage() {
	return (
		<div className="about-page container mx-auto px-4 py-8">
			<h1 className="text-lg font-semibold mb-2">Contato</h1>
			<p>
				Fique à vontade para entrar em contato! Estou sempre aberto a novas
				oportunidades e colaborações.
			</p>
			<ul className="mt-4 space-y-2">
				<li>
					<span className="flex gap-2">
						<Link
							href="https://www.linkedin.com/in/eduardo-de-paula-xavier-7b3149216/"
							className="hover:underline flex gap-1 items-center"
						>
							<CiLinkedin size={24} />
							Linkedin:
						</Link>
						Conecte-se comigo e acompanhe meu trabalho e conquistas
						profissionais.
					</span>
				</li>
				<li>
					<span className="flex gap-2">
						<Link
							href="https://portfolio-one-nu-61.vercel.app/"
							className="hover:underline flex gap-1 items-center"
						>
							<IoNewspaperOutline size={24} /> Portfólio:
						</Link>
						Explore meu portfólio para ver projetos e experiências que refletem
						minhas habilidades e paixão pelo desenvolvimento.
					</span>
				</li>
				<li>
					<span className="flex gap-2">
						<Link
							href="https://github.com/Eduardo-XavierPaula"
							className="hover:underline flex gap-1 items-center"
						>
							<IoLogoGithub size={24} />
							GitHub:
						</Link>
						Confira meu GitHub para acessar meus repositórios e ver meu código
						em ação.
					</span>
				</li>
			</ul>
		</div>
	);
}
