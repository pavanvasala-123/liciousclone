import styled from "styled-components"

 
 export const  BannerContainer = styled.div`
        margin-bottom:30px 20px;
        margin-top:20px;
        .banner{
            width: 100%;
            border-radius:10px;
        }

        @media(max-width:786px){
            .banner{
                width: 100%;
                height: 150px;
        }
        }

    @media(min-width:787px) and (max-width:1400px){
        margin-top:20px!important;
        /* margin: 0 2%; */
        
    }
`;


   