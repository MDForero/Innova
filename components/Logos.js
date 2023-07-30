import Image from 'next/image'
import React from 'react'

const Logos = ({logo, width, height}) => {
    return (
        <div className="flex -space-x-2 flex-wrap justify-center content-center max-w-screen-xl mx-auto">
            {logo.map((item, index) => (<a key={index} href="#" className="hover:scale-150 hover:z-10 odd:move-right w-fit 
             transform ease-in-out transition duration-500">
                <Image  className={`inline-block h-${height} w-${width}  rounded-full object-contain bg-white`} src={item.img} alt={item.alt} />
            </a>))}
        </div>
    )
}

export default Logos