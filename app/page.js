import Teammate from '@/components/Teammate'
import Image from 'next/image'
import Banner from '@/components/Banner'
import Team from '@/components/Team'
import { carousel1, carousel2, contacto, logos, team } from '@/data/data'
import Logos from '@/components/Logos'
import GridCta from '@/components/GridCta'
import { MoveLeft, MoveRight, FadeIn, ZoomIn } from '@/components/Animation'
import ButtonCta from '@/components/ButtonCta'



export const metadata = {
  title: 'Inicio',
}

export default function Home() {
  return <div className='pb-12 '>
    <main className='flex justify-center w-full'>
      <Banner />
    </main>
    <div className=" relative flex flex-wrap flex-col gap-24 max-w-screen-2xl px-2 rounded-3xl  w-full m-auto ">
      <MoveLeft>
        <section id='descripcion' className=" dark:bg-gray-900 mx-auto mt-12">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
            <div className="max-w-screen-lg">
              <h2 className="mb-2 text-4xl tracking-tight font-extrabold  text-gray-900 ">INNOVA</h2>
              <p className="mb-8 font-light text-gray-700 sm:text-xl  text-justify">  Es una agencia de publicidad y estudio fotográfico ubicado en Monterrey Casanare, con cobertura de ventas a nivel nacional. Desde el año 2014, nuestra empresa se ha dedicado a ofrecer productos y servicios de alta calidad. Contamos con un equipo de trabajo altamente calificado, capaz de brindar soluciones creativas y efectivas en las artes gráficas y audiovisuales para nuestros clientes. La combinación de diversas habilidades creativas de nuestros colaboradores nos permite destacar en el mercado y ofrecer resultados excepcionales. Estamos comprometidos en seguir innovando y superando las expectativas de nuestros clientes en cada proyecto que emprendemos.</p>
              <ButtonCta />
            </div>
          </div>
        </section>

      </MoveLeft>
      <section id='servicios' className="p-8 dark:bg-gray-800 m-auto" >
        <h2 className='text-center text-4xl font-bold text-gray-700'>Servicios</h2>\
        <MoveLeft>
          <div className='flex flex-row  items-center flex-wrap md:flex-row gap-4 justify-evenly mb-24  '>
            <div className='w-2/5'>
              <GridCta items={carousel1} />
            </div>
            <div className='md:w-2/5'>
              <h3 className='text-center text-3xl pb-8 font-medium text-gray-900'>"Campañas de Publicidad Estratégica: Impulsa tu Negocio hacia el Éxito"</h3>

              <p className='text-center text-xl font-medium'>¿Quieres que tu negocio alcance nuevas alturas en el mercado? En <strong>INNOVA</strong>, nos enorgullecemos de brindarte todo lo que necesitas para alcanzar tus objetivos de posicionamiento. Nuestra publicidad digital y física, enfocada en comunidades específicas, ha sido cuidadosamente diseñada para asegurar que logres los resultados esperados. ¡Descubre cómo podemos potenciar tu marca hoy mismo! ¡Contáctanos para una asesoría personalizada!<br /> #ÉxitoAsegurado #PublicidadEstratégica #ImpulsaTuNegocio</p>
              <ButtonCta />
            </div>

          </div>
        </MoveLeft>
        <MoveRight>
          <div className='flex flex-wrap flex-row-reverse items-center  md:flex-row gap-4 justify-evenly'>
            <div className='w-2/5'>
              <GridCta items={carousel2} />
            </div>
            <div className='md:w-2/5'>
              <h3 className='text-center text-3xl font-medium text-gray-900'>Captura Momentos Únicos con Nuestro Servicio de Fotografía Personal</h3>
              <p className='text-center text-xl font-medium '>En <strong>INNOVA</strong>, entendemos que cada cliente es único y especial. Por eso, nuestro servicio de fotografía está diseñado para satisfacer las necesidades individuales de diferentes tipos de clientes. Nuestras sesiones personales son las más buscadas y adquiridas por quienes nos visitan a diario, porque buscamos que te sientas cómodo y relajado, permitiéndonos capturar resultados naturales y maravillosos.<br /> #FotografíaProfesional #CapturaMomentosÚnicos #ResultadosMaravillosos</p>
              <ButtonCta />
            </div>
          </div>
        </MoveRight>
      </section>

      <ZoomIn>
        <section id='casos' className="p-8 dark:bg-gray-800 m-auto">
          <div className='py-8'>
            <h2 className='text-center text-4xl font-bold text-gray-700'>Empresas que han confiado en nosotros</h2>
            <h3 className='text-center text-2xl font-medium text-gray-900'>Sector publico</h3>
          </div>
          <Logos logo={logos.publicos} height={24} />

          <h3 className='py-8 text-center font-medium text-2xl text-gray-900'>Sector privado</h3>
          <Logos logo={logos.privados} height={24} />
        </section >
      </ZoomIn>
      <section id='team' className="p-8 dark:bg-gray-800 m-auto">

        <Team />

        <FadeIn>
          <div className="flex flex-row gap-3 items-center gap md:flex-row justify-evenly flex-wrap">
            {team.map((teammate, index) => (<Teammate key={index} teammate={teammate} />))}
          </div>
        </FadeIn>
      </section>
      <section id='redes' className='flex flex-col mx-auto gap-12'>
      <iframe src="https://www.instagram.com/p/CvX6Yk-pO-4/embed" className='md:w-[340px] w-full h-[400px] md:h-[500px]' frameborder="0" scrolling="no" allowtransparency="true"></iframe>

      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Farteinnovacolombia&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1376175039861911" width="340" height="500"  scrolling="no" frameborder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </section>
    </div>
  </div>
}
