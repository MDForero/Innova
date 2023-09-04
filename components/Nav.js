'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { use, useEffect, useState } from 'react'

const Nav = ({navigation}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFixed, setIsFixed] = useState('')	
    const pathName = usePathname()
    const handleScroll = () => {
        if (window.scrollY < 200) {
            setIsFixed("")
        } else {
            setIsFixed(' fixed top-0 z-50')
        }
    }
    useEffect (()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <div className={`w-full bg-nav ${isFixed}`}>
            <nav className='relative w-full bg-nav h-12 lg:h-fit'>
                <button onClick={()=>setIsOpen(!isOpen)} className="lg:hidden absolute left-4 top-4 z-[1000]  text-2xl"><Image src={!isOpen?'/svg/burger.svg':'/svg/close.svg'} width={20} height={20} /></button>
                <Link href='/' className='lg:hidden uppercase absolute right-4 top-2 font-bold text-white z-[50]  text-2xl '>Innova</Link>
                <ul className={`max-w-screen-2xl mx-auto justify-center gap-10 py-4  lg:flex hidden`}>
                    {navigation.map((item, index) => {
                    return <li key={index} className={`${(pathName.slice(1,-1) === item.href.slice(1) )  ? 'bg-white  ' : 'text-white '} cursor-pointer uppercase   px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] hover:text-gray-950  hover:bg-gray-400 rounded-xl  overflow-hidden h-fit  transition`}> <Link key={index} href={item.href} >{item.name}</Link></li>})}
                </ul>
                <ul className={`gap-10 py-4   ${isOpen ? 'fixed top-0 right-0 left-0 w-full h-full bottom-0 bg-nav z-50 flex flex-col justify-center items-center ':'hidden'}`}>
                    {navigation.map((item, index) => {
                    return <li key={index} className={`${(pathName.slice(1,-1) === item.href.slice(1) )  ? 'bg-white  ' : 'text-white '} cursor-pointer uppercase   px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] hover:text-gray-950  hover:bg-gray-400 rounded-xl  overflow-hidden h-fit  transition`}> <Link key={index} href={item.href} onClick={() => setIsOpen(!isOpen)}>{item.name}</Link></li>})}
                </ul>
            </nav>
        </div>
    )
}

export default Nav