import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="bg-muted py-12 md:py-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold mb-4">
							Summer Collection
						</h1>
						<p className="text-xl mb-6">
							Discover our latest styles for the season.
						</p>
						<Button size="lg">Shop Now</Button>
					</div>
					<div className="md:w-1/2 relative h-96 w-full">
						<Image
							src={"/banner/modelo.jpg"}
							alt="modelo"
							title="modelo"
							fill={true}
							className="rounded-lg shadow-lg object-cover"
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
