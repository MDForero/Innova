'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Teammate = ({ teammate }) => {
  const { name, role, imageUrl, social, descripcion } = teammate
  const [show, setShow] = useState(false)
  return (
    <div lassName="p-4 min-w-[200px] xl:w-1/4 ">
      <div  className="mb-4 text-center opacity-90">
        <button onClick={() => setShow(!show)} className="relative block  rounded-full w-fit mx-auto ">
          <Image src={imageUrl} width={0} height={0} className="object-cover w-40" alt={name} />
        </button>
      </div>
      <div className="text-center">
        <p className="text-2xl text-white font-semibold dark:text-white">
          {name}
        </p>
        <div className={(show? 'slide-in' : 'hidden')+ ''}>
          <p className="text-xl font-light text-gray-100 dark:text-gray-200">
            {role}
          </p>
          <p className="max-w-xs py-4 font-light text-gray-100 text-md dark:text-gray-400 text-justify">
            {descripcion}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly  pt-8 mx-auto text-gray-300 border-t border-gray-200 w-44">
        {social ? social.map((item, index) => (<a key={index} href={item.href}>
          <FontAwesomeIcon icon={item.icon} className="text-xl w-8 h-8 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
        </a>)) : <></>}
      </div>
    </div>
  )
}

export default Teammate