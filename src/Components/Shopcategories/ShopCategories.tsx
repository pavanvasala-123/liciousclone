import React from 'react'
import { widgetsToShow } from '../../Data/data'
import { CategoryItemsCon,ShopCategoryCon } from './ShopCategories.styles'
import ShopCategoryItem from './ShopCategoryItem'

export interface CatItem {
    id:number
    cat_name:string 
    cat_img:string
}

const ShopCategories = () => {

    const categotyItems = widgetsToShow[0].widgetMappings
   
  return (
    <ShopCategoryCon>
      <div>
        <h2>Shop by categories</h2>
        <p>Fresh meats and much more!</p>
      </div>
      <CategoryItemsCon>
       {
        categotyItems?.map((item:any)=> {
            const temp:CatItem = {
                    id : item.category_details.id,
                    cat_name: item.category_details.cat_name,
                    cat_img : item.category_details.cat_img
            }
            return (
                <ShopCategoryItem key ={temp.id} Item = {temp}/>
            )
        })
       }  
      </CategoryItemsCon>
    </ShopCategoryCon>
  )
}

export default ShopCategories
