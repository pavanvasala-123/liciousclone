import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Search from './Components/SearchCon/Search';
import SubCategory from './Components/SubCategories/SubCategory';
import SubCatItemDetails from './Components/SubCatItemDetails/SubCatItemDetails';
import Cart from './Components/Cart/Cart';
import { useSelector } from 'react-redux';
import { RootState } from './AppStore/appStore';
import Address from './Components/ProceedTocheckout/Address';



function App() {
  
  const isCartVisible = useSelector((state:RootState) => state.showCart.show);
  

  return (
    <div className="App">
      <BrowserRouter> 
        <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path='/subcategory/:name' element ={<SubCategory/>}/>
              <Route path='/:name' element = {<SubCatItemDetails/>}/>
              <Route path='/product' element = {<SubCatItemDetails/>} />
              <Route path="/address" element ={<Address/>}/>
            </Routes>  
        <Footer/>
        {isCartVisible && <Cart/>}
       
      </BrowserRouter>
    </div>
  );
}

export default App; 
