import Link from 'next/link';
import React from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <nav className="flex space-x-10">
                <Link href="/bestsellers" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Best Sellers
                </Link>
                <a href="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Shop
                </a>
                <a href="/ourstory" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Our Story
                </a>
                <a href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Blog
                </a>
                <a href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
