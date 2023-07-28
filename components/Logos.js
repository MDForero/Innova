import Image from 'next/image'
import React from 'react'

const Logos = ({logo, width, height}) => {
    return (
        <div className="flex -space-x-2 flex-wrap justify-center content-center max-w-screen-xl mx-auto">
            {logo.map((item, index) => (<a key={index} href="#" className="hover:scale-150 hover:z-10 odd:move-right transform ease-in-out transition duration-500">
                <Image width={0} height={0} className={`inline-block h-${width} w-${height}  rounded-full object-contain ring-2 ring-red-600 bg-white`} src={item.img} alt={item.alt} />
            </a>))}
        </div>
    )
}

export default Logos