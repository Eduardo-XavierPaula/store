import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { ProductResponse } from "@/components/types/product-response";
import { getCategories, getCategory } from "@/services/productService";

export default async function EcommercePage() {
	const categories: string[] = await getCategories();

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<Hero />
				{categories.map(async (category) => {
					const products: ProductResponse = await getCategory(category);
					return (
						<ProductList
							key={category}
							listTitle={category}
							products={products}
						/>
					);
				})}
			</main>
			<Footer />
		</div>
	);
}
