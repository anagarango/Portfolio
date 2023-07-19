import { Box } from "@/components/globals.js";
import Lottie from "lottie-react";
import LoadingLogo from '@/public/Loading.json'
import { useEffect } from "react";

export default function SplashScreen(){
  return(
    <>
      <Box width="100vw" height="100vh" bgColor="#0a002c" justCont="center" aliIt="center" position="fixed" zIndex="10">
        <Lottie style={{height:"40%", width:"auto"}} animationData={LoadingLogo} autoPlay={true} />
      </Box>
    </>
  )
}