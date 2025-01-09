import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ROUTES } from '../constants/routes';
import Button from '../components/common/Button';

const CartItem = ({ id, name, price, quantity, imageUrl, removeFromCart, updateQuantity }) => (
  <div className="flex items-center py-5 border-b">
    <img 
      src={imageUrl} 
      alt={name} 
      className="h-24 w-24 object-cover rounded"
    />
    <div className="flex-1 ml-4">
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">${price} per 100g</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center border rounded">
        <button
          onClick={() => updateQuantity(id, quantity - 1)}
          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
        >
          -
        </button>
        <span className="px-3 py-1 text-gray-600">{quantity}</span>
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium text-gray-900">
          ${(price * quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  </div>
);

const EmptyCart = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
    <p className="text-gray-500 mb-8">Add some delicious teas to your cart!</p>
    <Link to={ROUTES.PRODUCTS}>
      <Button>Browse Products</Button>
    </Link>
  </div>
);

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          {items.map(item => (
            <CartItem
              key={item.id}
              {...item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
        
        <div className="bg-gray-50 p-6">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium text-gray-900">Total</p>
            <p className="text-2xl font-bold text-gray-900">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="mt-6">
            <Button className="w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 