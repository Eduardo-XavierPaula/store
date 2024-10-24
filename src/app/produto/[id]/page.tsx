"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProductById } from "@/services/productService";
import { IProduct } from "@/interface/product.interface";
import { Minus, Plus } from "lucide-react";
import { ProductSkeleton } from "@/components/product/ProductSkeleton";

export default function ProductPage({ params }: { params: { id: string } }) {
	const [product, setProduct] = useState<IProduct | null>(null);
	const [quantity, setQuantity] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = async () => {
			const fetchedProduct = await getProductById(params.id);
			if (!fetchedProduct) {
				notFound();
			}
			setProduct(fetchedProduct);
			setIsLoading(false);
		};
		fetchProduct();
	}, [params.id]);

	if (isLoading) {
		return <ProductSkeleton />;
	}

	if (!product) {
		notFound();
	}

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setQuantity(isNaN(value) || value < 1 ? 1 : value);
	};

	const incrementQuantity = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrementQuantity = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const totalPrice = (product.price * quantity).toFixed(2);

	return (
		<div className="product-page container mx-auto px-4 py-8">
			<div className="grid md:grid-cols-2 gap-8">
				<div className="relative aspect-square">
					<Image
						src={product.image}
						alt={product.title}
						fill
						className="rounded-lg object-contain"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority
					/>
				</div>
				<div className="flex flex-col">
					<div>
						<h1 className="text-3xl font-bold mb-2">{product.title}</h1>
						<div className="bg-muted p-4 rounded-lg mb-6">
							<h2 className="text-lg font-semibold mb-2">Descrição</h2>
							<p className="text-muted-foreground">{product.description}</p>
						</div>
						<div className="mb-6">
							<h2 className="text-lg font-semibold mb-2">Categoria</h2>
							<p className="text-muted-foreground">{product.category}</p>
						</div>
						<p className="text-xl font-semibold text-primary mb-4">
							${totalPrice}
							{quantity > 1 && (
								<span className="text-sm text-muted-foreground ml-2">
									(${product.price.toFixed(2)} cada)
								</span>
							)}
						</p>
						<div className="flex items-center gap-4 mb-6">
							<label htmlFor="quantity" className="font-medium">
								Quantidade:
							</label>
							<div className="flex items-center">
								<Button
									variant="outline"
									size="icon"
									onClick={decrementQuantity}
									className="rounded-r-none"
								>
									<Minus className="h-4 w-4" />
								</Button>
								<Input
									id="quantity"
									type="number"
									min="1"
									value={quantity}
									onChange={handleQuantityChange}
									className="w-16 text-center rounded-none z-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
								/>
								<Button
									variant="outline"
									size="icon"
									onClick={incrementQuantity}
									className="rounded-l-none"
								>
									<Plus className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button className="flex-1" size="lg">
							Comprar
						</Button>
						<Button variant="outline" className="flex-1" size="lg">
							Adicionar a lista de desejos
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
