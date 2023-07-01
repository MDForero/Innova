import img0 from '@/public/images/logos/anayibe.png'
import img1 from '@/public/images/logos/Arepa y tizon.png'
import img2 from '@/public/images/logos/Asovida.png'
import img3 from '@/public/images/logos/Blue.png'
import img4 from '@/public/images/logos/ByA.png'
import img5 from '@/public/images/logos/Cactus.png'
import img6 from '@/public/images/logos/Casa de Reinas.png'
import img7 from '@/public/images/logos/Chocofantasy.png'
import img8 from '@/public/images/logos/Cositas Lindas.png'
import img9 from '@/public/images/logos/EDS Morichal.png'
import img10 from '@/public/images/logos/el campo- mi placita.png'
import img11 from '@/public/images/logos/El profe.png'
import img12 from '@/public/images/logos/Ferretodo.png'
import img13 from '@/public/images/logos/Game center.png'
import img14 from '@/public/images/logos/Intimo.png'
import img15 from '@/public/images/logos/La Corona.png'
import img16 from '@/public/images/logos/La Roca.png'
import img17 from '@/public/images/logos/los lagos.png'
import img18 from '@/public/images/logos/merengon.png'
import img19 from '@/public/images/logos/monstserrat.png'
import img20 from '@/public/images/logos/Olimpico.png'
import img21 from '@/public/images/logos/palo de agua.png'
import img22 from '@/public/images/logos/piolina.png'
import img23 from '@/public/images/logos/RyC eventos.png'
import img24 from '@/public/images/logos/Tasajera.png'
import img25 from '@/public/images/logos/tora no maki.png'
import img26 from '@/public/images/logos/Valthi.png'
import Image from 'next/image'


const items = [
  { img: img0, alt: 'Anayibe torres' },
  { img: img1, alt: 'Arepa y tizon' },
  { img: img2, alt: 'Asovida' },
  { img: img3, alt: 'Blue' },
  { img: img4, alt: 'ByA' },
  { img: img5, alt: 'Cactus' },
  { img: img6, alt: 'Casa de Reinas' },
  { img: img7, alt: 'Chocofantasy' },
  { img: img8, alt: 'Cositas Lindas' },
  { img: img9, alt: 'EDS Morichal' },
  { img: img10, alt: 'El campo- mi placita' },
  { img: img11, alt: 'El profe' },
  { img: img12, alt: 'Ferretodo' },
  { img: img13, alt: 'Game center' },
  { img: img14, alt: 'Intimo' },
  { img: img15, alt: 'La Corona' },
  { img: img16, alt: 'La Roca' },
  { img: img17, alt: 'los lagos' },
  { img: img18, alt: 'merengon' },
  { img: img19, alt: 'monserrat' },
  { img: img20, alt: 'Olimpico' },
  { img: img21, alt: 'palo de agua' },
  { img: img22, alt: 'piolina' },
  { img: img23, alt: 'RyC eventos' },
  { img: img24, alt: 'Tasajera' },
  { img: img25, alt: 'tora no maki' },
  { img: img26, alt: 'Valthi' },
]
export const metadata = {
  title: "Innova | Casos de exito"
}
export default function Casos() {
  return (
    <div>
      <section>
        <header>
          
        </header>
        <div className="flex -space-x-2 flex-wrap justify-center content-center">
          {items.map((item, index) => (<a href="#" className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
            <Image width={0} height={0} className="inline-block h-32 w-32  rounded-full object-contain ring-2 ring-white" src={item.img} alt={item.alt} />
          </a>))}
        </div>
      </section>
    </div>
  )
}