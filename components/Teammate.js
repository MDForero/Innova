'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Teammate = ({ teammate }) => {
  const { name, role, imageUrl, social, descripcion } = teammate
  const [show, setShow] = useState(false)
  return (
    <div onMouseEnter={()=>setShow(!show)} onMouseLeave={()=>setShow(!show)} className='ring-gray-600 rounded-xl pb-4 ring-2 shadow-xl shadow-gray-700 px-4 min-w-[300px]'>
      <div  className="mb-4 text-center">
        <button onClick={() => setShow(!show)} className="relative block  rounded-full w-fit mx-auto ">
          <Image src={imageUrl} width={0} height={0} className="object-cover w-40" alt={name} />
        </button>
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-900 font-semibold ">
          {name}
        </p>
        <div className={(show? 'slide-in' : 'hidden')}>
          <p className="text-xl  text-gray-800 font-medium">
            {role}
          </p>
          <p className="max-w-xs py-4 font-light text-gray-700 text-md text-justify">
            {descripcion}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly  pt-8 mx-auto text-gray-300 border-t-4 border-gray-800 w-44">
        {social ? social.map((item, index) => (<a key={index} href={item.href}>
          <FontAwesomeIcon icon={item.icon} className="text-xl w-8 h-8 transition-colors duration-200 hover:text-blue-600 text-gray-800" />
        </a>)) : <></>}
      </div>
    </div>
  )
}

export default Teammate