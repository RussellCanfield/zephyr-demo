import { ProductCarousel, useProducts } from "@acme/components";

const ProductsOnSale = () => {
	const { productsOnSale } = useProducts();

	return (
		<section>
			<ProductCarousel products={productsOnSale} />
		</section>
	);
};

export default ProductsOnSale;
