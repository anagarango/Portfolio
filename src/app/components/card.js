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
        <Reveal starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} className={type % 2 == 0 ? "projectcard" : "projectcard right"} margin="20px 0px" aliIt="stretch" width="100%" bgColor='rgb(39, 39, 76)' borderRadius="10px" overflow="hidden">
          <Image className="projectcardimage" initial={{border: '1px solid rgba(157, 149, 220, 0)'}} whileHover={{ border: '1px solid rgba(157, 149, 220, 1)', borderRadius:type % 2 == 0 ? "15px 0 0 15px" : "0 15px 15px 0", padding: '10px'}} transition={{ duration: 0.3 }} alt={alt} src={src} style={{width:"45%", objectFit: "cover"}}/>
          <Reveal className="projectcardbox" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"}  flexDir="column" width="100%" justCont="center" padding="30px">
            <Heading width="fit-content" type="heading" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} color='#9DFFFF' fSize="19px" padding="0 0 10px 0">{heading}</Heading>
            <Text width="fit-content" type="text" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"}>{preview}</Text>
            <Box ref={ref} className="projectcardtech" flexWrap="wrap" padding="20px 0px" overflow="hidden">
                {tech.map((text, index) => (
                    <Tag key={index} initial={type % 2 == 0 ? {opacity:0, x:-275} : {opacity:0, x:275}} animate={techControls[index]} transition={{ duration: 0.2, delay: index * 0.05}} >
                    {text}
                    </Tag>
                ))}
            </Box>
            <Link href={heading} style={{textDecoration:"none"}}>
              <CTA>Read More</CTA>
            </Link>
          </Reveal>
        </Reveal>
    )
}