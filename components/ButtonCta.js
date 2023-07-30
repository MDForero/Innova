import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { contacto } from '@/data/data'

const ButtonCta = () => {
    return (
        <div className="flex flex-col w-fit mx-auto space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href={`http://wa.me/${contacto.phone}`} className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                <FontAwesomeIcon icon={faWhatsapp} className='h-12 w-12'/>
                <span className='ml-2'>Contacta ahora</span>  
            </a>
            <a href={`tel:${contacto.phone}`} className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <FontAwesomeIcon icon={faPhone} className='h-12 w-12'/>
                <span className='ml-2'>Llama ya</span>
            </a>
        </div>
    )
}

export default ButtonCta