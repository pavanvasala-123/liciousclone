import styled from "styled-components";

export const CategoriesCon = styled.div`
    background-color: white;
    width: 400px;
    height:500px;
    position: fixed;
    top: 100px;
    right:20%;
    overflow-y: scroll;
    padding: 50px;
    border-radius: 5px;
    &::-webkit-scrollbar{
        display: none;
    }
    box-shadow: 10px 10px 20px #FCF8F3;

    @media screen {
        
    }
    .close-icon{
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
        cursor: pointer;
    }

`

export const CatItemCon = styled.div`
    display: flex;
    cursor: pointer;

    .catimage{
        width: 50px;
    }
`