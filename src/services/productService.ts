import { ProductResponse } from "@/components/types/product-response";

export async function getProducts(): Promise<ProductResponse> {
	const res = await fetch("https://fakestoreapi.com/products");
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	return res.json();
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
