import styled from "styled-components";

// export const CustomerReviewCardCon = styled.div`
     
//     width: 250px;
//     height: 270px;
//     border: 1px solid red;
    

// `

export const CustomerReviewsMain = styled.div`
    width: 100%;
`
export const ReviewsCards = styled.div`
        width: 100%;
        height: 300px;
        display: flex;
        overflow-x: scroll;
        margin-top: 20px;
       
    &::-webkit-scrollbar{
        display: none;
    }
        .reviewCard{
            width: 100%;
            margin-right: 30px;
            border-radius:10px;

    }

    @media screen and (max-width:756px){
        height: 200px;
        .reviewCard{
            width: 150px;
        }
    }
`