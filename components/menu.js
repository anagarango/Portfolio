import { Container, Box, H4 } from "./globals"
import Image from "next/image"

export default function Menu(){
    return(
        <Container height="100vh" position="fixed" left="0" top="0" flexDir="column">
            <Box width="70px" height="95%" bgColor="#28284D" flexDir="column" aliIt="center">
                <Image src="/Icons/CollaboratorFemale.svg" width={50} height={50} style={{display:"flex", margin:"25px 0px"}}></Image>
                <Image src="/Icons/Albums.svg" width={50} height={50} style={{display:"flex", marginBottom:"25px"}}></Image>
                <Image src="/Icons/SourceCode.svg" width={50} height={50} style={{display:"flex", marginBottom:"25px"}}></Image>
                <Image src="/Icons/Resume.svg" width={50} height={50} style={{display:"flex", position:"absolute", bottom:0, marginBottom:"5%"}}></Image>
            </Box>
            <Box height="5%" bgColor="#1E1E41" aliIt="center" padding="0 20px" justCont="space-between">
                <H4 color="#9D95DC">Intro</H4>
                <H4 color="#9D95DC">Since 2021 • Ana Arango</H4>
            </Box>
        </Container>
    )
}


