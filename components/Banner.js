"use client"
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import img0 from '../public/slider1.jpg'
import img1 from '../public/MONTERREY.jpg'
import img2 from '../public/Fotografía 1.jpg'
import img3 from '../public/Manejo redes.jpg'



const items = [
    {
        id: 1,
        title: 'First Slide',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        imageUrl: img0
    },
    {
        id: 2,
        title: 'Second Slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: img1
    },
    {
        id: 3,
        title: 'Third Slide',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        imageUrl: img2
    },
    {
        id: 4,
        title: 'Third Slide',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        imageUrl: img3
    }
]
const Banner = () => {
    return (<Carousel className='max-w-screen-2xl h-fit'>
        {items.map((item, index) => (<Carousel.Item key={index}>
            
            <Image className="d-block max-w-full object-cover" src={item.imageUrl} alt={item.title} />
        </Carousel.Item>))}
    </Carousel>
    )
}

export default Banner