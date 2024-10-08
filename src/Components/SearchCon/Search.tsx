import React from 'react'
import ShopCategories from '../Shopcategories/ShopCategories'
import { Homecon } from '../Home/Home.styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../AppStore/appStore'


const Search = () => {
  const filteredItems = useSelector((state:RootState)=>state.filtereditems.fitems)
  for(let item of filteredItems){
    console.log(item)
  }

  return (
    <>
      <Homecon>
        <ShopCategories/>
      </Homecon>
      <div>
        {/* {
          filteredItems.map((item)=>
            <>
            <Itemcard key={item.id}>
              <Image src={item.image} alt={item.itemName}/>
              <DescriptionCon>
                  <p>{item.itemName}</p>
              </DescriptionCon>
            </Itemcard>
        </>
          
          )
          
        } */}
      </div>
    </>
  )
}

export default Search
