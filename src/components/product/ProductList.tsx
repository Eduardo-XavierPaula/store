"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ProductResponse } from "../../types/product-response";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
interface IProductListProps {
	listTitle: string;
	products: ProductResponse;
}

export default function ProductList(props: IProductListProps) {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4 relative">
				<h2 className="text-3xl font-bold mb-8">{props.listTitle}</h2>
				<div className="flex w-full">
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 2500,
								stopOnMouseEnter: true,
								stopOnInteraction: false,
							}),
						]}
						className="w-full static"
					>
						<CarouselContent>
							{props.products.map((product, index) => {
								return (
									<CarouselItem
										key={index}
										className="md:basis-1/2 lg:basis-1/4 flex justify-center"
									>
										<Card key={product.id} className="overflow-hidden w-full">
											<div className="w-full h-60 relative flex">
												<Image
													src={product.image}
													alt={product.title}
													fill={true}
													className="object-contain p-1"
													loading="lazy"
												/>
											</div>
											<CardContent className="p-4">
												<CardTitle className="min-h-8 line-clamp-2">
													{product.title}
												</CardTitle>
												<p className="text-primary font-bold mt-4">
													${product.price.toFixed(2)}
												</p>
											</CardContent>
											<CardFooter className="p-4 pt-0">
												<Button className="w-full" asChild>
													<Link href={"/produto/" + product.id}>Comprar</Link>
												</Button>
											</CardFooter>
										</Card>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						<CarouselPrevious
							className="absolute top-0 right-14"
							style={{ left: "unset", transform: "none" }}
						/>
						<CarouselNext
							className="absolute top-0 right-4"
							style={{ left: "unset", transform: "none" }}
						/>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
