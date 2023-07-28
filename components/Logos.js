import Image from 'next/image'
import React from 'react'
import { logos } from '@/data/data'

const Logos = () => {
    return (
        <div className="flex -space-x-2 flex-wrap justify-center content-center max-w-screen-xl mx-auto">
            {logos.map((item, index) => (<a key={index} href="#" className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
                <Image width={0} height={0} className="inline-block h-32 w-32  rounded-full object-contain ring-2 ring-red-600 bg-white" src={item.img} alt={item.alt} />
            </a>))}
        </div>
    )
}

export default Logos