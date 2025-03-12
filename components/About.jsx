import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='max-w-2xl font-Ovo'>
                I am a Full Stack Web Developer currently pursuing a B.E. in Computer Science and Engineering from Dayananda Sagar College Of Engineering. I have worked with languages like JavaScript, TypeScript, Python, and Rust, and have experience with frameworks and libraries such as ReactJS, NodeJS, ExpressJS, NextJS, Prisma, and TailwindCSS. I have also gained knowledge of databases that includes MongoDB, Firebase, and PostgreSQL, while I have also covered Devops tools like Docker, Kubernetes, Terraform, Jenkins, CircleCI, Prometheus, and Grafana. My passion lies in full-stack web development. I am a dedicated and enthusiastic web developer with a passion for creating digital solutions.
                </p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
