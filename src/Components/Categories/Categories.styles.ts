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

    @media screen {
        
    }

`

export const CatItemCon = styled.div`
    display: flex;
    cursor: pointer;

    .catimage{
        width: 50px;
    }
`