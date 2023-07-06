import Image from 'next/image'
import litografia from "@/public/images/servicios/1 (1).jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faCut, faPrint } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

export default function page() {
    return (<div>
        <main className="relative">
            <Image src={litografia} width={0} height={0} alt="Litografia" className="w-full h-[400px] object-cover" />
        </main>
        <section className="my-8 py-2">
            <h2 className="text-6xl my-8 font-bold text-center">Litografía</h2>
            <div className="flex flex-wrap flex-row gap-8 w-[90%] max-w-screen-lg m-auto justify-around content-center">
                <div className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faPrint} className="text-7xl" />
                    <span className="text-lg font-bold">Impresión</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faFileAlt} className="text-7xl" />
                    <span className="text-lg font-bold">Diseño</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faCut} className="text-7xl" />
                    <span className="text-lg font-bold">Troquelado</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faBoxOpen} className="text-7xl" />
                    <span className="text-lg font-bold">Empaque</span>
                </div>
            </div>
        </section>
        </div>)}