import React from 'react';

const SearchComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between py-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800 whitespace-nowrap mx-4">Creative Fabrica</h1>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none w-[1000px]"
          />
          <button className="text-white px-4 flex items-center">
            <i className="fa-solid fa-magnifying-glass text-black"></i>
          </button>
        </div>


        <div className="flex space-x-4 items-center">

        <i class="fa-solid fa-globe ml-4"></i>

          <button className="text-gray-600 font-medium hover:text-blue-500 transition">
            Login
          </button>
          <button className="text-gray-600 font-medium hover:text-blue-500 transition border-purple-500 border px-4 py-2 whitespace-nowrap rounded-lg">
            Sign up
          </button>
          <button className="bg-gradient-to-t from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
          <i class="fa-solid fa-camera text-white"></i>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
