import React from 'react'
import { CategotyPageHeaderMain } from './CategoryPageHeader.styles'
import { widgetsToShow } from '../../Data/data'
import { useNavigate, useParams } from 'react-router-dom'
import { category, sub_category } from '../CategotyIntefaces/CategotyInterface'
import { Image } from '../Global.styles'
import { catheader } from '../../constants'
import {Homecon} from '../Home/Home.styles'

const CategoryPageHeader = () => {

    const SubcategotyItems  = widgetsToShow[0].widgetMappings as unknown as category[]
   
    const params = useParams()
    const navigate = useNavigate()

    const goToHome = ()=>{
        navigate("/")
    }
  
  
    const filteredSubCategory = SubcategotyItems.filter((item:category) => item.category_details.cat_name.trim() === params.name?.trim())
    // console.log(filteredSubCategory[0].category_details)
  
    const subcategories:sub_category[] = filteredSubCategory[0]?.category_details.sub_categories
   
  return (
    <CategotyPageHeaderMain>
        <Homecon>
               <div className='namebtncon'>
               <p>
                    Home/{params.name}
                </p>
                <button onClick={goToHome}>Home</button>
               </div>
            <h3>{params.name}</h3>
            <Image src={catheader.src} alt={catheader.alt} className='banner-img'/>
        <div className='subCatagories-con'>
        {
            subcategories.map((eachItem:sub_category) => 
                <div className='sub-cat-item' key={eachItem.id}>
                    <img src={eachItem.category_nav_page_img} className='img'/>
                    <p>{eachItem.cat_name}</p>
                </div>
                )
        }
        </div>

        </Homecon>
    </CategotyPageHeaderMain>
   
  )
}

export default CategoryPageHeader

