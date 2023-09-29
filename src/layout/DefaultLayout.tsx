import React from 'react'
import FooterSection from '../components/footer/FooterSection'
import NavBar from '../components/header/NavBar'
import { motion } from 'framer-motion'

interface DefaultLayoutProps{
    children:any
}

const DefaultLayout = ({children}:DefaultLayoutProps) => {
  return (
    <>
    <NavBar />
      <motion.div className="w-screen min-h-[80vh]  bg-[#eee]">
        {children}
      </motion.div>
      <FooterSection />
      </>
  )
}

export default DefaultLayout