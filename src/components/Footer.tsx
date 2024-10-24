import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiLinkedin } from "react-icons/ci";
import { IoNewspaperOutline, IoLogoGithub } from "react-icons/io5";

export default function Footer() {
	return (
		<footer className="bg-muted mt-12 py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="w-full mb-4 md:mb-0">
						<h3 className="text-lg font-semibold mb-2">Sobre nós</h3>
						<p className="text-sm">
							FakeFashionStore é uma loja de de demonstração com o intuito de
							mostrar minhas habilidades como desenvolvedor Front-end,
							utilizando Next.js como framework e consumindo a API publica de{" "}
							<Link href={"https://fakestoreapi.com"} target="_blank">
								<b>Fake Store API</b>
							</Link>
							.
						</p>
					</div>
					<div className="w-full mb-4 md:mb-0">
						<h3 className="text-lg font-semibold mb-2">Customer Service</h3>
						<ul className="text-sm">
							<li>
								<Link href="/faq" className="hover:underline">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/returns" className="hover:underline">
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link href="/shipping" className="hover:underline">
									Shipping Information
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full mb-4 md:mb-0">
						<h3 className="text-lg font-semibold mb-2">Contato</h3>
						<ul className="text-sm">
							<li>
								<Link
									href="https://www.linkedin.com/in/eduardo-de-paula-xavier-7b3149216/"
									className="hover:underline flex gap-1 items-center"
								>
									<CiLinkedin size={16} />
									Linkedin
								</Link>
							</li>
							<li>
								<Link
									href="https://portfolio-one-nu-61.vercel.app/"
									className="hover:underline flex gap-1 items-center"
								>
									<IoNewspaperOutline size={16} /> Portfólio
								</Link>
							</li>
							<li>
								<Link
									href="https://github.com/Eduardo-XavierPaula"
									className="hover:underline flex gap-1 items-center"
								>
									<IoLogoGithub size={16} />
									GitHub
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full">
						<h3 className="text-lg font-semibold mb-2">Newsletter</h3>
						<p className="text-sm mb-2">
							Inscreva-se para receber ofertas e novidades.
						</p>
						<form className="flex">
							<Input
								type="email"
								placeholder="Digite seu e-mail"
								className="mr-2"
							/>
							<Button type="submit">Inscrever-se</Button>
						</form>
					</div>
				</div>
				<div className="mt-8 text-center text-sm">
					<p>&copy; 2024 Eduardo de Paula Xavier. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
