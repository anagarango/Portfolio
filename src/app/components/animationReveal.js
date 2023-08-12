import React, {useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function Reveal({
  children, 
  widthReveal="fit-content", 
  starting, 
  delay=0.8,
}){
  const ref = useRef(null)
  const isInView = useInView(ref, {once:false})

  const mainControls = useAnimation()

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView])

  return (
    <div ref={ref} style={{position:"relative", width:widthReveal, overflow:"hidden"}}> 
      <motion.div 
        variants={{
          hiddenFromLeft:{opacity:0, x:-275},
          hiddenFromRight:{opacity:0, x:275},
          hiddenFromTop:{opacity:0, y:-275},
          hiddenFromBottom:{opacity:0, y:275},
          visible:{opacity:1, x:0, y:0}
        }}
        initial={starting}
        animate={mainControls}
        transition={{duration:0.7, delay:delay}}
      >{children}</motion.div>
    </div>
  )
}