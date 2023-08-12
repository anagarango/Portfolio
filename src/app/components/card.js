import { Box, Image, Heading, Text, Tag, CTA } from "./globals"
import Animate from "./heading"
import Reveal from "./animationReveal"
// starting={i % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"}

export default function Card({
    type="0",
    alt,
    src,
    heading,
    preview,
    tech,
    onClick = ()=>{}
}){
    return(
        <Box className={type % 2 == 0 ? "projectcard" : "projectcard right"} padding="40px 0px" aliIt="center" width="100%">
            <Reveal starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"}>
                <Image className="projectcardimage" initial={{scale:0.9}} whileHover={{scale: 1.0, border: '2px solid rgba(157, 149, 220, 0.9)', borderRadius: '25px', padding: '10px'}} transition={{ duration: 0.3 }} alt={alt} src={src} width={200} height={200} style={{width:"100%", height:"450px", objectFit: "cover", borderRadius:"15px"}}/>
            </Reveal>
            <Box className="projectcardbox" flexDir="column" width="55%" height="100%" justCont="center" margin={type % 2 == 0 ? "0 0 0 20px" : "0 20px 0 0"}>
                <Animate width="fit-content" type="heading" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} delay={0.9} color='#9DFFFF' fSize="25px" padding="10px 0" text={heading} />
                <Animate width="fit-content" type="text" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} delay={0.9} text={preview} />
                <Box className="projectcardtech" flexWrap="wrap" padding="20px 0px">
                {tech.map((text, index)=>(
                    <Reveal key={index} width="fit-content" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} delay={0.1*index}>
                        <Tag>{text}</Tag>
                    </Reveal>
                ))}
                </Box>
                <Reveal width="fit-content" starting={type % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"} delay={0.7}>
                    <CTA onClick={onClick}>Read More</CTA>
                </Reveal>
            </Box>
        </Box>
    )
}