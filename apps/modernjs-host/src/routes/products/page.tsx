import Products from "@/features/Products/Products";
import { htmlProps } from "@/utils/helmet";
import { Helmet } from "@modern-js/runtime/head";

export default () => {
	return (
		<>
			<Helmet htmlAttributes={htmlProps}>
				<title>Products</title>
				<meta name="description" content="Elite T-Shirts - Products." />
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
			<Products />
		</>
	);
};
