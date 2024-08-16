import React from 'react'
import { Bitem } from './BestSellers'
import { BestSellerItemCon, ImageCon ,Itemdescription } from './BestSellers.styles'
import {Image} from '../Global.styles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../AppStore/cartSlice'

interface BItem {
    Item : Bitem
}

export interface Icartpayload{
  id:string;
  itemName:string;
  netWeight:string;
  unit:string;
  basePrice:number;
  discountedPrice:number
  pices?:number
}

const BestSellerItem:React.FC<BItem> = (props) => {

  const dispatch = useDispatch()

  const handleCart = (item:Bitem) =>{
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


    const {Item} = props
    // console.log(Item)
  return (
    <BestSellerItemCon>
      <ImageCon>
        <Image src={Item.image} alt ={Item.itemName} width={"100%"} />
        <button className='cardbutton' onClick={() => handleCart(Item)}>+</button>
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
        <p><Image src='https://www.licious.in/image/expressDelivery.svg' alt='express delivery'/>{Item.available}</p>
      </Itemdescription>
    </BestSellerItemCon>
  )
}

export default BestSellerItem
