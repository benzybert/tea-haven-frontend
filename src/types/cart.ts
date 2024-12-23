export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  name: string;
  image?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  quantity: number;
}