import { Box, Image, Text } from "./globals"
import { AnimatePresence } from 'framer-motion';

export default function CollapseCard({
    key="a",
    index,
    content,
    state,
    onClick = ()=>{}
}){
    return(
        <Box key={key} initial={{ height: 'fit-content' }} animate={{ height: state === index ? 'fit-content' : '85px', transition:{ delay: 0.2 } }} transition={{ duration: 0.3 }} width="100%" bgColor="#27274C" borderRadius="15px" margin="10px 0px" padding="20px" flexDir="column">
            <Box aliIt="center" width="100%" justCont="space-between">
                <Box aliIt="center">
                    <Image src={`/Icons/${content.title}.png`} width={45} height={45} priority />
                    <Text padding="0px 30px" fontWeight="700">{content.title}</Text>
                </Box>
                <Image src={`/Icons/Arrow.png`} width={20} height={20} style={{ transform: `rotate(${state === index ? "90deg" : "0"})`, transition: 'transform 0.1s ease-in-out'}} onClick={onClick} priority />
            </Box>
            <AnimatePresence initial={false}>
                {state == index && 
                    <Text initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay: 0.4 } }} exit={{ opacity: 0, transition:{duration: 0.2} }}  padding="30px">{content.content}</Text>
                }
            </AnimatePresence>
        </Box>
    )
}