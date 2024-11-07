import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import SearchComponent from '../components/SearchComponent'
import CategoryComponent from '../components/CategoryComponent'
import CardComponent from './CardComponent'

const HomeScreen = () => {
  return (
    <div>
        <HeaderComponent />

        <div className='bg-white py-2'>
          <SearchComponent />

          <CategoryComponent/>
        </div>

        <div className='py-4 md:block hidden'>
          <div className='container mx-auto flex flex-col gap-4 py-4 border-gray-300 border-b'>
              <h1 className='text-2xl font-bold text-black'>
                  Unique Landing Page Templates
              </h1>

              <p className='text-blue-500 flex gap-2'>
                Home <p className='text-black'>/</p> Graphics <p className='text-black'>/</p> Web Design <p className='text-black'>/</p> Templates <p className='text-black'>/</p> Unique Landing Page Templates <p className='text-black'>/</p> Page 3
              </p>
          </div>
        </div>
        
        
        <CardComponent/>

        <FooterComponent />
    </div>
  )
}

export default HomeScreen