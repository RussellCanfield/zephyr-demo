import { useSearchParams } from 'react-router-dom';
import ProductSearch from './ProductSearch';
import ProductSearchResults from './ProductSearchResults';
import type { ProductColor, ProductSize } from '@acme/components';

interface ProductsProps {
  className?: string;
}

export const Products: React.FC<ProductsProps> = ({ className = '' }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = ({
    text,
    size,
    color,
  }: {
    text: string;
    size: ProductSize | undefined;
    color: ProductColor | undefined;
  }) => {
    const params = new URLSearchParams();
    if (text) params.set('q', text);
    if (size) params.set('size', size);
    if (color) params.set('color', color);
    setSearchParams(params);
  };

  return (
    <section
      className={`bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 ${className} w-full`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center">
          <ProductSearch
            initialSearch={searchParams.get('q') || ''}
            initialSize={searchParams.get('size') as ProductSize}
            initialColor={searchParams.get('color') as ProductColor}
            onSearch={handleSearch}
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 py-2">
          <ProductSearchResults />
        </div>
      </div>
    </section>
  );
};

export default Products;
