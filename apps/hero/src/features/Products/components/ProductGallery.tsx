import { SuspenseImage } from "@acme/components";
import { useState } from "react";

interface ProductGalleryProps {
	images: string[];
	title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
	images,
	title,
}) => {
	const [selectedImage, setSelectedImage] = useState<string>(images[0]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleImageClick = (image: string) => {
		setSelectedImage(image);
		if (window.innerWidth <= 768) {
			setIsModalOpen(true);
		}
	};

	return (
		<div className="hero-w-full">
			<div className="hero-relative hero-w-full hero-aspect-square hero-mb-4 hero-overflow-hidden hero-rounded-lg hero-bg-gray-100">
				<img
					src={selectedImage}
					alt={title}
					className="hero-absolute hero-w-full hero-h-full hero-object-cover hero-object-center hero-transition-opacity hero-duration-300"
					loading="eager"
				/>
			</div>
			<div className="hero-grid hero-grid-cols-4 hero-gap-2">
				{images.map((image) => (
					<button
						key={image}
						type="button"
						onClick={() => handleImageClick(image)}
						className={`hero-flex hero-items-center hero-justify-center hero-relative hero-aspect-square hero-overflow-hidden hero-rounded-md hero-bg-gray-100
              ${
								selectedImage === image
									? "hero-ring-2 hero-ring-black"
									: "hover:hero-opacity-75"
							}`}
					>
						<SuspenseImage
							src={image}
							alt={title}
							className="hero-w-full hero-h-full hero-object-cover"
						/>
					</button>
				))}
			</div>
			{isModalOpen && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					className="hero-fixed hero-inset-0 hero-z-50 hero-flex hero-items-center hero-justify-center hero-bg-black hero-bg-opacity-75 hero-p-4"
					onClick={() => setIsModalOpen(false)}
				>
					<div className="hero-relative hero-w-full hero-max-w-3xl hero-aspect-square">
						<SuspenseImage
							src={selectedImage}
							alt={title}
							className="hero-absolute hero-w-full hero-h-full hero-object-contain"
						/>
					</div>
				</div>
			)}
		</div>
	);
};
