import React from 'react';

const CardComponent = () => {

    const cardsData = Array(12).fill({
    title: 'Real Estate Landing Page',
    description: 'In Landing Page Templates ...',
    price: '$4.00',
    imageUrl:
      'https://www.creativefabrica.com/wp-content/uploads/2024/05/07/Real-Estate-Landing-Page-Graphics-97076015-1-580x368.jpg',
  });

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 px-4">
      {cardsData.map((card, index) => (
        <div key={index} className="rounded-lg shadow-lg overflow-hidden border border-gray-300">
          <img
            className="w-full h-48 object-cover"
            src={card.imageUrl}
            alt={card.title}
          />
            <div className="flex justify-end px-4 mt-2 items-center">
              <i className="fa-solid fa-circle-check text-[#2ec27e] text-lg"></i>
            </div>

            <div className='px-4 py-4'>
                <h1 className="text-lg font-semibold text-gray-800">{card.title}</h1>
            </div>  

          <div className="px-4 flex justify-between w-full items-center mb-4">
            <p className="text-sm text-gray-600">{card.description}</p>
            <p className="text-xl font-bold text-gray-900">{card.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
