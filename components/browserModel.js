import { Box, Hero, Text, Image } from "./globals"
import { motion, AnimatePresence } from "framer-motion";

export default function BrowserModel({
    array,
    state,
    name,
    version="home",
    onClick=()=>{}
}){
    return(
        <Box width="100%" minHeight="250px" border="1px solid grey" borderRadius="10px" flexDir="column">
          <Hero src="/SVG/Browser.svg" bgSize="cover" bgRepeat="no-repeat" width="100%" height="45px">
            <Box width="100%" height="100%" margin="0 0 0 100px" aliIt="center" style={{overflowX: "scroll", whiteSpace: "nowrap"}}>
              {array && array.map((o,i) => (
                <Text key={i} value={i} onClick={onClick} cursor="pointer" aliIt="center" height="fit-content" minWidth="fit-content" padding="5px 10px" bgColor={array[state].title === o.title ? "#A399E2" : "#28284D"} style={{transition: "background-color 0.5s ease-out"}} borderRadius="6px" margin="0 10px 0 0">{o.title}</Text>
              ))}
            </Box>
          </Hero>
          <AnimatePresence mode='wait'>
            {version == "home" && 
              <Box initial={{ opacity: 0, display:"flex" }} animate={{ opacity: 1, display:"flex"}} exit={{ opacity: 0, display:"none"}} transition={{ duration: 1}} style={{display:"flex", flexDirection:"column", padding:"25px", transition: "0.5s ease-out"}}>
                <Text fontWeight="700" padding="0 0 15px 0">{array[state].title}</Text>
                <Text padding="0 0 10px 0">{array[state].p1}</Text>
                <Text padding="0 0 10px 0">{array[state].p2}</Text>
                <p style={{color:"white"}}><strong style={{fontWeight:"800", color:"#EA638D"}}>{array[state].projectName}</strong>{array[state].project}</p>
              </Box>
            }
            {version == "project" && 
              <Box initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 1}} padding="25px" transitionDiv="0.5s ease-out">
                <Box width="50%">
                  <Image src={array && `/${name}/${array[state].title}.gif`} width="100%" />
                </Box>
                <Box flexDir="column" width="50%" padding="0 0 0 25px" >
                  <Text fontWeight="700" padding="0 0 15px 0">{array && array[state].title}</Text>
                  <Text padding="0 0 15px 0">{array && array[state].content}</Text>
                </Box>
              </Box>
            }
          </AnimatePresence>
        </Box>
    )
}