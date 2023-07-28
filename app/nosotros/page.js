import Image from 'next/image'
import Innova from "@/public/images/servicios/logogray.jpg"

import Teammate from '@/components/Teammate'
import mision from "@/public/images/servicios/1 (19).jpg"
import Team from '@/components/Team'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { team } from '@/data/data'

export const metadata = {
  title: "Innova | Nosotros",
}
export default function Nosotros() {
  return <div className=''>
    <main className="relative">
      <Image src={Innova} width={0} height={0} alt="Litografia" className="w-full h-[450px] object-cover" />
    </main>

    <section className='flex text-black py-14 flex-col items-center md:flex-row justify-evenly flex-wrap'>
      <div className='w-full md:w-4/5 text-justify '>
        <div className='min-h-[70vh] text-black flex md:flex-row-reverse flex-col justify-around item-center'>
          <section className='md:w-2/5'>
            <h2 className='text-3xl py-4 text-center font-bold'>Misión:</h2>
            <p className='text-xl'>
              En <span className='italic font-bold text-gray-700'>INNOVA</span> nuestra misión es ofrecer soluciones <span className='font-bold text-gray-700 italic'>creativas y efectivas</span> en el ámbito de la publicidad y la fotografía, brindando productos de alta calidad y un servicio personalizado a nuestros clientes. Buscamos ser una empresa líder en el mercado, siempre comprometida con la innovación y la excelencia en nuestros procesos y servicios, y contribuir al éxito de nuestros clientes y colaboradores.
            </p>
          </section>


          <Image src={mision} width={0} height={0} alt="mision" className="md:w-2/5 h-[450px] object-cover" />
        </div>
        <div className='min-h-[70vh] text-black flex md:flex-row flex-col justify-around item-center'>
          <section className='md:w-2/5'>
            <h2 className='text-3xl py-4 text-center font-bold'>Visión:</h2>
            <p className='text-xl'>
              En <span className='italic font-semibold text-gray-700'>INNOVA</span> nuestra visión es ser una empresa reconocida por <span className='font-semibold text-gray-700 italic'>la calidad y la innovación</span> en nuestros productos y servicios de publicidad y fotografía, siendo referentes en el mercado nacional e internacional. Nos esforzamos por ser una empresa sostenible y socialmente responsable, y trabajar siempre en un ambiente de colaboración y desarrollo profesional para nuestros colaboradores, siendo un lugar donde los mejores profesionales quieren trabajar y los mejores clientes quieren hacer negocios
            </p>
          </section>
          <Image src={mision} width={0} height={0} alt="mision" className="md:w-2/5 h-[450px] object-cover" />
        </div>
      </div>
    </section >
    <section className='pb-12'>
      <Team />
      <div className="flex flex-col items-center md:flex-row justify-evenly flex-wrap mx-auto">
        {team.map((item, index) => (<Teammate teammate={item} key={index} />))}
      </div>
    </section>
  </div >

}