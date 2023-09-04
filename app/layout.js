'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import {
  Disclosure,
  Popover,
  Transition
} from '@headlessui/react'
import {
  Bars3Icon,
  CameraIcon,
  ChartPieIcon,
  ChevronDownIcon,
  CodeBracketIcon,
  DocumentCheckIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayCircleIcon,
  PrinterIcon,
  SwatchIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import Link from 'next/link'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contacto } from '@/data/data'
import Nav from '@/components/Nav'



const navigation = [
  { name: 'Innova', href: '/' },
  { name: 'Catalogo', href: '/catalogo' },
  { name: 'Casos de éxito', href: '/casos-de-exito' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]


const redes = [
  { icon: faFacebook, link: 'https://www.facebook.com/arteinnovacolombia' },
  { icon: faInstagram, link: 'https://www.instagram.com/instainnova/' },
  { icon: faWhatsapp, link: 'https://wa.me/+573133898130' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const pathname = usePathname()

  return (
    <html lang="es">
      <body className={inter.className}>
        <Nav navigation={navigation} />
        <div className='bg-gray-100'>
          {children}
        </div>
        <a className='fixed  right-1 bottom-1' href="#">
          <FontAwesomeIcon icon={faWhatsapp} className='text-green-600 h-12 w-12' />
        </a>
        <footer className="w-full  py-8 bg-footer">
          <div className="max-w-screen-xl flex flex-col gap-4 px-4 mx-auto">
            <ul className="flex flex-wrap justify-between gap-8 max-w-screen-md mx-auto text-xl  font-medium ">
              {navigation.map((item, index) => (<li key={index} className="my-2">
                <Link className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href={item.href}>
                  {item.name}
                </Link>
              </li>))}
            </ul>
            <div className=" flex max-w-lg mx-auto items-center justify-evenly w-full">
              {redes.map((red, index) => (<a key={index} href={red.link} className="text-gray-300 transition-colors duration-200 hover:text-white dark:hover:text-white">
                <FontAwesomeIcon icon={red.icon} fill="currentColor" className="h-12 w-12 transition-colors duration-200 hover:text-white dark:hover:text-white" />
              </a>))}
            </div>
            <section id='contacto' className="mx-auto">
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-center text-2xl font-medium text-gray-300'>Ubicación</h3>
                  <p className='text-center text-xl font-medium text-gray-200'>{contacto.address}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-center text-2xl font-medium text-gray-300'>Teléfono</h3>
                  <p className='text-center text-xl font-medium text-gray-200'>{contacto.phone}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-center text-2xl font-medium text-gray-300'>Correo</h3>
                  <p className='text-center text-xl font-medium text-gray-200'>{contacto.email}</p>
                </div>
              </div>
            </section>
            <div className="text-center text-gray-300 dark:text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
              <span>© 2021 Innova.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
