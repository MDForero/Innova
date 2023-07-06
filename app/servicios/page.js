import Image from 'next/image'
import img0 from '@/public/images/servicios/1 (1).jpg'
import img1 from '@/public/images/servicios/1 (2).jpg'
import img2 from '@/public/images/servicios/1 (3).jpg'
import img3 from '@/public/images/servicios/1 (4).jpg'
import img4 from '@/public/images/servicios/1 (5).jpg'
import img5 from '@/public/images/servicios/1 (6).jpg'
import img6 from '@/public/images/servicios/1 (7).jpg'
import img7 from '@/public/images/servicios/1 (8).jpg'
import img8 from '@/public/images/servicios/1 (9).jpg'
import img9 from '@/public/images/servicios/1 (10).jpg'
import img10 from '@/public/images/servicios/1 (11).jpg'
import img11 from '@/public/images/servicios/1 (12).jpg'
import img12 from '@/public/images/servicios/1 (13).jpg'
import img13 from '@/public/images/servicios/1 (14).jpg'
import img14 from '@/public/images/servicios/1 (15).jpg'
import img15 from '@/public/images/servicios/1 (16).jpg'
import img16 from '@/public/images/servicios/1 (17).jpg'
import img17 from '@/public/images/servicios/1 (18).jpg'
import img18 from '@/public/images/servicios/1 (19).jpg'
import img20 from '@/public/images/servicios/1 (21).jpg'
import img22 from '@/public/images/servicios/1 (23).jpg'
import img23 from '@/public/images/servicios/1 (24).jpg'
import img24 from '@/public/images/servicios/1 (25).jpg'
import img25 from '@/public/images/servicios/1 (26).jpg'
import img26 from '@/public/images/servicios/1 (27).jpg'
import img27 from '@/public/images/servicios/1 (28).jpg'
import img28 from '@/public/images/servicios/1 (29).jpg'

export const metadata = {
  title: "Innova | Servicios"
}
const servicios = [, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img20, img22, img23, img24, img25, img26, img27, img28]

export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* <main>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Servicios</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
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
      </main>
       */}
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
        <header className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Servicios</h2>
        </header>
        <div className='max-w-full mx-auto flex flex-wrap justify-center content-center '>

          {servicios.map((servicio, index) => (<Image key={index} src={servicio} width={0} height={0} className='max-w-screen-sm w-full rounded-5 ring ring-4 ring-gray-800 m-2' alt=''/>))}
        </div>
      </div>
    </section>
  )
}