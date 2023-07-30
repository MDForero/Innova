import Image from 'next/image'
import React from 'react'

const GridCta = ({ items }) => {
    return (
        <div className='w-2/5 grid grid-cols-3 gap-2'>
            {items.map((item, index) => (
                <Image
                    key={index}
                    src={item.img}
                    alt=""
                    className={`h-full object-cover ${(index + 1) % 4 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
                />
            ))}
        </div>
    )
}

export default GridCta