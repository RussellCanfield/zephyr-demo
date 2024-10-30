import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ProductSize, ProductColor } from '@acme/components';

interface SearchState {
  text: string;
  size?: ProductSize;
  color?: ProductColor;
}

export const useProductSearch = (onSearch: (search: SearchState) => void) => {
  const [searchParams] = useSearchParams();

  const searchState = useMemo(
    () => ({
      text: searchParams.get('q') || '',
      size: (searchParams.get('size') as ProductSize) || undefined,
      color: (searchParams.get('color') as ProductColor) || undefined,
    }),
    [searchParams]
  );

  const handleSearch = useCallback(
    (currentState: SearchState) => {
      onSearch(currentState);
    },
    [onSearch]
  );

  useEffect(() => {
    handleSearch(searchState);
  }, [handleSearch, searchState]);

  return searchState;
};
