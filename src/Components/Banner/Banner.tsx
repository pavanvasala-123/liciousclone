import React from 'react'
import { BannerContainer} from './Banner.styles'
import {banner} from '../../constants'
import { Image } from '../Global.styles'

const Banner:React.FC = () => {
  return (
    <BannerContainer>
        <Image src={banner.url} alt={banner.alt} className='banner' />
    </BannerContainer>

   
  )
}

export default Banner
