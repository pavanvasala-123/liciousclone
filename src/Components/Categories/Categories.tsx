import React from 'react'
import { CategoriesCon,CatItemCon } from './Categories.styles'
import { widgetsToShow } from '../../Data/data'
import { CatItem } from '../Shopcategories/ShopCategories'
import CloseIcon from '@mui/icons-material/Close';

import { Image } from '../Global.styles'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const categotyItems = widgetsToShow[0].widgetMappings
  const navigate = useNavigate()
  const shopCategory = (cat_name:string) =>{
    navigate(`subcategory/${cat_name}`)
    // console.log(cat_name)
  }
  return (
    <CategoriesCon >
     <CloseIcon className='close-icon'/>
       {
         categotyItems?.map((item:any)=> {
            const temp:CatItem = {
                    id : item.category_details.id,
                    cat_name: item.category_details.cat_name,
                    cat_img : item.category_details.cat_img
            }
            return (
                  <CatItemCon onClick={()=>{shopCategory(temp.cat_name)}} key={temp.id}>
                    <Image src={temp.cat_img} alt={temp.cat_name} className="catimage"/>
                    <p>{temp.cat_name}</p>
                  </CatItemCon>
            )
        })
       }  
    </CategoriesCon>
  )
}

export default Categories
