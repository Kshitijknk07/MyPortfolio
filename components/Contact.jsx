import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    try {
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;

      if (!name || !email || !message) {
        setResult("Please fill all fields");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setResult("Please enter a valid email address");
        return;
      }

      setTimeout(() => {
        setResult("Form submitted successfully! I'll get back to you soon.");
        event.target.reset();
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4 
        initial={{ y: -20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
        action="https://formspree.io/f/your-formspree-id"
        method="POST"
      >
        <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text" 
            placeholder='Enter your name' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-300 rounded-md bg-white focus:border-primary dark:bg-darkHover/30 dark:border-white/90' 
            name='name'
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email" 
            placeholder='Enter your email' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-300 rounded-md bg-white focus:border-primary dark:bg-darkHover/30 dark:border-white/90' 
            name='email'
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows='6' 
          placeholder='Enter your message' 
          required
          className='w-full p-4 outline-none border-[0.5px] border-gray-300 rounded-md bg-white mb-6 focus:border-primary dark:bg-darkHover/30 dark:border-white/90' 
          name='message'
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-primary hover:bg-primary/90 text-white rounded-full mx-auto duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        >
          Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        {result && (
          <div className='mt-4 text-center'>
            <p className={`py-2 px-4 rounded ${
              result.includes("success") 
                ? "bg-success/10 text-success dark:bg-success/30 dark:text-success/90" 
                : "bg-warning/10 text-warning dark:bg-warning/30 dark:text-warning/90"
            }`}>
              {result}
            </p>
          </div>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact
