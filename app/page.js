import Teammate from '@/components/Teammate'
import Image from 'next/image'
import Banner from '@/components/Banner'
import Team from '@/components/Team'
import { carousel1, carousel2, logos, team } from '@/data/data'
import Logos from '@/components/Logos'
import GridCta from '@/components/GridCta'




export const metadata = {
  title: 'Inicio',
}

export default function Home() {
  return <div className='pb-12 '>
    <main className='h-screen flex'>
      <Banner />
    </main>
    <div className=" relative flex flex-wrap  rounded-3xl  w-full m-auto ">
      <section id='descripcion' className=" dark:bg-gray-900 m-auto flex ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 min-h-[70vh]">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">INNOVA</h2>
            <p className="mb-8 font-light text-gray-700 sm:text-xl  text-justify">  Es una agencia de publicidad y estudio fotográfico ubicado en Monterrey Casanare, con cobertura de ventas a nivel nacional. Desde el año 2014, nuestra empresa se ha dedicado a ofrecer productos y servicios de alta calidad. Contamos con un equipo de trabajo altamente calificado, capaz de brindar soluciones creativas y efectivas en las artes gráficas y audiovisuales para nuestros clientes. La combinación de diversas habilidades creativas de nuestros colaboradores nos permite destacar en el mercado y ofrecer resultados excepcionales. Estamos comprometidos en seguir innovando y superando las expectativas de nuestros clientes en cada proyecto que emprendemos.</p>
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
      <section id='servicios' className="p-8 dark:bg-gray-800 m-auto">
        <div className='py-8'>
          <h2 className='text-center text-4xl font-bold text-gray-700'>Servicios</h2>\
            <div className='flex flex-row  items-center flex-wrap md:flex-row gap-4 justify-evenly mb-24  '>
              <GridCta items={carousel1} />
              <div className='md:w-2/5'>
                <h3 className='text-center text-2xl font-medium text-gray-900'>Publicidad</h3>
                <p className='text-center text-lg font-medium'>Durante años nos hemos caracterizado por ofrecer todo lo que cualquier tipo de negocio puede necesitar para impulsarse en el mercado y lograr los objetivos de posicionamiento de nuestros clientes, la publicidad digital y física aplicada a comunidades especificas donde ya se ha estudiado el mercado para lograr los objetivos esperados.</p>
              </div>
            </div>
            <div className='flex flex-wrap flex-row-reverse items-center  md:flex-row gap-4 justify-evenly'>
              <GridCta items={carousel2} />
              <div className='md:w-2/5'>
                <h3 className='text-center text-2xl font-medium text-gray-900'>Fotografía</h3>
                <p className='text-center text-lg font-medium '>Nuestro servicio de fotografía esta ajustado a los requerimientos de diferentes tipos de clientes, siendo las sesiones personales las mas buscadas y adquiridas por quienes nos visitan en el día a día, buscamos que la comodidad sea nuestro principal objetivo para lograr resultados naturales y maravillosos.</p>
              </div>
            </div>
        </div>
      </section>

      <section id='casos' className="p-8 dark:bg-gray-800 m-auto">
        <div className='py-8'>
          <h2 className='text-center text-4xl font-bold text-gray-700'>Empresas que han confiado en nosotros</h2>
          <h3 className='text-center text-2xl font-medium text-gray-900'>Sector publico</h3>
        </div>
        <Logos logo={logos.publicos} height={24} width={24}/>

        <h3 className='py-8 text-center font-medium text-2xl text-gray-900'>Sector privado</h3>
        <Logos logo={logos.privados} height={24} width={24}/>
      </section >
      <section id='team' className="p-8 dark:bg-gray-800 m-auto">
        <Team />
        <div className=''>
          <div className="flex flex-row gap-3 items-center gap md:flex-row justify-evenly flex-wrap">
            {team.map((teammate, index) => (<Teammate key={index} teammate={teammate} />))}
          </div>
        </div>
      </section>
    </div>
  </div>
}
