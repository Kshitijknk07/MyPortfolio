import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <div className="mx-auto mb-4 flex items-center justify-center">
          <span className={`text-4xl font-semibold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "var(--font-dancing-script)" }}>KNK</span>
          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 ml-1 mb-3"></span>
        </div>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            knk200407@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Kshitij Narayan Kulkarni.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Kshitijknk07">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/kshitij-narayan-kulkarni-784a4a259/">LinkedIn</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
