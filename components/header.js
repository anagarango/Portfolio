import { Container, Box, H4 } from "./globals"
import Image from "next/image"

export default function Header(){
    return(
            <Box width="70px" position="fixed" left="0" top="0"  height="95vh" bgColor="#28284D" flexDir="column" aliIt="center" zIndex="5">
                <Image src="/Icons/CollaboratorFemale.svg" width={40} height={40} style={{display:"flex", margin:"30px 0px"}}></Image>
                <Image src="/Icons/Albums.svg" width={40} height={40} style={{display:"flex", marginBottom:"30px"}}></Image>
                <Image src="/Icons/SourceCode.svg" width={40} height={40} style={{display:"flex", marginBottom:"30px"}}></Image>
                <Image src="/Icons/Resume.svg" width={40} height={40} style={{display:"flex", position:"absolute", bottom:0, marginBottom:"5%"}}></Image>
            </Box>
    )
}


