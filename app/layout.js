'use client'

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



const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Casos de éxito', href: '/casos-de-exito' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
]

const products = [
  { name: 'Avisos', description: 'Build strategic funnels that will convert', href: '/servicios/avisos', icon: PrinterIcon },
  { name: 'Diseño Web', description: 'Your customers’ data will be safe and secure', href: '/servicios/disenio-web', icon: CodeBracketIcon },
  { name: 'Fotografía', description: 'Connect with third-party tools', href: '/servicios/fotografia', icon: CameraIcon },
  { name: 'Marketing Digital', description: 'Build strategic funnels that will convert', href: '/servicios/marketing-digital', icon: MegaphoneIcon },
  { name: 'Litografia', description: 'Speak directly to your customers', href: '/servicios/litografia', icon: SwatchIcon },
  { name: 'Sellos', description: 'Build strategic funnels that will convert', href: '/servicios/sellos', icon: DocumentCheckIcon },
  { name: 'Sublimación', description: 'Build strategic funnels that will convert', href: '/servicios/sublimacion', icon: NewspaperIcon },
  { name: 'Tampografia', description: 'Get a better understanding of your traffic', href: '/servicios/tampografia', icon: ChartPieIcon },
]
const callsToAction = [
  { name: 'Demo', href: 'servicios/#', icon: PlayCircleIcon },
  { name: 'Contactanos', href: 'tel:+573133898130', icon: PhoneIcon },
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
        <Disclosure as="nav" className="bg-nav sticky top-0 w-full z-40">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Link href="/">
                        <Image
                          width={0}
                          height={0}
                          className="hidden h-8 w-auto lg:block"
                          src={logo}
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden sm:mx-auto sm:block">
                      <div className="flex space-x-4">
                        <Popover.Group className="hidden lg:flex lg:gap-x-12">
                          {navigation.map((item) => (item.name === 'Servicios' ?
                            <Popover key={item.name} className="relative">
                              {({ open }) => (<>
                                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300">
                                  Servicios
                                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute z-10 m-auto -right-[350px] w-screen max-w-screen-lg  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 " >
                                    {({ close }) => (<>

                                      <div className="p-4 grid grid-cols-3 " >
                                        {products.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-xl leading-6 hover:bg-gray-200"
                                          >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                              <item.icon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">

                                              <Link href={item.href} className="block font-semibold text-gray-900" onClick={() => close()} >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                              </Link>
                                              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                        {callsToAction.map((item) => (
                                          <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-xl font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                            onClick={() => close()}
                                          >
                                            <item.icon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
                                            {item.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </>
                                    )}
                                  </Popover.Panel>
                                </Transition></>)}
                            </Popover>
                            :
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                pathname == item.href ? 'bg-gray-900 text-sm font-semibold leading-6 text-white' : 'text-gray-300 text-sm font-semibold leading-6 hover:bg-gray-700 hover:text-white',
                                'rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Popover.Group>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (item.name === 'Servicios' ?

                    <Disclosure key={item.name} as="div" className="">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-700">
                            Servicios
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2 grid grid-cols-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-gray-700 hover:text-white"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    :
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>

            </>
          )}

        </Disclosure>

        {children}
        <a className='fixed  right-1 bottom-1' href="#">
          <FontAwesomeIcon icon={faWhatsapp} className='text-green-600 h-12 w-12' />
        </a>
        <footer className="w-full py-8 bg-footer">
          <div className="max-w-screen-xl px-4 mx-auto">
            <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-xl  font-medium ">
              {navigation.map((item, index) => (<li key={index} className="my-2">
                <Link className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href={item.href}>
                  {item.name}
                </Link>
              </li>))}
            </ul>
            <div className="pt-8 flex max-w-xs mx-auto items-center justify-around">
              {redes.map((red, index) => (<a key={index} href={red.link} className="text-gray-300 transition-colors duration-200 hover:text-white dark:hover:text-white">
                <FontAwesomeIcon icon={red.icon} fill="currentColor" className="h-24 w-24 transition-colors duration-200 hover:text-white dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" />
              </a>))}
            </div>
            <div className="text-center text-gray-300 dark:text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
              <span>© 2021 Innova.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
