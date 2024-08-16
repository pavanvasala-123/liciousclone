import styled from "styled-components";

export const  CategotyPageHeaderMain = styled.div`
    background-color: lightpink;
    /* margin-top: 100px; */
   position: sticky;
   top: 0;
    .banner-img{
        margin-top:40px;
    }
    p{
        padding-top:20px;
    }

    .subCatagories-con{
        display: flex;
        overflow-x:scroll;
        width: 100%;
        margin-top:50px;
        padding-bottom:50px;
       
    }
    .subCatagories-con::-webkit-scrollbar{
        display: none;
    }

    .sub-cat-item{
        width: 80px;
        margin-right: 80px ;
    }

    .sub-cat-item p{
        font-size: 12px;
    }
    img{
        width: 100%;
    }
    .namebtncon{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{
        background-color: red;
        color: white;
        border-radius: 5px;
        border: none;
        width: 60px;
        height: 30px;
        cursor: pointer;
        margin-top: 10px;
    }
`
