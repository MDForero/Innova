import Innova from "@/public/images/servicios/logogray.jpg"
import Image from "next/image"
import Logos from "@/components/Logos"
import { logos } from "@/data/data"

export const metadata = {
  title: "Innova | Casos de exito"
}
export default function Casos() {
  return (
    <div className='my-18'>
        <main className="relative">
          <Image src={Innova} width={0} height={0} alt="Litografia" className="w-full h-[450px] object-cover" />
        </main>
      <section className="pb-12 pt-12">
        <header className='max-w-screen-lg mx-auto font-medium'>
          <h1 className='text-xl text-center '>
            "¿Buscas una agencia de fotografía y publicidad que te garantice resultados excepcionales?</h1>
          <h1 className='text-3xl text-center'> No busques más, porque en <span className='italic font-bold text-gray-700'>Innova Fotografía y Publicidad</span> hemos construido una sólida reputación basada en la satisfacción de nuestros clientes.
          </h1>

        </header>
        <div className='py-8 px-8 max-w-screen-xl mx-auto text-justify text-lg'>
          <p>
            No nos conformamos con menos que la perfección, y esto se refleja en la calidad de nuestro trabajo. Cada imagen que capturamos y cada estrategia publicitaria que creamos son cuidadosamente diseñadas para transmitir el mensaje correcto y captar la atención de la audiencia adecuada. Nuestros clientes confían en nosotros porque hemos demostrado una y otra vez nuestra capacidad para generar resultados impactantes y generar un impacto duradero.
          </p>

          <p>
            Si estás buscando una agencia que te ofrezca más que simples fotografías y anuncios genéricos, Innova Fotografía y Publicidad es tu mejor elección. Trabajamos incansablemente para mantenernos a la vanguardia de las tendencias actuales, adaptándonos constantemente a un mercado en constante evolución. Al elegirnos, te beneficiarás de nuestra experiencia y conocimientos actualizados, que se traducirán en un mayor alcance, reconocimiento de marca y, en última instancia, un aumento en tus ventas y éxito empresarial.
          </p>
        </div>
        <Logos logo={logos.privados.concat(logos.publicos)} width={24} height={24} />
      </section>
    </div>
  )
}