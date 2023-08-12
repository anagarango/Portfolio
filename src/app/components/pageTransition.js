import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function PageTransition({
  children,
  initialState,
  animateState,
  exitState,
}){
  const r = useRouter()
  
  return (
    <AnimatePresence mode='wait'> 
      <motion.div 
        key={r.route}
        variants={{
          initialState:{y:`${initialState}`},
          animateState:{y:`${animateState}`},
          exitState:{y:`${exitState}`}
        }}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:1, delay:1}}
      >{children}</motion.div>
    </AnimatePresence>
  )
}