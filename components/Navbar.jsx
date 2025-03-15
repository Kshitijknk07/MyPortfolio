import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setIsScroll(window.scrollY > 50);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
            {/* Remove the gradient div completely */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                isScroll 
                    ? "bg-white/80 backdrop-blur-lg shadow-sm dark:bg-darkTheme/80 dark:shadow-white/20" 
                    : "bg-transparent"
            }`}>
                <a href="#top" className="flex items-center mr-14">
                    <span className={`text-3xl font-semibold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "var(--font-dancing-script)" }}>KNK</span>
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 ml-1 mb-2.5"></span>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                    isScroll 
                        ? "" 
                        : "bg-white/80 shadow-sm backdrop-blur-lg dark:border dark:border-white/50 dark:bg-darkTheme/50"
                }`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={()=> setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-primary rounded-full ml-4 font-Ovo hover:bg-primary hover:text-white transition-colors dark:border-white/50'>
                        Contact 
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
