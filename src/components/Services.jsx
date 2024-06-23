import React from 'react'
import Img from "../assets/biryani.png";
import Img2 from "../assets/biryani2.png";
import Img3 from "../assets/biryani4.png";
// import StarRatings from "react-star-ratings";
const ServicesData = [
    {
        id: 1,
        img: Img,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Chiken kari",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img3,
        name: "Cold Cofee",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];

const Services = () => {
    return (
        <div className='py-10'>

            <div className="container">

                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                    <h2 className='text-3xl font-bold '>Services</h2>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero fugiat sint eveniet cupiditate asperiores totam accusamus quod libero inventore!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-14 md:gap-5 place-items-center ">
                    {ServicesData.map(service => {
                        return (
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                key={service.id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 
                            dark:hover:bg-primary hover:bg-primary hover:text-white dark:text-white dark:hover:text-gray-800 duration-300 p-4 shadow-xl'>
                                <div className='h-[100px]'>
                                    <img src={service.img} alt={service.name} className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105  group-hover:rotate-6 duration-300 ' />
                                </div>
                                <div className='mt-7 p-4 text-center '>
                                    <h3 className='text-xl font-bold'>{service.name}</h3>
                                    <p className='text-gray-500 text-sm group-hover:text-white duration-300 line-clamp-2 dark:hover:text-gray-800 '>{service.description}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Services