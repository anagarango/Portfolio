import { Box, Image, Heading, Text, Tag, CTA } from "./globals"

export default function Card({
    type="left",
    key="a",
    alt,
    src,
    heading,
    preview,
    tech,
    onClick = ()=>{}
}){
    if(type == "left"){
        return(
            <Box key={key} padding="50px 0px" aliIt="center" width="100%">
                <Image alt={alt} src={src} width={200} height={200} style={{width:"40%", height:"450px", paddingRight:"5%", objectFit: "cover"}}/>
                <Box flexDir="column" width="55%" height="100%" justCont="center">
                    <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="25px" padding="10px 0" width="100%">{heading}</Heading>
                    <Text>{preview}</Text>
                    <Box flexWrap="wrap" padding="20px 0px">
                    {tech.map((text, index)=>(
                        <Tag key={index}>{text}</Tag>
                    ))}
                    </Box>
                    <CTA onClick={onClick}>Read More</CTA>
                </Box>
            </Box>
        )
    }

    if(type == "right"){
        return(
            <Box key={key} padding="50px 0px" aliIt="center" width="100%">
                <Box flexDir="column" width="55%" height="100%" justCont="center">
                    <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="25px" padding="10px 0" width="100%">{heading}</Heading>
                    <Text>{preview}</Text>
                    <Box flexWrap="wrap" padding="20px 0px">
                    {tech.map((text, index)=>(
                        <Tag key={index}>{text}</Tag>
                    ))}
                    </Box>
                    <CTA onClick={onClick}>Read More</CTA>
                </Box>
                <Image alt={alt} src={src} width={200} height={200} style={{width:"40%", height:"450px", paddingLeft:"5%", objectFit: "cover"}}/>
            </Box>
        )
    }
}