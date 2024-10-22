export function checkImages(images: string[]): string[] {
	if (Array.isArray(images) && typeof images[0] === "string") {
		// Check if the first element is a stringified array
		if (images[0].startsWith("[") && images[images.length - 1].endsWith("]")) {
			try {
				// Join the array elements and parse as JSON
				const joinedString = images.join(",");
				images = JSON.parse(joinedString);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				console.warn(
					`Warning: Could not parse images JSON. Using original array. Error: ${error.message}`
				);
			}
		}
		// Remove any remaining quotes from individual URLs
		images = images.map((url) => url.replace(/^"|"$/g, ""));
	}
	return images;
}
