import { Tech } from "@/data/tools"
// import Image from "next/image"
import { Box, Text, Image } from "./globals"

export default function TechSlideshow(){
    return(
        <Box style={{position:"relative", overflow:"hidden", background:"linear-gradient(to right, rgba(163,153,226,0) 20%, rgba(163,153,226,1) 50%,rgba(163,153,226,0) 80%)", width:"115%", margin:"0 -40px"}}>
            <Box className='sheesh' style={{display:"flex", position:"relative", alignItems:"flex-start", justifyContent:"flex-start", padding:"10px 10px 5px 10px"}}>
              {Tech.map((o,i)=>(
                <Image title={o.title} className="techLogo" src={`/HorizontalLogos/${o.src}`} alt={o.title} width={45} height={45} margin="0 25px"></Image>
              ))}
              {Tech.map((o,i)=>(
                  <Image title={o.title} className="techLogo" src={`/HorizontalLogos/${o.src}`} alt={o.title} width={45} height={45} margin="0 25px"></Image>
              ))}
            </Box>
        </Box>
    )
}