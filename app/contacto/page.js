import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import contacto from "../../public/images/servicios/logogray.jpg"

export const metadata = {
    title: "Innova | Contacto",
}

const medios = [
    { name: "Facebook", icon: faFacebook, href: "https://www.facebook.com/arteinnovacolombia" },
    { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/instainnova/" },
    { name: "Whatsapp", icon: faWhatsapp, href: "https://wa.me/+573133898130" },
    { name: "Correo", icon: faMailBulk, href: "mailto:contacto@innovacasanare.com" },
    { name: "Teléfono", icon: faPhone, href: "tel:+573133898130" }
]

export default function page() {
    return (<div>
        <main className="relative">
            <Image src={contacto} width={0} height={0} alt="Contacto" className="w-full h-[400px] object-cover" />

        </main>
        <form method="GET" action="https://wa.me/+573202336531&text=/" >
            <h2 className="text-6xl my-8 font-bold text-center">Formulario</h2>
            <div className="lg:max-w-screen-lg m-auto w-[90%]">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <div className="flex flex-col justify-center max-w-screen-md w-full items-center">
                        <label htmlFor="nombre" className="text-lg self-start font-bold">Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="border-2 w-full border-gray-300 rounded-md p-2" />
                    </div>


                </div>
                <div className="flex flex-row gap-3 mx-auto max-w-screen-md justify-center items-center">
                    <div className="flex flex-col justify-center w-full items-center">
                        <label htmlFor="correo" className="self-start text-lg font-bold">Correo</label>
                        <input type="email" name="correo" id="correo" className="border-2 w-full border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col w-full justify-center items-center">
                        <label htmlFor="telefono" className="self-start  text-lg font-bold">Teléfono</label>
                        <input type="tel" name="telefono" id="telefono" className="border-2 w-full border-gray-300 rounded-md p-2" />
                    </div>

                </div>
                <div className="flex flex-col max-w-screen-md mx-auto justify-center items-center">
                    <label htmlFor="mensaje" className="self-start text-lg font-bold">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" className="border-2 w-full h-24 border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col justify-center items-center">

                    <button type="submit" className="bg-blue-500 text-white font-bold rounded-md p-2">Enviar</button>
                </div>
            </div>
        </form>
        <section className="my-8 py-2">
            <h2 className="text-6xl my-8 font-bold text-center">Contacto</h2>
            <div className="flex flex-wrap flex-row gap-8 w-[90%] max-w-screen-lg m-auto justify-around content-center">
                {medios.map((medio, index) => (<a key={index} href={medio.href} className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={medio.icon} className="text-7xl" />
                    <span className="text-lg font-bold">{medio.name}</span>
                </a>))}
            </div>
        </section>



        <section className="my-8 py-2">
            <h2 className="text-6xl my-8 font-bold text-center">Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3670107264884!2d-72.89805192488035!3d4.878045495097718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad280b04865a9%3A0xf0896dbad89a138a!2sINNOVA%20FOTOGRAF%C3%8DA%20Y%20PUBLICIDAD!5e0!3m2!1ses-419!2sco!4v1688252366227!5m2!1ses-419!2sco" className="w-[90%]  h-[450px] m-auto" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>)
}