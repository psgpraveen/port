import React from 'react'
import IMG from './IMG/ISRO-Certificate.jpg'
import IMG2 from './IMG/UPSDM.jpg'
import IMG3 from './IMG/Praveen Kumar Gupta_Winter Internship Completion Certificate (2).jpg'
import IMG4 from './IMG/Ardent Reader.jpg'
import IMG5 from './IMG/Bharat Intern .jpg'
import IMG6 from './IMG/certificate.jpg'
import IMG7 from './IMG/IIIT Allahabad.jpg'
import IMG9 from './IMG/most aware child.jpg'
import IMG8 from './IMG/Oasis INFOBYTE.jpg'
import IMG10 from './IMG/sunfest 2018.jpg'
import IMG11 from './IMG/Tata Consultancy Services completion_certificate.jpg'
const index = () => {
  return (
   

<div id="default-carousel" className="relative w-full overflow-hidden p-8" data-carousel="slide">

<div className="relative h-fit lg:h-96 p-32 lg:p-16 lg:mx-32 overflow-hidden rounded-lg " data-carousel="slide">
       
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG} height={100} width={100}  className="absolute block w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG5} height={100} width={100}  className="absolute block w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG6} height={100} width={100}  className="absolute block w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG7} height={100} width={100}  className="absolute mix-blend-darken block w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG8} height={100} width={100}  className="absolute block w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG9} height={100} width={100}  className="absolute block w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG10} height={100} width={100} className="absolute block p-28 w-2/3 lg:w-1/2 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src={IMG3} height={100} width={100}  className="absolute block lg:w-1/2 w-2/3 lg:w-1/2 p-28 h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <img src={IMG2} height={100} width={100}className="absolute block  lg:w-1/2 w-2/3  h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
{/*       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={IMG11} height={100} width={100}  className="absolute block w-1/3  h-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
         */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={IMG4} className="absolute block w-1/2  h-fit -translate-x-1/2 -translate-y-1/2 top-2/3 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={IMG5} className="absolute block w-1/2  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <div className="absolute z-30 flex my-3 -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="9"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 11" data-carousel-slide-to="10"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 12" data-carousel-slide-to="11"></button>
    </div>
  
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

  )
}

export default index
