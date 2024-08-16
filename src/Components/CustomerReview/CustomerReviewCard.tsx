import React from 'react'

import { ICard } from './CustomerReview'
import { Image } from '../Global.styles'

interface card{
  Card:ICard
}

const CustomerReviewCard:React.FC<card> = (props) => {
  const {Card} = props
  return (
    // <CustomerReviewCardCon>

    // </CustomerReviewCardCon>
    <Image src={Card.webImage} alt="reviewCard" className='reviewCard'/>
  )
}

export default CustomerReviewCard
