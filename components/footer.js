import { Container, Box, H4 } from "./globals"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){

    const Links = [
        {image:"YouTube", url:"https://www.youtube.com/channel/UCztvL6zXMKsyyJ1EfNsNpGQ"},
        {image:"GitHub", url:"https://github.com/anagarango"},
        {image:"LinkedIn", url:"https://www.linkedin.com/in/ana-arango-08592122a/"}
    ]
    return(
            <Box position="fixed" left="0" bottom="0" height="5vh" width="100vw" bgColor="#1E1E41" aliIt="center" padding="0 20px" justCont="space-between" zIndex="5">
                <Box>
                    {Links.map((o,i)=>(<Link href={o.url} style={{marginRight:"10px"}}>
                            <Image src={`/${o.image}.png`} title={o} width={23} height={23}></Image>
                        </Link>
                    ))}
                </Box>
                <H4 color="#9D95DC">Since 2021 • Ana Arango</H4>
            </Box>
    )
}


