import styled from "styled-components";

export const FooterCon = styled.div`

.cities ul {
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 20%; 
}
.footer-con{
    position: relative;
}
.cities li{
    border:1px solid rgb(219, 216, 216);
    border-radius: 50px;
    margin: 20px;
    padding: 10px;
   
}

.cities{
    background-color: #FAF7F2;
    padding: 40px;
}
.cities h1{
    margin-left: 20%;
    font-size: 16px;
    color: #272727;

}
.copy-right-content-con{
    margin: 0 18%;
    color: white;
    padding: 30px;
    font-size: 12px;
}
.copy-right-content-con p{
    margin-bottom: 20px;
    text-align: center;
   line-height: 1.5;
}
.copy-right-con{
    
    background-color: #464646;
}
.copy-right-heading{
    text-align: center;
}
.horizontal_line{
    position: relative;
   
}
.horizontal_line hr{
    margin: 0 25%;
    color: #6e6e6e;
}
.horizontal_line img{
   position: relative;
   left: 400px;
   bottom: 20px;
   margin-right: 10px;
}

@media (max-width:750px) {
    .cities ul {
       
        margin: 0 10px; 
    }
    .copy-right-content-con{
        margin: 0 10px;
        
    }
    .cities li{
        margin: 10px;
        padding: 10px;
    }
    .cities h1{
        margin-left: 10px;
    }
    .cities{
      
        padding: 10px;
    }
    
}

`