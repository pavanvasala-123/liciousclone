import styled from "styled-components";

export const Headercon = styled.div`
    height:81px;
    box-shadow:0 2px 3px -1px rgba(0, 0, 0, 0.1);
    /* margin-bottom:20px; */
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: white;

`

export const HeaderContent = styled.div`
        margin:0 20%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:20px;


        @media(max-width:786px){
            margin:0 ;
        }
        @media(min-width:787px) and (max-width:1400px){
            margin:0 2rem;
        }

        .popup{
            background-color: black;
            color: white;
            width: 300px;
            height:40px;
            border-radius: 5px;
            position: fixed;
            top:100px;
            left:60%;
            transition: transform 3s ease-in-out;
            transform: scale(1.1);
            
            
            .p{
              
            }
        }
`

export const LogoCon = styled.div`
    img{
        width:80px;
        cursor: pointer;
    }
    @media(max-width:786px){
        display:none;
    }
    @media(min-width:787px) and (max-width:1400px){
        display:none;
    }
`
export const SearchCon = styled.div`
     display:flex;
     border:1px solid gray;
     border-radius:5px;
     width:30%;
    background-color:#f8f8f8;

     input{
        border: none;
        width: 100%;
        outline: none;
        padding-left: 10px;
        height:30px;
        background-color:#f8f8f8;
        cursor: pointer;
        
     }
    @media(max-width:786px){
        display:none;
    }
`
export const LocationCon = styled.div`
    color:#0d0d0e;
    cursor: pointer;
    p{
        font-size:0.9rem;
        margin-left:1rem;
    }
    span{
        display:flex;
        font-size:18px;
    }
    .city{
        display:flex;
        align-items:center;
    }
    .icon{
        font-size:1rem;
    }
    
`

export const Navcon = styled.div`
        display:flex;
        cursor: pointer;

        div{
           display:flex;
           align-items:center;
           margin-right:1.5rem;
        }
    div img{
        width:20px;
    }
    @media(max-width:786px){
       .navitem{
        display: none;
       }
    }
    div img:active{
        color: red;
    }
    span:active{
        color: red;
    }

   
`


export const CartIcon = styled.span<{$cart_quantity:boolean}>`
     border:${(props)=>props.$cart_quantity?"1px solid red":""};
    padding:${(props)=>props.$cart_quantity?"5px":""};
    color: ${(props)=>props.$cart_quantity?"red":""};;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
   
    @media(max-width:786px){
       margin-left:30px;
      

    }

   
`
    


