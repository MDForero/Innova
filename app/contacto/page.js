import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const metadata = {
    title: "Innova | Contacto",
}

const medios = [
    { name: "Facebook", icon: faFacebook, href: "https://www.facebook.com/arteinnovacolombia" },
    { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/instainnova/" },
    { name: "Whatsapp", icon: faWhatsapp, href: "https://wa.me/+573133898130" },
    { name: "Correo", icon: faMailBulk, href: "mailto:contacto@innovacasanare.com"},
    { name: "Teléfono", icon: faPhone, href: "tel:+573133898130"}
]

export default function page() {
    return (<div>
        <section>
            <h2 className="text-3xl m-auto">Contacto</h2>
            <div className="flex flex-wrap max-w-screen-lg m-auto justify-around content-center">
                {medios.map((medio, index) => (<a key={index} href={medio.href} className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={medio.icon} className="text-7xl"/>
                    <span className="text-xl font-bold">{medio.name}</span>
                </a>))}
            </div>
        </section>
        
        
        <section>
            <h2 className="text-3xl m-auto">Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3670107264884!2d-72.89805192488035!3d4.878045495097718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad280b04865a9%3A0xf0896dbad89a138a!2sINNOVA%20FOTOGRAF%C3%8DA%20Y%20PUBLICIDAD!5e0!3m2!1ses-419!2sco!4v1688252366227!5m2!1ses-419!2sco" className="w-[90%]  h-[450px] m-auto" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>)
}