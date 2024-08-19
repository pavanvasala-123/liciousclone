import { cities ,popularSearches} from '../../Data/data'
import { FooterCon } from './Footer.styles'



const Footer = () => {

    return (
      <FooterCon className='footer-con'>
      
        <div className='value-component-container'>
            <div className='value-component-content-container'>
                <div>
                  <h3></h3>
                </div>
            </div>
        </div>
        <div className='cities'>
        <h1>Cities we serve</h1>
              <ul>
              
                  {
                      cities.map((eachCity)=>
                          <li key ={eachCity}>{eachCity}</li>
                      )
                  }
              </ul>
        </div>
       
        <div className='copy-right-con'>
                  <div className='copy-right-content-con'>
                      <p className='copy-right-heading'>© 2021 Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
                      <p>Licious is your one-stop fresh meat delivery shop. In here, 
                        you get nothing but the freshest meat & seafood, delivered straight to your doorstep. 
                        Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you`'`ve experienced Licious, you`'
                        `ll never go back to the old way of buying meat and seafood.</p>
                  </div>
        </div>
      </FooterCon>
    )
  }
  
  export default Footer
  
  