export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  numReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}