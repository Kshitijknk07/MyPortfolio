import { assets, skillCategories } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="services" 
      className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className='text-center mb-2 text-lg font-Ovo'>
        What i Work With
      </motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Technical Skills</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        A comprehensive overview of my technical skills across various domains of software development.</motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='max-w-4xl mx-auto border border-gray-300 rounded-lg p-8 shadow-md dark:bg-gray-800/30'>
            {skillCategories.map(({icon, title, skills}, index)=>(
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 ${index !== skillCategories.length - 1 ? 'pb-8 border-b border-gray-200 dark:border-gray-700' : ''}`}>
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full p-3 shrink-0 mx-auto md:mx-0">
                        <Image src={icon} alt={title} className='w-10 h-10 object-contain'/>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 dark:text-gray-300'>
                            {skills.split(', ').map((skill, i) => (
                                <span key={i} className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
                                    {skill}
                                </span>
                            ))}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Services
