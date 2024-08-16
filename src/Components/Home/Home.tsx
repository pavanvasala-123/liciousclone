import React from 'react'
import Banner from '../Banner/Banner'
import { Homecon } from './Home.styles'
import ShopCategories from '../Shopcategories/ShopCategories'
import BestSeller from '../BestSellers/BestSellers'
import CustomerReview from '../CustomerReview/CustomerReview'
const Home = () => {
  return (
    <Homecon>
      <Banner/>
      <ShopCategories/>
      <BestSeller/>
      <CustomerReview/>
    </Homecon>
  )
}

export default Home
