import React from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function PageTransition({children}){
  const r = useRouter()
  
  return (
    <AnimatePresence mode='wait'> 
      <motion.div 
        key={r.route}
        variants={{
          initialState:{y:"100vh"},
          animateState:{y:0},
          exitState:{y:"100vh"}
        }}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:1}}
      >{children}</motion.div>
    </AnimatePresence>
  )
}