import Cta from '@/components/Cta'
import hero from '../public/images/hero.jpg'
import Teammate from '@/components/Teammate'
import Image from 'next/image'
import Banner from '@/components/Banner'
import Team from '@/components/Team'
import { team } from '@/data/data'
import Logos from '@/components/Logos'




export const metadata = {
  title: 'Inicio',
}

export default function Home() {
  return (<div>
    <main className='h-screen flex'>
      <Banner />
    </main>
    <div className=" relative flex flex-wrap bg-yellow-900/10 rounded-3xl dark:bg-gray-900 overflow-hidden w-full m-auto ">
      <section className=" dark:bg-gray-900 m-auto flex ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 min-h-[70vh]">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-300 dark:text-white">INNOVA</h2>
            <p className="mb-8 font-light text-gray-200 sm:text-xl dark:text-gray-600 text-justify">  Es una agencia de publicidad y estudio fotográfico ubicado en Monterrey Casanare, con cobertura de ventas a nivel nacional. Desde el año 2014, nuestra empresa se ha dedicado a ofrecer productos y servicios de alta calidad. Contamos con un equipo de trabajo altamente calificado, capaz de brindar soluciones creativas y efectivas en las artes gráficas y audiovisuales para nuestros clientes. La combinación de diversas habilidades creativas de nuestros colaboradores nos permite destacar en el mercado y ofrecer resultados excepcionales. Estamos comprometidos en seguir innovando y superando las expectativas de nuestros clientes en cada proyecto que emprendemos.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
              </a>
              <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                View more
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1">
              <Image src={'/public/images/hero.jpg'} width={0} height={0} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <div className="p-8 dark:bg-gray-800 m-auto">
        <Team/>
        <div className=''>
          <div className="flex flex-col items-center md:flex-row justify-evenly flex-wrap">
            {team.map((teammate, index) => (<Teammate key={index} teammate={teammate} />))}
          </div>
        </div>
      </div>
      <Logos/>
    </div >
  </div>
  )
}
