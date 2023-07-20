import Tech from '@/data/tools.json'
// import Image from "next/image"
import { Box, Image } from "./globals"
import { useEffect, useState } from 'react';

export default function TechSlideshow(){
  const [imagesArray, setImagesArray] = useState([])

  async function fetchData() {
    try {
      const response = await fetch('/api/projectLogoImages');
      const data = await response.json();

      const horizontalLogosImages = []
      for(var x = 0; x < data.fileNames.length; x++){
        if(data.fileNames[x] !== ".DS_Store"){
          horizontalLogosImages.push(data.fileNames[x])
        }
      }

      setImagesArray(horizontalLogosImages)
      
    } catch (error) {
      console.error('Error fetching file names:', error);
    }  
  }

  useEffect(()=>{
    fetchData()
  },[])
    return(
        <Box style={{position:"relative", overflow:"hidden", background:"linear-gradient(to right, rgba(163,153,226,0) 20%, rgba(163,153,226,0.5) 50%,rgba(163,153,226,0) 80%)", width:"100%"}}>
            <Box className='sheesh' style={{display:"flex", position:"relative", alignItems:"flex-start", justifyContent:"flex-start", padding:"10px"}}>
              {imagesArray && imagesArray.map((o,i)=>(
                  <Image key={i} title={o.slice(0, -4)} className="techLogo" src={`/HorizontalLogos/${o}`} alt={o} width="auto" height="50px" margin="0 25px"></Image>
              ))}
              {imagesArray && imagesArray.map((o,i)=>(
                  <Image key={i} title={o.slice(0, -4)} className="techLogo" src={`/HorizontalLogos/${o}`} alt={o} width="auto" height="50px" margin="0 25px"></Image>
              ))}
            </Box>
        </Box>
    )
}