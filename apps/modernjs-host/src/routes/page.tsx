import { Helmet } from "@modern-js/runtime/head";
import "./index.css";
import { lazy, Suspense } from "react";
import { htmlProps } from "@/utils/helmet";

const ProductsOnSale = lazy(() => import("hero/ProductsOnSale"));
const ProductHero = lazy(() => import("hero/ProductHero"));

const ProductHeroSkeleton = () => {
	return (
		<section className="h-[768px] relative" id="product-hero-skeleton">
			<div className="absolute h-[768px] w-full bg-gray-200 animate-pulse">
				<div className="absolute top-1/3 left-0 ml-8 p-2 rounded border border-black/20 bg-black/10">
					<div className="w-64 h-8 bg-gray-300 rounded mb-2" />
					<div className="w-48 h-6 bg-gray-300 rounded" />
				</div>
				<div className="h-full w-full bg-gray-300" />
				<div className="w-[400px] h-[500px] absolute right-0 top-1/4 mr-8 transform -translate-y-1/4 bg-gray-300 rounded" />
			</div>
		</section>
	);
};

const Index = () => (
	<div>
		<Helmet htmlAttributes={htmlProps}>
			<title>Elite T-Shirts</title>
			<meta name="description" content="Elite T-Shirts, the best." />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=5"
			/>
			<link
				rel="icon"
				type="image/x-icon"
				href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
			/>
		</Helmet>
		<Suspense fallback={<ProductHeroSkeleton />}>
			<ProductHero />
		</Suspense>
		<section>
			<Suspense>
				<ProductsOnSale />
			</Suspense>
		</section>
	</div>
);

export default Index;
