import React from 'react';

interface Product {
    id: number;
    name: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Hiatal Health',
        image: '/path-to-image/hiatal_health.png',
    },
    {
        id: 2,
        name: 'Emotional Ease',
        image: '/path-to-image/emotional_ease.png',
    },
    {
        id: 3,
        name: 'Lady Biz',
        image: '/path-to-image/lady_biz.png',
    },
];

const Bestsellers: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
                <h1 className="text-3xl font-bold text-center">Bestsellers</h1>
                <div className="flex justify-between items-center mt-6 bg-white">
                    <div className="flex items-center space-x-2 ">
                        <span className="text-sm font-medium text-gray-500">SORT BY</span>
                        <select className="text-sm font-medium text-gray-500 border-none">
                            <option value="best_selling">Best selling</option>
                            <option value="price_asc">Price, low to high</option>
                            <option value="price_desc">Price, high to low</option>
                        </select>
                    </div>
                    <div className="text-sm font-medium text-gray-500">5 products</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                                className="h-48 w-full object-cover"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bestsellers;
