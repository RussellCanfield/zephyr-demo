import { SuspenseImage } from "@acme/components";
import type { FC } from "react";

const ProductHero: FC<{ label?: string }> = ({ label }) => {
	return (
		<section
			className="hero-h-[768px] hero-relative hero-w-full"
			id="product-hero"
		>
			<div className="hero-absolute hero-h-[768px] hero-w-full">
				<div className="hero-absolute hero-top-1/3 hero-left-0 hero-ml-8 hero-text-2xl hero-text-white hero-p-2 hero-rounded hero-border hero-border-black/20 hero-bg-black/50">
					<p>The only shirt you'll ever need.</p>
					<p className="hero-text-lg">
						Unless, you know, it isn't.
						{label ?? ""}
					</p>
				</div>
				<SuspenseImage
					src="./assets/NatureHero.png"
					alt="Nature"
					className="hero-h-full hero-w-full hero-object-cover"
				/>
				<SuspenseImage
					src="./assets/WhiteShirt.png"
					alt="White T-shirt"
					className="hero-w-[400px] hero-h-auto hero-absolute hero-right-0 hero-top-1/4 hero-mr-8 hero-transform -hero-translate-y-1/4"
				/>
			</div>
		</section>
	);
};

export default ProductHero;
