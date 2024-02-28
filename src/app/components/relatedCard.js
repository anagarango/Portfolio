import React, {useEffect, useRef} from 'react'
import { Box, Image, Heading, Text, Tag, CTA } from "./globals"
import Animate from "./heading"
import { motion, useInView, useAnimation } from 'framer-motion'

export default function RelatedCard({
    alt,
    src,
    heading,
    preview
}){
    return(
        <Box className="projectcard"  margin="15px 0px" aliIt="stretch" width="100%" height="fit-content" borderRadius="10px" overflow="hidden" bgColor='rgb(39, 39, 76)' initial={{ border: '1px solid rgba(157, 149, 220, 0)' }} whileHover={{ border: '1px solid rgba(157, 149, 220, 1)' }} transition={{ duration: 0.2}} >
            <Image className="projectcardimage" alt={alt} src={src} style={{objectFit:"cover", width:"20%"}} />
            <Box className="projectcardbox" flexDir="column" width="100%" height="fit-content" justCont="center" padding="20px">
                <Heading width="fit-content" color='#9DFFFF' fSize="19px" padding="0 0 10px 0">{heading}</Heading>
                <Text width="fit-content">{preview}</Text>
            </Box>
        </Box>

    )
}