import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const EmptyCart: React.FC = () => {
	const [buttonText] = useState("Continue shopping");
	return (
		<div className="flex items-center justify-center min-h-72">
			<div className="max-w-2xl w-full flex flex-col items-center">
				<ShoppingCartIcon className="w-16 h-16 text-gray-400 mb-4" />
				<div className="text-center">Your cart is empty</div>
				<p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
					Looks like you haven't added any items to your cart yet.
				</p>
				<div className="flex justify-center">
					<Link
						to="/products"
						className="bg-blue-500 dark:bg-blue-700 text-white dark:text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center"
					>
						<ShoppingCartIcon className="w-5 h-5 mr-2" />
						{buttonText}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EmptyCart;
