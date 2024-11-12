import Cart from "@/features/Cart/Cart";
import { htmlProps } from "@/utils/helmet";
import { Helmet } from "@modern-js/runtime/head";

export default () => {
	return (
		<>
			<Helmet htmlAttributes={htmlProps}>
				<title>Elite T-Shirts - Cart</title>
				<meta name="description" content="Elite T-Shirts - Cart" />
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
			<section>
				<Cart />
			</section>
		</>
	);
};
