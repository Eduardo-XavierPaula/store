import Hero from "@/components/Hero";
import ProductList from "@/components/product/ProductList";
import { ProductResponse } from "@/types/product-response";
import { getCategories, getCategory } from "@/services/productService";

export default async function EcommercePage() {
	const categories: string[] = await getCategories();

	return (
		<div className="home-page">
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
		</div>
	);
}
