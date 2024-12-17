import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <Link to="/" className="flex items-center py-4">
                            <span className="font-semibold text-gray-500 text-lg">Tea Haven</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/products" className="py-2 px-3 text-gray-500 hover:text-green-500">Products</Link>
                        <Link to="/cart" className="py-2 px-3 text-gray-500 hover:text-green-500">Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;