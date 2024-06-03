import React from 'react'
import {Link} from 'react-router-dom'
import psglogo from './psglogo.png'
function index() {
  return (
   <>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/port" className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse">
            <img src={psglogo} className="h-12 mix-blend-darken opacity-60" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Psgpraveen</span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:7985942726" className="text-sm  text-gray-500 dark:text-white hover:underline">+91 7985942726</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="/port" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <Link to="/project" className="text-gray-900 dark:text-white hover:underline">Projects</Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-900 dark:text-white hover:underline">ABOUT</Link>
                </li>
                <li>
                    <a href="#comment" className="text-gray-900 dark:text-white hover:underline">Comment</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

   </>
  )
}

export default index
