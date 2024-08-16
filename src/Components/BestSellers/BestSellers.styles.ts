import styled from "styled-components";

export const BestSellerItemCon = styled.div`
  margin :0 10px;
  
`

export const BestSeller = styled.div`
  
`
export const ImageCon = styled.div`
    width:200px;
    position: relative;

    img{
        width:100%;
        border-radius: 5px;
       
      
    }
    
    .cardbutton{
        position:absolute;
        height:30px;
        border-radius:5px;
        bottom:0;
        right: 0px;
        left: 170px;
        width:40px;
        background-color: white;
        border:gray;
        color: red;
        font-size: 18px;
        box-shadow: 0 0 2px rgba(0, 0, 0, .3);
        cursor: pointer;
    }
`

export const BestSellerItemsCon = styled.div`
    display: flex;
    overflow-x:auto;
    margin: 30px 0;

    &::-webkit-scrollbar{
    display: none;
}
  
`
export const Itemdescription = styled.div`
   
    .heading{

        height: 44px;
        overflow: hidden;
        margin-top:5px;
        
    }
    .item-weight-con{
        margin-top: 10px;
        font-size:12px;
    }
    .price-con{
        margin-top: 10px;
        span{
            margin-right: 5px;
        }
    }
    .price{
        font-size: 12px;
        text-decoration: line-through;
    }
    .percent{
        color:green;
        font-size: 12px;
    }
    p{
        font-size: 10px;
        margin-top:10px;
        display: flex;
        height:15px;
    }
    p Image{
        width: 10px;
        margin-left:5px;

    }
   
`