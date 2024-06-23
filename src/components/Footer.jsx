import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../assets/food-logo.png";

const Footer = () => {



    return (
        <div className='bg-gray-100 dark:bg-gray-950 dark:text-white'>

            <div className='max-w-[1200px] mx-auto'>

                <div className="grid md:grid-cols-3 py-5">

                    <div className="py-8 px-4">
                        <h3 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                            <img src={footerLogo} alt="footer-logo" className='max-w-[50px]' />
                            FOODIE
                        </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi provident cupiditate voluptatum doloribus autem incidunt unde, culpa est nesciunt distinctio?</p>
                        <br />



                        <div className='flex items-center gap-3 mt-3'>
                            <FaLocationArrow />
                            <p>Ahmedabad, Gujrat</p>
                        </div>

                        <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt />
                            <p>+91 989889898</p>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>



                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2">

                        <div className="">
                            <div className="py-8 px-4 ">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className={`flex flex-col gap-3`}>
                                    <li className="cursor-pointer">Home</li>
                                    <li className="cursor-pointer">About</li>
                                    <li className="cursor-pointer">Services</li>
                                    <li className="cursor-pointer">Login</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-8 px-4 ">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important   Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer">Home</li>
                                    <li className="cursor-pointer">About</li>
                                    <li className="cursor-pointer">Services</li>
                                    <li className="cursor-pointer">Login</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-8 px-4 ">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important  Links
                                </h1>
                                {/* <ul className="list-disc list-inside"> */}
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer">Home</li>
                                    <li className="cursor-pointer">About</li>
                                    <li className="cursor-pointer">Services</li>
                                    <li className="cursor-pointer">Login</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

            <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved 
          </div>


        </div>
    )
}

export default Footer