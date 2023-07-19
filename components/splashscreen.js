import { Box } from "@/components/globals.js";
import Lottie from "lottie-react";
import LoadingLogo from '@/public/LoadingSplash.json'
import { useEffect } from "react";

export default function SplashScreen(){
  return(
    <>
      <Box id="splashscreen" width="100vw" height="100vh" bgColor="#0a002c" justCont="center" aliIt="center" position="fixed" zIndex="20">
        <Lottie style={{height:"40%", width:"auto"}} animationData={LoadingLogo} loop={false} autoPlay={true}  />
      </Box>
    </>
  )
}