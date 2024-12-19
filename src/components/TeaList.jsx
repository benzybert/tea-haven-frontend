import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useCart } from '../context/CartContext';

const TeaList = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const fetchTeas = async () => {
    try {
      const response = await api.get('/teas');
      setTeas(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching teas. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeas();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {teas.map((tea) => (
        <div key={tea._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={tea.image}
            alt={tea.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{tea.name}</h3>
            <p className="text-gray-600 mt-2">{tea.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900 font-bold">${tea.price}</span>
              <button
                onClick={() => addToCart(tea)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeaList;