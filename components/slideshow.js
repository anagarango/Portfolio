import { Tech } from "@/data/tools"
import Image from "next/image"
import { Box, Text } from "./globals"

export default function TechSlideshow(){
    return(
        <Box style={{position:"relative", overflow:"hidden", background:"linear-gradient(to right, rgba(163,153,226,0) 20%, rgba(163,153,226,1) 50%,rgba(163,153,226,0) 80%)", width:"115%", margin:"0 -40px"}}>
            <Box className='sheesh' style={{display:"flex", position:"relative", alignItems:"flex-start", justifyContent:"flex-start", padding:"10px"}}>
              {Tech.map((o,i)=>(<Box flexDir="column" aliIt="center" width="160px">
                  <Image className="techLogo" src={`/HorizontalLogos/${o.src}`} alt={o.title} width={60} height={60}></Image>
                  <Text textAlign="center" padding="15px 0 0 0">{o.title}</Text>
                </Box>
              ))}
              {Tech.map((o,i)=>(<Box flexDir="column" aliIt="center" width="160px">
                  <Image className="techLogo" src={`/HorizontalLogos/${o.src}`} alt={o.title} width={60} height={60}></Image>
                  <Text textAlign="center" padding="15px 0 0 0">{o.title}</Text>
                </Box>
              ))}
            </Box>
        </Box>
    )
}