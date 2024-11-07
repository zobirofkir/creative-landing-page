import React from 'react';

const CategoryComponent = () => {
  return (
    <div className='md:block hidden'>
        <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
        {/* Main Category Links */}
        <div className="flex flex-wrap gap-4 mb-4 lg:mb-0">
            {[
            'Fonts',
            'Images',
            '3D Crafts',
            'Crafts',
            'Needlework',
            'Photos',
            'Tools',
            'POD',
            'Bundles',
            'Learn',
            'Studio',
            'Subscription',
            ].map((category, index) => (
            <h1
                key={index}
                className="text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
                {category}
            </h1>
            ))}
        </div>

        {/* Additional Links */}
        <div className="flex flex-row gap-4">
            {['Freebies', 'Gifts'].map((item, index) => (
            <h1
                key={index}
                className="text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
                {item}
            </h1>
            ))}
        </div>
        </div>
    </div>
  );
};

export default CategoryComponent;
