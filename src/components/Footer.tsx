import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
							utilizando Next.js como framework e consumindo a API publica de
							<Link href={"https://fakestoreapi.com"} target="_blank">
								Fake Store API
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
						<h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
						<ul className="text-sm">
							<li>
								<Link href="#" className="hover:underline">
									Facebook
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Instagram
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Twitter
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full">
						<h3 className="text-lg font-semibold mb-2">Newsletter</h3>
						<p className="text-sm mb-2">
							Subscribe to get special offers and updates.
						</p>
						<form className="flex">
							<Input type="email" placeholder="Your email" className="mr-2" />
							<Button type="submit">Subscribe</Button>
						</form>
					</div>
				</div>
				<div className="mt-8 text-center text-sm">
					<p>&copy; 2023 Eduardo de Paula Xavier. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
