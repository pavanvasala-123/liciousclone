import styled from "styled-components";

export const ShopCategoryCon = styled.div`
    margin-top:20px;
`

export const CategoryItemsCon = styled.div`
        margin-top:20px;
        display:flex;
        flex-wrap:wrap;
        flex: 1;
       
`
export const CategoryItem = styled.div`
    width: 120px;
    cursor: pointer;
    img{
        width:120px;
    }
    text-align:center;
    margin:0px 50px 20px 0px;
    @media(max-width:786px){
        img{
            width:100%;
        }
        margin:0px 10px 20px 0px;
        width: 72px;
    }
`



