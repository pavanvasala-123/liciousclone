import React from 'react'
import { BestSeller, BestSellerItemsCon,  } from './BestSellers.styles'
import { widgetsToShow } from '../../Data/data'
import BestSellerItem from './BestSellerItem'

interface Weightpices {
    netWeight:string,
    pices:string,
    serves:string,
    unit:string
}

export interface Bitem extends Weightpices{
    id:string ,
    image:string,
    itemName:string,
    basePrice:number,
    discountPrice:number,
    discountpercentage:number
    available:string
}

interface BestsellerCon{
    name:string,
    sub_heading:string
}

const BestSellers = () => {
    const bestSellers = widgetsToShow[1]
    const heading:BestsellerCon = {name:bestSellers.name, sub_heading:bestSellers.subText}
    const bestsellerItems = widgetsToShow[1].widgetMappings
   
  return (
   <BestSeller>
        <h2>{heading.name}</h2>
        <p>{heading.sub_heading}</p>
        <BestSellerItemsCon>
            {
                bestsellerItems?.map((item:any)=>{
                    const bestSelleritem:Bitem  = { 
                        id : item.productDetails.variantId ,
                        itemName:item.productDetails.merchandiseName,
                        image:item.productDetails.media.prImage,
                        basePrice:item.productDetails.basePrice,
                        discountPrice:item.productDetails.discountedPrice,
                        discountpercentage:item.productDetails.discountPercentage,
                        available:item.productDetails.nextAvailableBy,
                        netWeight:item.productDetails.weightAndPieces.netWeight,
                        pices:item.productDetails.weightAndPieces.pieces,
                        serves:item.productDetails.weightAndPieces.serves,
                        unit:item.productDetails.weightAndPieces.unit
                    }

                    return (
                        <BestSellerItem key={bestSelleritem.id} Item = {bestSelleritem}/>
                    )
                      
                    
                })
            }
        </BestSellerItemsCon>
   </BestSeller>
  )
}

export default BestSellers
