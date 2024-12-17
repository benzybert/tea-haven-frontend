import React from 'react';

const TeaProductCard = ({ tea }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={tea.image} alt={tea.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                <p className="text-gray-600 mb-4">{tea.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${tea.price}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeaProductCard;