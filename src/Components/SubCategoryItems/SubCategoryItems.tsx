import React from 'react'
import { Homecon } from '../Home/Home.styles'
import { productsList } from '../../Data/data'
import { useParams } from 'react-router-dom'
import { Bitem } from '../BestSellers/BestSellers'
import { SubCategoryItemsMain } from './SubCategoryItems.styles'
import SubCatItem from './SubCatItem'

const SubCategoryItems = () => {
    const params = useParams()

    const filteredSubCategory = productsList.filter((eachItem) => eachItem.cat_name === params.name?.trim() )
    // console.log(filteredSubCategory.length)
  
    const sub_categories = filteredSubCategory[0]?.subProductList
    // console.log(sub_categories)
  return (
    <Homecon>
    <SubCategoryItemsMain>
            {
                sub_categories?.map((item:any)=>{
                    const bestSelleritem:Bitem  = { 
                        id : item.variantId,
                        itemName:item.merchandiseName,
                        image:item.media.prImage,
                        basePrice:item.basePrice,
                        discountPrice:item.discountedPrice,
                        discountpercentage:item.discountPercentage,
                        available:item.nextAvailableBy,
                        netWeight:item.weightAndPieces.netWeight,
                        pices:item.weightAndPieces.pieces,
                        serves:item.weightAndPieces.serves,
                        unit:item.weightAndPieces.unit
                    }

                    return (
                        <SubCatItem key={bestSelleritem.id} Item = {bestSelleritem}/>
                    )
                    
                    
                })
            }
    </SubCategoryItemsMain>
    </Homecon>
  )
}

export default SubCategoryItems
