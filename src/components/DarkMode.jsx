import React, { useEffect, useState } from 'react'
import darkPng from '../assets/website/dark-mode-button.png'
import lightPng from '../assets/website/light-mode-button.png'

const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


return (
    <div className='relative' >
       <img src={darkPng} alt="mode" className={`w-12  z-[100]   cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme==='light' ? 'opacity-0' : 'opacity-100'}`} onClick={changeTheme}/>

        <img src={lightPng} alt="mode" className={`w-12 absolute top-0 left-0    z-[100] cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme==='dark' ? 'opacity-0' : 'opacity-100'}`} onClick={changeTheme}/>
    </div>
)
}

export default DarkMode