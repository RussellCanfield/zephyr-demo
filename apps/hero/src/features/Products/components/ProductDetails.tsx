import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductGallery } from "./ProductGallery";
import { useCart, useProducts } from "@acme/components";

const ProductDetails = () => {
	const { products } = useProducts();
	const { addToCart } = useCart();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const product = useMemo(() => {
		return products.find((p) => p.id === id);
	}, [products, id]);

	if (!product) {
		return <></>;
	}

	return (
		<div className="hero-container hero-mx-auto hero-px-4 hero-py-8 hero-text-gray-800 hero-dark:hero-text-gray-200 hero-w-full">
			<div className="hero-mb-6">
				<button
					type="button"
					onClick={() => navigate("/products")}
					className="hero-inline-flex hero-text-lg hero-items-center hero-text-indigo-600 hover:hero-text-indigo-700 dark:hero-text-indigo-400 dark:hover:hero-text-indigo-300"
					aria-label="Back to products"
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="hero-w-5 hero-h-5 hero-mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Back to Products
				</button>
			</div>
			<div className="hero-grid hero-grid-cols-1 md:hero-grid-cols-2 hero-gap-8">
				<ProductGallery images={product.galleryImages} title={product.title} />

				<div className="hero-flex hero-flex-col hero-justify-between">
					<div>
						<h1 className="hero-text-3xl hero-font-bold hero-text-gray-800 dark:hero-text-gray-200 hero-mb-4">
							{product.title}
						</h1>
						<div className="hero-text-2xl hero-font-semibold hero-text-gray-700 dark:hero-text-gray-200 hero-mb-6">
							${product.price.toFixed(2)}
						</div>
						<div className="hero-prose hero-prose-sm hero-text-gray-700 dark:hero-text-gray-100 hero-mb-6">
							Experience unparalleled quality with this meticulously crafted
							product, designed to elevate your daily routine while delivering
							exceptional performance and lasting value.
						</div>
					</div>
					<button
						onClick={() => addToCart(product)}
						type="button"
						className={`
      hero-mt-4 hero-w-full hero-inline-flex hero-items-center hero-justify-center
      hero-px-6 hero-py-3 hero-rounded-lg hero-font-medium hero-text-white
      hero-transition-all hero-duration-200 hero-ease-in-out
      hero-bg-gradient-to-r hero-from-indigo-600 hero-to-purple-600
      hover:hero-from-indigo-700 hover:hero-to-purple-700
      hero-transform hover:hero-scale-102 hover:hero-shadow-lg
      focus:hero-outline-none focus:hero-ring-2 focus:hero-ring-offset-2
      focus:hero-ring-indigo-500 focus:hero-ring-opacity-50
      active:hero-scale-98
      disabled:hero-opacity-50 disabled:hero-cursor-not-allowed
      hero-space-x-2
    `}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
