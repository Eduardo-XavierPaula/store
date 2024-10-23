import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="min-h-[calc(100vh-349px)] bg-background flex items-center justify-center">
			<div className="max-w-md w-full px-4 py-8 bg-card rounded-lg shadow-lg text-center">
				<h1 className="text-4xl font-bold mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
				<p className="text-muted-foreground mb-8">
					Oops! A página que você está tentando acessar não foi encontrada.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button asChild>
						<Link href="/">Ir para Página inicial</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/products">Browse Products</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
