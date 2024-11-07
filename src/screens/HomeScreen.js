import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import SearchComponent from '../components/SearchComponent'
import CategoryComponent from '../components/CategoryComponent'

const HomeScreen = () => {
  return (
    <div>
        <HeaderComponent />

        <div className='bg-white py-2'>
          <SearchComponent />

          <CategoryComponent/>
        </div>

        <h1>
            Home Screen
        </h1>

        <FooterComponent />
    </div>
  )
}

export default HomeScreen