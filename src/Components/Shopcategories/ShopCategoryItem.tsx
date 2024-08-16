import React from 'react'
import { CategoryItem } from './ShopCategories.styles'
import { CatItem } from './ShopCategories'
import { Image } from '../Global.styles'
import { useNavigate } from 'react-router-dom'

interface CItem {
    Item: CatItem
}

const ShopCategoryItem:React.FC<CItem> = (props) => {
  const navigate = useNavigate()
  const shopCategory = (cat_name:string) =>{
    navigate(`subcategory/${cat_name}`)
    // console.log(cat_name)
  }
   const {Item} = props
  return (
    <CategoryItem onClick={()=>{shopCategory(Item.cat_name)}}>
      <Image src={Item.cat_img} alt= {Item.cat_name}/>
      <p>{Item.cat_name}</p>
    </CategoryItem>
  )
}

export default ShopCategoryItem
