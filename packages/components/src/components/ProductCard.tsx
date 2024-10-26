import type { FC, PropsWithChildren } from 'react';
import type { Product } from '../types/Products';
import { formatAsCurrency } from '@acme/utils';

export type ProductCardProps = {
  product: Product;
  width?: string;
} & PropsWithChildren;

export const ProductCard: FC<ProductCardProps> = ({
  product,
  children,
  width = '300px',
}) => {
  return (
    <div
      className={
        'flex flex-col justify-between p-6 h-[450px] rounded-xl text-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1'
      }
      style={{ width }}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold truncate text-gray-800">
          {product.title}
        </h3>
      </div>
      <img
        src={product.imgUrl}
        alt={product.title}
        className="w-full h-56 object-contain my-4"
      />
      <div className="flex flex-col gap-3 mt-auto">
        <p className="text-2xl font-bold text-gray-700 text-center">
          {formatAsCurrency(product.price)}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
