import Tech from '@/data/tools.json'
// import Image from "next/image"
import { Box, Image } from "./globals"
import { useEffect, useState } from 'react';

export default function TechSlideshow(){
  const [imagesArray, setImagesArray] = useState([])

  async function fetchData() {
    try {
      const response = await fetch('https://anagarango.starbooks.ca/api/projectLogoImages');
      const data = await response.json();
      setImagesArray(data.fileNames)
    } catch (error) {
      console.error('Error fetching file names:', error);
    }  
  }

  useEffect(()=>{
    fetchData()
  },[])
    return(
        <Box className="slideshow" style={{position:"relative", overflow:"hidden", background:"linear-gradient(to right, rgba(163,153,226,0) 20%, rgba(163,153,226,1) 50%,rgba(163,153,226,0) 80%)", width:"100%"}}>
            <Box className='sheesh' style={{display:"flex", position:"relative", alignItems:"flex-start", justifyContent:"flex-start", padding:"10px"}}>
              {imagesArray && imagesArray.map((o,i)=>(
                <Image key={i} title={o.slice(0, -4)} className="techLogo" src={`/HorizontalLogos/${o}`} alt={o} width={45} height={45} margin="0 25px"></Image>
              ))}
              {imagesArray && imagesArray.map((o,i)=>(
                  <Image key={i} title={o.slice(0, -4)} className="techLogo" src={`/HorizontalLogos/${o}`} alt={o} width={45} height={45} margin="0 25px"></Image>
              ))}
            </Box>
        </Box>
    )
}