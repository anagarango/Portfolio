import { Box, Hero, Text } from "./globals"
import { motion, AnimatePresence } from "framer-motion";

export default function BrowserModel({
    array,
    state,
    onClick=()=>{},
}){
    return(
        <Box width="90%" minHeight="200px" margin="0 50px" border="1px solid grey" borderRadius="10px" flexDir="column">
        <Hero src="/SVG/Browser.svg" bgSize="cover" bgRepeat="no-repeat" width="100%" height="45px">
          <Box width="100%" height="100%" margin="0 0 0 100px" aliIt="center" style={{overflowX: "scroll", whiteSpace: "nowrap"}}>
            {array.map((o,i) => (
              <Text value={i} onClick={onClick} key={i} cursor="pointer" aliIt="center" height="fit-content" minWidth="fit-content" padding="5px 10px" bgColor={array[state].title === o.title ? "#A399E2" : "#28284D"} style={{transition: "background-color 0.5s ease-out"}} borderRadius="6px" margin="0 10px 0 0">{o.title}</Text>
            ))}
          </Box>
        </Hero>
        <AnimatePresence mode='wait'>
                <motion.div key={array[state] ? array[state].title : "empty"} initial={{ opacity: 0, display:"none" }} animate={{ opacity: 1, display:"flex"}} exit={{ opacity: 0, display:"none"}} transition={{ duration: 1}} style={{display:"flex", flexDirection:"column", padding:"25px", transition: "0.5s ease-out"}}>
                  <Text fontWeight="700" padding="0 0 15px 0">{state.title}</Text>
                  <Text padding="0 0 10px 0">{array[state].p1}</Text>
                  <Text padding="0 0 10px 0">{array[state].p2}</Text>
                  <p style={{color:"white"}}><strong style={{fontWeight:"800", color:"#EA638D"}}>{array[state].projectName}</strong>{array[state].project}</p>
                </motion.div>
            </AnimatePresence>
      </Box>
    )
}