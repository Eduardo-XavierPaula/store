import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
	return (
		<header className="border-b">
			<div className="container mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
				<Link href="/" className="text-2xl font-bold">
					FakeFashionStore
				</Link>
				<nav className="hidden md:flex justify-center items-center col-span-2 space-x-4">
					<Link href="/" className="text-foreground hover:text-primary">
						Home
					</Link>
					<Link href="/products" className="text-foreground hover:text-primary">
						Produtos
					</Link>
					<Link href="/about" className="text-foreground hover:text-primary">
						Sobre
					</Link>
					<Link href="/contact" className="text-foreground hover:text-primary">
						Contato
					</Link>
				</nav>
				<div className="flex items-center justify-end  gap-2">
					<Input
						type="search"
						placeholder="Pesquisar..."
						className="hidden xl:block max-w-96 w-3/4"
					/>
					<Button variant="ghost" className="p-1 w-8 h-8">
						<Search className="h-5 w-5" />
						<span className="sr-only">Search</span>
					</Button>
					<Button variant="ghost" className="p-1 w-8 h-8">
						<User className="h-5 w-5" />
						<span className="sr-only">Account</span>
					</Button>
					<Button variant="ghost" className="p-1 w-8 h-8">
						<ShoppingCart className="h-5 w-5" />
						<span className="sr-only">Cart</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
