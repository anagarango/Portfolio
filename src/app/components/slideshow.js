import { Box, Image, Heading } from "./globals"
import { useEffect, useState } from 'react';

export default function TechSlideshow(){
  const [imagesArray, setImagesArray] = useState([])

  async function fetchData() {
    try {
      const response = await fetch('../api/projectLogoImages');
      const data = await response.json();

      const horizontalLogosImages = []
      for(var x = 0; x < data.length; x++){
        if(data[x] !== ".DS_Store"){
          horizontalLogosImages.push(data[x])
        }
      }

      setImagesArray(horizontalLogosImages)
      
    } catch (error) {
      console.log('Error fetching file names:', error);
    }  
  }

  useEffect(()=>{
    fetchData()
  },[])
    return(
        <Box style={{position:"relative", overflow:"hidden", background:"linear-gradient(to right, rgba(163,153,226,0) 20%, rgba(163,153,226,0.5) 50%,rgba(163,153,226,0) 80%)", width:"100%"}}>
            <Box className='sheesh' style={{display:"flex", position:"relative", alignItems:"flex-start", justifyContent:"flex-start", padding:"10px"}}>
              {imagesArray && imagesArray.map((o,i)=>(
                <Box key={i} flexDir="column" aliIt="center" justCont="space-between" width="fit-content" margin="0px 10px">
                  <Image title={o.slice(0, -4)} className="techLogo" src={`/HorizontalLogos/${o}`} alt={o} width="auto" height="50px" margin="0 25px"></Image>
                  <Heading style={{whiteSpace:"nowrap"}} fSize="15px" color='white' textAlign="center" padding="15px 0 0 0">{o.slice(0, -4)}</Heading>
                </Box>
                  
              ))}
              {imagesArray && imagesArray.map((o,i)=>(
                  <Box key={i} flexDir="column" aliIt="center" justCont="space-between" width="fit-content" margin="0px 10px">
                  <Image title={o.slice(0, -4)} className="techLogo" src={`/HorizontalLogos/${o}`} alt={o} width="auto" height="50px" margin="0 25px"></Image>
                  <Heading style={{whiteSpace:"nowrap"}} fSize="15px" color='white' textAlign="center" padding="15px 0 0 0">{o.slice(0, -4)}</Heading>
                </Box>
              ))}
            </Box>
        </Box>
    )
}