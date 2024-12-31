import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tea, Star, Clock, Thermometer } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Teas' },
  { id: 'green', name: 'Green Tea' },
  { id: 'black', name: 'Black Tea' },
  { id: 'oolong', name: 'Oolong Tea' },
  { id: 'white', name: 'White Tea' },
  { id: 'herbal', name: 'Herbal Tea' },
  { id: 'rooibos', name: 'Rooibos' }
];

// Sample data - replace with your API call
const sampleProducts = [
  {
    id: 1,
    name: 'Sencha Green Tea',
    category: 'green',
    description: 'Premium Japanese green tea with a sweet, grassy flavor.',
    price: 24.99,
    origin: 'Japan',
    steepTime: '2-3 minutes',
    temperature: '160°F',
    rating: 4.5,
    imageUrl: '/api/placeholder/300/200'
  },
  {
    id: 2,
    name: 'Earl Grey Supreme',
    category: 'black',
    description: 'Classic black tea with bergamot oil and blue cornflowers.',
    price: 19.99,
    origin: 'India',
    steepTime: '4-5 minutes',
    temperature: '200°F',
    rating: 4.8,
    imageUrl: '/api/placeholder/300/200'
  },
  // Add more sample products as needed
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tea Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-green-600 font-medium">${product.price}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Tea className="w-4 h-4 mr-1" />
                  <span>{product.origin}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{product.steepTime}</span>
                </div>
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4 mr-1" />
                  <span>{product.temperature}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                Add to Cart
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;