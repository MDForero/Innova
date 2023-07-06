import Image from 'next/image'
import Innova from "@/public/images/servicios/logored.jpg"
import img0 from "@/public/images/teammate/316685405_2641349399358509_2209531290795812399_n.jpg"
import img1 from "@/public/images/teammate/316685405_2641349399358509_2209531290795812399_n.jpg"
import img2 from "@/public/images/teammate/316685405_2641349399358509_2209531290795812399_n.jpg"
import Teammate from '@/components/Teammate'


const team = [
  {
    name: 'Jane Cooper',
    role: 'Paradigm Representative',
    imageUrl: img1
  },
  {
    name: 'Jane Cooper',
    role: 'Paradigm Representative',
    imageUrl: img2
  },
  {
    name: 'Jane Cooper',
    role: 'Paradigm Representative',
    imageUrl: img0
  },
]

export const metadata = {
  title: "Innova | Nosotros",
}
export default function Nosotros() {
  return <div>
    <main className="relative">
      <Image src={Innova} width={0} height={0} alt="Litografia" className="w-full h-[400px] object-cover" />
    </main>

    <h1 className='text-4xl py-8 text-center font-bold'>Nosotros</h1>

    <h2 className='text-2xl py-4 text-center font-bold'>Misión:</h2>
    <p>
      En INNOVA nuestra misión es ofrecer soluciones creativas y efectivas en el ámbito de la publicidad y la fotografía, brindando productos de alta calidad y un servicio personalizado a nuestros clientes. Buscamos ser una empresa líder en el mercado, siempre comprometida con la innovación y la excelencia en nuestros procesos y servicios, y contribuir al éxito de nuestros clientes y colaboradores.
    </p>
    <h2>Visión:</h2>
    <p>
      En INNOVA nuestra visión es ser una empresa reconocida por la calidad y la innovación en nuestros productos y servicios de publicidad y fotografía, siendo referentes en el mercado nacional e internacional. Nos esforzamos por ser una empresa sostenible y socialmente responsable, y trabajar siempre en un ambiente de colaboración y desarrollo profesional para nuestros colaboradores, siendo un lugar donde los mejores profesionales quieren trabajar y los mejores clientes quieren hacer negocios
    </p>
    <section>
    <div className="flex flex-col items-center md:flex-row justify-evenly flex-wrap">
      {team.map((item, index)=>(<Teammate teammate={item} key={index} />))}
    </div>
    </section>
  </div>

}