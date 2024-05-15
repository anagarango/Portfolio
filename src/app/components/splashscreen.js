import { Box } from "@/src/app/components/globals.js";
import Lottie from "lottie-react";
import LoadingLogo from '@/public/LoadingSplash.json'

export default function SplashScreen(){
  return(
    <>
      <Box id="splashscreen" width="100vw" height="100vh" maxHeight="100vh" bgColor="#0a002c" justCont="center" aliIt="center" position="fixed" zIndex="1000">
        <Lottie style={{height:"40%", width:"auto"}} animationData={LoadingLogo} loop={false} autoPlay={true}  />
      </Box>
    </>
  )
}