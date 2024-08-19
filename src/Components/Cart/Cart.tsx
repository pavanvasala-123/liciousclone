import React, { useEffect } from 'react'
import { ModelWrapper,CartCon } from './Cart.styles'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector} from 'react-redux'
import { showCart } from '../../AppStore/ShowCartSlice'
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addToCart, decreaseQunatity, ICart, ItemTotal, removeItem, TotalCartItems } from '../../AppStore/cartSlice';
import { RootState } from '../../AppStore/appStore';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const cartItems = useSelector((state:RootState)=> state.cart.cart)
    const cartTotal = useSelector((state:RootState) => state.cart.total_price)
    
    

    useEffect(()=>{
        dispatch(ItemTotal())
        dispatch(TotalCartItems())
    },[cartItems,cartTotal])

    const handleCkeckout = ()=>{
      navigate("/address")
      dispatch(showCart(false))

    }

  return (
    <>
     <ModelWrapper>

     </ModelWrapper>
     
     <CartCon>
     <HighlightOffIcon onClick={()=>dispatch(showCart(false))} className='cancel-button'/>
     {cartItems.length >= 1 &&<h3>Order Summary</h3>}
     {
        cartItems.length > 0 ? cartItems.map((eachItem:ICart)=>
          <div className='cart-item-con' key ={eachItem.id}>
          <div className='cart-item-heading-con'>
            <p>{eachItem.itemName}</p>
            <CloseIcon className='romove-icon' onClick={()=>dispatch(removeItem(eachItem))}/>
           
          </div>
          <div className='item-quantity-price-con'>
              <div className='price-con'>
                <p className='item-quantity'>{eachItem.netWeight} gms</p>
                <p className='discount-price'>₹{eachItem.basePrice}</p>
                <p className="actual-price">₹{eachItem.discountedPrice}</p>
              </div>
              <div className='quantity-con'>
                <button onClick={()=>dispatch(decreaseQunatity(eachItem))}><RemoveIcon/></button>
                <p>{eachItem.quantity}</p>
                <button onClick={()=>dispatch(addToCart(eachItem))}><AddIcon/></button>
              </div>
          </div>
          
        </div>

        ):<div className='empty-cart-con'> 
       
          <img src ="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" alt='empty-cart' className='empty-cart-image'/>
         
        </div>
      }

    {
        cartItems.length >= 1 && <div className='cart-total-price-con'>
            <h4>Bill Details</h4>
            <div>
                    <div className='subtotal'>
                        <p>SubTotal</p>
                        <p>{cartTotal}</p>
                    </div>
                    <div className='subtotal'>
                        <p>Delivary Charge</p>
                        <p>{36}</p>
                    </div>
                    <hr></hr>
                    <div className='subtotal'>
                        <p className='total-headig'>Total</p>
                        <p className='total-price'>₹{cartTotal + 36}</p>
                    </div>
            </div>
        </div>
      }
       {
        cartItems.length >= 1 &&  <div className='proceed-to-check'>
        <p className='total-headig'>Total : ₹{cartTotal + 36}</p>
        <button onClick={handleCkeckout}>Proceed To check out</button>
      
      </div>
      }
     </CartCon>
    </>
  )
}

export default Cart
