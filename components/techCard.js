import { Box, Image, Heading } from "./globals"

export default function TechCard({
    alt,
    src,
    heading
}){
    return(
        <Box whileHover={{border: '2px solid rgba(157, 149, 220, 0.9)'}} transition={{ duration: 0.1 }} padding="15px" aliIt="center" justCont="center" width="140px" height="160px" margin="10px 0" flexDir="column" bgColor="#27274C" borderRadius="15px">
            <Image alt={alt} src={`/HorizontalLogos/${src}.png`} width={65} height={65} style={{objectFit: "contain"}}/>
            <Heading color='white' fontFamily='Staatliches' fSize="18px" padding="20px 0 0 0" width="100%" textAlign="center">{heading}</Heading>
        </Box>
    )
}