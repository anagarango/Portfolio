import { Box, Image, Heading } from "./globals"

export default function TechCard({
    alt,
    src,
    heading
}){
    return(
        <Box whileHover={{border: '2px solid rgba(157, 149, 220, 0.9)', boxShadow:"inset 0px 5px 12px 10px #1E1E41"}} transition={{ duration: 0.1 }} padding="15px" aliIt="center" justCont="center" width="110px" height="135px" flexDir="column" bgColor="#27274C" borderRadius="10px">
            <Image alt={alt} src={`/HorizontalLogos/${src}.png`} width={40} height={40} style={{objectFit: "contain"}}/>
            <Heading color='white' fontWeight="500"  fSize="14.5px" padding="20px 0 0 0" width="100%" textAlign="center">{heading}</Heading>
        </Box>
    )
}