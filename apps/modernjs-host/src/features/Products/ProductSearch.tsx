import React, { useCallback } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ProductSize, ProductColor } from "@acme/components";
import { useSearchParams } from "react-router-dom";

interface ProductSearchProps {
	initialSearch?: string;
	initialSize?: ProductSize;
	initialColor?: ProductColor;
	onSearch: (search: {
		text: string;
		size: ProductSize | undefined;
		color: ProductColor | undefined;
	}) => void;
}

const ProductSearch = ({
	initialSearch = "",
	initialSize,
	initialColor,
	onSearch,
}: ProductSearchProps) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const searchText = searchParams.get("q") || initialSearch;
	const searchSize = (searchParams.get("size") as ProductSize) || initialSize;
	const searchColor =
		(searchParams.get("color") as ProductColor) || initialColor;

	const updateSearchParams = useCallback(
		(text?: string, size?: ProductSize, color?: ProductColor) => {
			const newParams = new URLSearchParams(searchParams);

			if (text !== undefined) {
				if (text) {
					newParams.set("q", text);
				} else {
					newParams.delete("q");
				}
			}

			if (size !== undefined) {
				if (size) {
					newParams.set("size", size);
				} else {
					newParams.delete("size");
				}
			}

			if (color !== undefined) {
				if (color) {
					newParams.set("color", color);
				} else {
					newParams.delete("color");
				}
			}

			setSearchParams(newParams);
			onSearch({
				text: text ?? searchText,
				size: size ?? searchSize,
				color: color ?? searchColor,
			});
		},
		[
			searchParams,
			setSearchParams,
			onSearch,
			searchText,
			searchSize,
			searchColor,
		],
	);

	return (
		<div className="container mx-auto p-4 text-black dark:text-white">
			<div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="relative">
						<label htmlFor="product-search" className="sr-only">
							Search Products
						</label>
						<input
							id="product-search"
							type="text"
							className="p-2 rounded text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
							placeholder="Search Products"
							value={searchText}
							onChange={(e) =>
								updateSearchParams(e.target.value, undefined, undefined)
							}
						/>
						<MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" />
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="size-select"
							className="mb-1 text-sm font-medium sr-only"
						>
							Size
						</label>
						<select
							id="size-select"
							className="p-2 rounded text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
							value={searchSize || ""}
							onChange={(e) =>
								updateSearchParams(
									undefined,
									e.target.value as ProductSize,
									undefined,
								)
							}
						>
							<option value="">Select Size</option>
							{Object.values(ProductSize).map((size) => (
								<option key={size} value={size}>
									{size}
								</option>
							))}
						</select>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="color-select"
							className="mb-1 text-sm font-medium sr-only"
						>
							Color
						</label>
						<select
							id="color-select"
							className="p-2 rounded text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
							value={searchColor || ""}
							onChange={(e) =>
								updateSearchParams(
									undefined,
									undefined,
									e.target.value as ProductColor,
								)
							}
						>
							<option value="">Select Color</option>
							{Object.values(ProductColor).map((color) => (
								<option key={color} value={color}>
									{color}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSearch;
