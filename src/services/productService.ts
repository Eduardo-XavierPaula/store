import { ProductResponse } from "@/components/types/product-response";
import { IProduct } from "@/interface/product.interface";

export async function getProducts(): Promise<ProductResponse> {
	const res = await fetch("https://fakestoreapi.com/products");
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	return res.json();
}
export async function getProductById(id: string): Promise<IProduct | null> {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);

	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}

	try {
		const product: IProduct = await res.json(); // Await here
		return product;
	} catch (error) {
		console.error("Error parsing JSON:", error);
		return null;
	}
}

export async function getCategories(): Promise<[string]> {
	const res = await fetch(`https://fakestoreapi.com/products/categories`);
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	return res.json();
}
export async function getCategory(category: string): Promise<ProductResponse> {
	const res = await fetch(
		`https://fakestoreapi.com/products/category/${category}`
	);
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	return res.json();
}
