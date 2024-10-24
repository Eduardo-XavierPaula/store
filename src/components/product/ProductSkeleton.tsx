import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid md:grid-cols-2 gap-8">
				<Skeleton className="aspect-square w-full" />
				<div className="flex flex-col gap-4">
					<div className="space-y-2">
						<Skeleton className="h-10 w-3/4" />
						<Skeleton className="h-6 w-1/4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-2/3" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-10 w-full" />
						<Skeleton className="h-10 w-full" />
					</div>
				</div>
			</div>
		</div>
	);
}
