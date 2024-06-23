import React, { useState } from 'react'

import BiryaniImg1 from "../assets/biryani3.png";
import BiryaniImg2 from "../assets/biryani5.png";
import BiryaniImg3 from "../assets/biryani2.png";
import Vector from "../assets/vector3.png";

const ImageList = [
    {
        id: 1,
        img: BiryaniImg1,
    },
    {
        id: 2,
        img: BiryaniImg2,
    },
    {
        id: 3,
        img: BiryaniImg3,
    },
];

const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Hero = () => {

    const [imageId, setImageId] = useState(BiryaniImg1)

    return (
        <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>

            <div className='container pb-8 sm:pb-0'>
                <div className="grid grid-cols-1 sm:grid-cols-2">

                    <div
                        data-aos="zoom-out"
                        data-aos-duration="400"
                        data-aos-once="true"
                        className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                            Welcome to the <span className='text-primary'>Foodie</span> Zone
                        </h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sed dolorem eligendi officiis necessitatibus minima!</p>

                        <div className=''>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
                                Order Now
                            </button>
                        </div>

                    </div>

                    <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>

                        <div className='flex justify-center items-center h-[300px] sm:h-[450px]'>
                            <img src={imageId} alt="food"

                                className='w-[300px] sm:w-[450px] mx-auto animate-spin-slow'
                            />
                        </div>

                        <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                            {
                                ImageList.map(img => {
                                    return (
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-duration="400"
                                            data-aos-once="true"
                                            key={img.id} src={img.img} alt="img" className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                                            onClick={() => setImageId(img.img)} />
                                    )
                                })
                            }
                        </div>




                    </div>


                </div>
            </div>

        </div>
    )
}

export default Hero