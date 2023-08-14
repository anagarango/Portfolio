import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import { Box, Image, Heading, Text, Tag, CTA } from "./globals"
import Animate from "./heading"
import Reveal from "./animationReveal"
import { motion, useInView, useAnimation } from 'framer-motion'

export default function Card({
    type="0",
    alt,
    src,
    heading,
    preview,
    tech
}){
    const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      // Start the animation for each tag individually
      techControls.forEach((control, index) => {
        control.start({opacity:1, x:0, y:0});
      });
    }
  }, [isInView]);

  const techControls = tech.map(() => useAnimation());
    return(
        <Reveal starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} className={type % 2 == 0 ? "projectcard" : "projectcard right"} padding="40px 0px" aliIt="center" width="100%">
            <Image className="projectcardimage" initial={{scale:0.9}} whileHover={{scale: 1.0, border: '2px solid rgba(157, 149, 220, 0.9)', borderRadius: '25px', padding: '10px'}} transition={{ duration: 0.3 }} alt={alt} src={src} width={200} height={200} style={{width:"45%", height:"450px", objectFit: "cover", borderRadius:"15px", zIndex:"100"}}/>
            <Box className="projectcardbox" flexDir="column" width="55%" height="100%" justCont="center" margin={type % 2 == 0 ? "0 0 0 20px" : "0 20px 0 0"}>
                <Animate width="fit-content" type="heading" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} color='#9DFFFF' fSize="25px" padding="10px 0" text={heading} />
                <Animate width="fit-content" type="text" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} text={preview} />
                <Box ref={ref} className="projectcardtech" flexWrap="wrap" padding="20px 0px" overflow="hidden">
                    {tech.map((text, index) => (
                        <Tag key={index} initial={type % 2 == 0 ? {opacity:0, x:-275} : {opacity:0, x:275}} animate={techControls[index]} transition={{ duration: 0.5, delay: index * 0.1}} >
                        {text}
                        </Tag>
                    ))}
                </Box>
                <Reveal width="fit-content" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"}>
                  <Link href={heading} style={{textDecoration:"none"}}>
                    <CTA>Read More</CTA>
                    </Link>
                </Reveal>
            </Box>
        </Reveal>
    )
}