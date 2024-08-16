import styled from "styled-components";

export const SubCategoryItemsMain = styled.div`
    margin-top:50px;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;

   

`

export const BestSellerItemCon = styled.div`
    width: 300px;
    margin: 20px 40px;
    border-radius:10px;

    @media (min-width:768px) and (max-width:1400px) {
        margin: 20px 20px;
    }

    &:hover{
         box-shadow: 0 0 2px rgba(0, 0, 0, .3) ;
    }
`
export const ImageCon = styled.div`
    width: 100%;
    .image{
        width: 100%;
        border-radius:10px;
    }
`

export const Itemdescription = styled.div`
    padding: 5px;
   
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
    .button-con{
        display: flex;
        justify-content: space-between;
        
        button{
            background-color: #D11243;
            border: none;
            border-radius: 5px;
            width: 80px;
            height: 34px;
            color: white;
            cursor: pointer;
            font-weight: 600;

        }
    }
   
`
