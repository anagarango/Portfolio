import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import { Box, Image, Heading, Text, Tag, CTA } from "./globals"
import Animate from "./heading"
import Reveal from "./animationReveal"
import { motion, useInView, useAnimation } from 'framer-motion'

export default function WorkCard({
    type="0",
    role,
    workplace,
    preview,
    date,
    tech,
    link
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
        <Reveal starting={"hiddenFromLeft"} flexDir="column" margin="20px 0px" padding="30px" aliIt="stretch" width="100%" bgColor='rgb(39, 39, 76)' borderRadius="10px" overflow="hidden">
          <Box width="100%" justCont="space-between">
            <Animate type="heading" starting={"hiddenFromLeft"} color='#9DFFFF' fSize="19px" text={role} />
            <Animate type="text" starting={"hiddenFromLeft"}  color='rgb(120, 120, 150)' fontWeight="600" text={date} />
          </Box>

          <Animate width="fit-content" type="text" starting={"hiddenFromLeft"} color='rgb(120, 120, 150)' fSize="18px" padding="0 0 10px 0" fontWeight="600" text={workplace} />
          <Animate width="fit-content" type="text" starting={"hiddenFromLeft"} text={preview} />
          <Box ref={ref} className="projectcardtech" flexWrap="wrap" padding="20px 0px" overflow="hidden">
              {tech.map((text, index) => (
                  <Tag key={index} initial={{opacity:0, x:-275}} animate={techControls[index]} transition={{ duration: 0.5, delay: index * 0.1}} >
                  {text}
                  </Tag>
              ))}
          </Box>
          <Reveal width="fit-content" starting={"hiddenFromLeft"}>
            <Link href={link} target="_blank" style={{textDecoration:"none"}}>
              <CTA>Visit</CTA>
              </Link>
          </Reveal>
            
        </Reveal>
    )
}