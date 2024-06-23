import React, { useState } from 'react';
import { FaBars, FaCartShopping } from 'react-icons/fa6';

import LogoImg from '../assets/food-logo.png'
import DarkMode from './DarkMode';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    
    return (
        <header className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative'>

            <div className="container py-3 sm:py-0">

                <div className="flex justify-between items-center">

                    <div className="logo">
                        <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                            <img src={LogoImg} alt="logo" className='w-10 object-cover' />
                            Foodie
                        </a>
                    </div>

                    <nav className='flex items-center gap-4 '>

                        <div className=''>
                            <DarkMode />
                        </div>

                        <ul className='hidden md:flex'>
                            <li>
                                <a href="#" className='inline-block p-4 hover:text-primary'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block p-4 hover:text-primary'>About</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block p-4 hover:text-primary'>Contact</a>
                            </li>
                        </ul> 

                        {showNav && <ul className='absolute top-14 sm:top-9 left-0 bg-gray-200 w-full flex flex-col z-10 px-8 shadow-2xl  md:hidden gap-4'>
                            <li>
                                <a href="#" className='inline-block p-4 hover:text-primary'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block p-4 hover:text-primary'>About</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block p-4 hover:text-primary'>Contact</a>
                            </li>
                        </ul> }

                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                            Order
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>

                        <FaBars size={25} className='md:hidden' onClick={()=> setShowNav(!showNav)} />

                    </nav>


                </div>





            </div>



        </header>
    )
}

export default Navbar