import React from 'react'
import {  CustomerReviewsMain ,ReviewsCards} from './CustomerReview.styles'
import { widgetsToShow } from '../../Data/data'
import CustomerReviewCard from './CustomerReviewCard';

interface ReviewHead{
  name:string,
  subheading:string
}

export interface ICard{
  id:number;
  webImage:string
}
const CustomerReview = () => {
    const customerReviews = widgetsToShow[2]
    const customerReviewsCards = widgetsToShow[2].widgetMappings

    const reviewConheading:ReviewHead = {
      name:customerReviews.name ,
      subheading:customerReviews.subText
    }

    function card(item:any){
      const card:ICard = {
          id:item.integerId,
          webImage:item.webImage
      }
      return (
        <CustomerReviewCard key={card.id} Card = {card}/>
      )
    }


  return (
    <CustomerReviewsMain>
      <h2>{reviewConheading.name}</h2>
      <p>{reviewConheading.subheading}</p>
      <ReviewsCards>
          {
            customerReviewsCards?.map(card)
          }
      </ReviewsCards>
    </CustomerReviewsMain>
  )
}

export default CustomerReview
