import Tech from '@/data/tools.json'
// import Image from "next/image"
import { Box, Image } from "./globals"

export default function TechSlideshow(){
    return(
        <Box className="slideshow" style={{position:"relative", overflow:"hidden", background:"linear-gradient(to right, rgba(163,153,226,0) 20%, rgba(163,153,226,1) 50%,rgba(163,153,226,0) 80%)", width:"115%", left:"60px"}}>
            <Box className='sheesh' style={{display:"flex", position:"relative", alignItems:"flex-start", justifyContent:"flex-start", padding:"10px"}}>
              {Tech.map((o,i)=>(
                <Image key={i} title={o} className="techLogo" src={`/HorizontalLogos/${o}.png`} alt={o} width={45} height={45} margin="0 25px"></Image>
              ))}
              {Tech.map((o,i)=>(
                  <Image key={i} title={o} className="techLogo" src={`/HorizontalLogos/${o}.png`} alt={o} width={45} height={45} margin="0 25px"></Image>
              ))}
            </Box>
        </Box>
    )
}