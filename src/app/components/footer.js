import { Box, Heading } from "./globals"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){

    const Links = [
        {image:"Github/github", url:"https://github.com/anagarango"},
        {image:"LinkedIn", url:"https://www.linkedin.com/in/ana-arango-08592122a/"},
        {image:"Email", url:"/#Contact"}
    ]
    return(
        <Box position="fixed" left="0" bottom="0" height="35px" width="100vw" bgColor="#2B255B" aliIt="center" padding="20px 17px" justCont="space-between" zIndex="5" borderTop="3px solid #0a002c">
            <Box aliIt="center">
                {Links.map((o,i)=>(
                    <a key={i} target="_blank" href={o.url} style={{marginRight:"15px", marginBottom:"-1px", scrollBehavior:"smooth"}} rel="noopener noreferrer">
                        <Image alt={o.image} src={`/${o.image}.png`} title={o.image} width={22} height={22} style={{height:"80%", width:"auto"}}></Image>
                    </a>
                ))}
            </Box>
            <Heading fSize="16px" color="#9D95DC">Since 2021 • Ana Arango</Heading>
        </Box>
    )
}


