import React from 'react'
import { BestSellerItemCon,ImageCon ,Itemdescription} from './SubCategoryItems.styles'
import { Image } from '../Global.styles'
import { Bitem } from '../BestSellers/BestSellers'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../AppStore/cartSlice'
import { Icartpayload } from '../BestSellers/BestSellerItem'

interface BItem {
    Item : Bitem
}

const SubCatItem:React.FC<BItem> = (props) => {
  const {Item} = props
  const dispatch = useDispatch()

    const handleCart = (item:Bitem)=>{
      const cartPayload:Icartpayload = {
        id : item.id,
        itemName:item.itemName,
        netWeight:item.netWeight,
        unit:item.unit,
        basePrice:item.basePrice,
        discountedPrice:item.discountPrice
      
      }
      dispatch(addToCart(cartPayload))
    }

    
  return (
    <BestSellerItemCon>
      <ImageCon>
        <Image src={Item.image} alt ={Item.itemName} className='image'/>
      </ImageCon>
      <Itemdescription>
       <div className='heading'><h4>{Item.itemName}</h4></div>
        <div className='item-weight-con'>
          <span>{Item.netWeight?Item.netWeight:Item.pices + " "} {Item.unit ? Item.unit + " " : " pices "}|</span> 
          {Item.itemName !== "Farm Fresh Classic Eggs - Pack of 6"? <span>{Item.pices + " pices "} |</span>:"" }
          <span>serves {Item.serves}</span>
        </div>
        <div className='price-con'>
          <span>{Item.basePrice}</span>
          <span className='price'>₹{Item.discountPrice}</span>
          <span className='percent'>{Item.discountpercentage}%</span>
        </div>
      <div className='button-con'>
        <p><Image src='https://www.licious.in/image/expressDelivery.svg' alt='express delivery'/>{Item.available}</p>
        <button onClick={()=> handleCart(Item)}>Add+</button>
      </div>
      </Itemdescription>
    </BestSellerItemCon>
  )
}

export default SubCatItem
