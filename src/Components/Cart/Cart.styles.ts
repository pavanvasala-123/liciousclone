import styled from "styled-components";

export const ModelWrapper = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color:#666666; 
    opacity: 0.33;
    z-index: 1000;
`
export const CartCon = styled.div`
    
    width: 25%;
   height: 100vh;
   position: fixed;
    background-color: white;
    top: 0;
    right: 0;
    color: white;
    z-index: 1000;
    color: black;
    overflow-y: scroll;
    transition: 1s ease-out;
    transform: translatex(0px , 20%);

    @media (max-width:769px) {
        width: 98vw;
    }

    @media (min-width:768px) and (max-width:1400px) {
        width: 50vw;
    }
    .cancel-button{
    position: sticky;
    top:0;
    margin-top: 5px;
    margin-right:20px ; 
    right: 100%;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: red;
   font-size: 30px!important;
 
}


h3{
    color: black;
    padding: 30px 0 0 20px;
}
.cart-item-con{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
    0 -4px 8px 0 rgba(0, 0, 0, 0.2), 
    4px 0 8px 0 rgba(0, 0, 0, 0.2), 
    -4px 0 8px 0 rgba(0, 0, 0, 0.2); 

    padding: 10px;
    margin:20px 10px 20px 10px;
}
.cart-item-heading-con{
    display: flex;
    justify-content: space-between;
}
.romove-icon{
    cursor: pointer;
    color: #a39f9f;
}
.item-quantity-price-con{
    display: flex;
    justify-content: space-between;
    align-items: center;
   
}
.price-con{
    display: flex;
    justify-content: space-around;
    margin-left: 10px;
    align-items: center;
}

.quantity-con{
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
}
.item-quantity{
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    width: 80px;
   padding: 5px;
   color: #a39f9f;
}
.discount-price{
    color:#e40737;
    margin-left: 10px;
}
.actual-price{
    text-decoration: line-through;
    margin-left: 10px;
    color: #646262;
}
.quantity-con button{
    color: red;
    height: 25px;
    width: 25px;
    margin: 0 10px 0 10px;
    font-size:9px!important;
    padding-right: 5px;
   cursor: pointer;
   border: none;
   border-radius: 2px;
    
}
.quantity-con p{
    margin-top: 5px;
}
.empty_cart-heading{
    text-align: center;
    margin-top: 20%;
}
.empty-cart-con{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50%;
}
.empty-cart-image{
    height: 200px;
}
.cart-total-price-con{
    border: 1px dashed gray;
}
.subtotal{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.price{
    color: red;
}
.cart-total-price-con{
    margin: 0 10px;
    padding: 20px;
}
.total-headig{
    font-weight: 600;
    color: black;
}
.total-price{
    color: red;
}
.proceed-to-check{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    position: fixed;
    bottom: 0;
    width: inherit;
    box-shadow: 0 -10px 20px -5px rgba(115,115,115,0.75);
}
.proceed-to-check button{
    background-color: #e40737;
    width: 70%;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
}

@media (max-width: 750px){
    .cart-con{
        width: 90vw;
    }
    .cancel-button{
        margin-right:10px ; 
    }
}
`