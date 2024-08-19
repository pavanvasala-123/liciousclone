import React, { useEffect, useState } from 'react'
import { Headercon, HeaderContent, LocationCon, LogoCon, Navcon, SearchCon , CartIcon } from './Header.styles'
import { logo } from '../../constants'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../AppStore/ShowCartSlice';
import { RootState } from '../../AppStore/appStore';
import { ItemTotal, TotalCartItems } from '../../AppStore/cartSlice';
import { productsList, widgetsToShow } from '../../Data/data';
import { category } from '../CategotyIntefaces/CategotyInterface';
import { fitems } from '../../AppStore/filteredSlice';
import Categories from '../Categories/Categories';

const Header = () => {

  const [showpopUp , setShowpopUp] = useState(false)
  const[category,ShowCategory] = useState(false)

  const navigate = useNavigate()
  const handleInput = () =>{
    navigate("/search")
    console.log("search component")
  }
  const dispatch = useDispatch()
  const cartItems = useSelector((state:RootState)=> state.cart.cart)
  const cart_quantity = useSelector((state:RootState) => state.cart.cart_quantity);
  const cartItemsPrice = useSelector((state:RootState) => state.cart.total_price);

  const SubcategotyItems  = widgetsToShow[0].widgetMappings as unknown as category[]
  

  useEffect(()=>{
    dispatch(ItemTotal())
    dispatch(TotalCartItems())
},[cartItems])

let showpopup; 
const handleCart = () =>{
    if(cart_quantity == 0){
       setShowpopUp(!showpopUp)
    }
    else{
      dispatch(showCart(true))
    }
   
}

    const handleCategories = ()=>{
      ShowCategory(!category)
    }

    const handleSearchInput =(e:React.BaseSyntheticEvent)=>{
      const filteredSubCategory = productsList.filter((eachItem) => eachItem.cat_name.includes(e.target.value.toLowerCase()))
      // console.log(filteredSubCategory.length)
    
      const sub_categories = filteredSubCategory[0]?.subProductList
      dispatch(fitems(sub_categories))
    }

  return (
    <Headercon>
        <HeaderContent>
            <LogoCon>
                <img src = {logo.src} alt ={logo.alt}/>
            </LogoCon>
            <LocationCon>
                <span>
                  <LocationOnIcon className='icon'/>
                  <span className='city'>Benguluru <ExpandMoreIcon className='icon'/></span>
                </span>
                <p>Bengluru , Kanrnataka</p>
            </LocationCon>
            <SearchCon>
                <input placeholder='search for any delicious product' onClick={handleInput}  onChange={handleSearchInput}></input>
              <SearchIcon className='search-icon'/>
            </SearchCon>

            <Navcon>
                <div className='navitem'>
                    <img src="https://www.licious.in/image/rebranding/svg/categories-grey.svg"/>
                    <span onClick={handleCategories} >Categoties</span>
                </div>
                <div className='navitem'>
                    <PermIdentityIcon/>
                    <span>Login</span>
                </div>
                <CartIcon  $cart_quantity  onClick={handleCart}>
                    <ShoppingCartIcon />
                    {cart_quantity >= 1 ?
                    <div>
                      <p >{cart_quantity}Items</p>
                      <p className="price">₹{cartItemsPrice + 36}</p>
                    </div>:<p>Cart</p>
                    }
        
                </CartIcon>
                
            </Navcon>
            
          {showpopUp && <div className='popup'>
                <p>Cart is empty</p>
          </div>}
         {category && <Categories/>}
        </HeaderContent>

    </Headercon>  
    
  )
}

export default Header
