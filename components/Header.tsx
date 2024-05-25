import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">HippoToys-</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/path-to-logo.png"
                                alt="HippoToys"
                            />
                        </a>
                    </div>
                    <Navbar />
                    <div className="lg:w-0 lg:flex-1"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
