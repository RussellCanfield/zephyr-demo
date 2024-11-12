import { htmlProps } from "@/utils/helmet";
import { Helmet } from "@modern-js/runtime/head";
import { lazy, Suspense } from "react";

const ProductDetails = lazy(() => import("hero/ProductDetails"));

export default () => {
	return (
		<>
			<Helmet htmlAttributes={htmlProps}>
				<title>Products</title>
				<meta name="description" content="Elite T-Shirts - Product Details" />
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
			<div className="bg-white dark:bg-gray-900">
				<Suspense>
					<ProductDetails />
				</Suspense>
			</div>
		</>
	);
};
