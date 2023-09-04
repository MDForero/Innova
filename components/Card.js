import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Card = ({ data }) => {
  return (
    <div class="">
      <a class="cards education" href="#">
        <div class="circle text-gray-950">
          <div class="overlay"></div>
          
           {typeof(data.icon) ==='string'? <Image className='z-50' src={data.icon} alt={data.name} width={60} height={60} />:<FontAwesomeIcon className='z-50' icon={data.icon} size='3x' />}
        </div>
        <p className='text-black font-bold'>{data.name}</p>
      </a>

    </div>
  )
}

export default Card