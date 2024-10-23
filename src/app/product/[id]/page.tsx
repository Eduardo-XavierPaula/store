import { getProductById } from "@/services/productService";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
interface IProductProps {
	params: { id: string };
}

export default async function Page(props: IProductProps) {
	const product = await getProductById(props.params.id);
	if (!product) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid md:grid-cols-2 gap-8">
				<div className="relative aspect-square">
					<Image
						src={product.image}
						alt={product.title}
						layout="fill"
						objectFit="contain"
						className="rounded-lg"
						priority
					/>
				</div>
				<div className="flex flex-col">
					<div>
						<h1 className="text-3xl font-bold mb-2">{product.title}</h1>
						<p className="text-xl font-semibold text-primary mb-4">
							${product.price.toFixed(2)}
						</p>
						<div className="bg-muted p-4 rounded-lg mb-6">
							<h2 className="text-lg font-semibold mb-2">Description</h2>
							<p className="text-muted-foreground">{product.description}</p>
						</div>
						<div className="mb-6">
							<h2 className="text-lg font-semibold mb-2">Category</h2>
							<p className="text-muted-foreground">{product.category}</p>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button className="flex-1 min-h-10" size="lg">
							Add to Cart
						</Button>
						<Button variant="outline" className="flex-1 min-h-10" size="lg">
							Add to Wishlist
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
