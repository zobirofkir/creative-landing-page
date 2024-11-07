import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import SearchComponent from '../components/SearchComponent'

const HomeScreen = () => {
  return (
    <div>
        <HeaderComponent />

        <SearchComponent />

        <h1>
            Home Screen
        </h1>

        <FooterComponent />
    </div>
  )
}

export default HomeScreen