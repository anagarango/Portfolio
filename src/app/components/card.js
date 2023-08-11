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
            <Box className="projectcard" key={key} padding="30px 0px" aliIt="center" width="100%">
                <Image className="projectcardimage" initial={{scale:0.9}} whileHover={{scale: 1.0, border: '2px solid rgba(157, 149, 220, 0.9)', borderRadius: '25px', padding: '10px'}} transition={{ duration: 0.3 }} alt={alt} src={src} width={200} height={200} style={{width:"40%", height:"450px", marginRight:"20px", objectFit: "cover", borderRadius:"15px"}}/>
                <Box className="projectcardbox" flexDir="column" width="55%" height="100%" justCont="center">
                    <Heading color='#9DFFFF'  fSize="25px" padding="10px 0" width="100%">{heading}</Heading>
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
            <Box className="projectcard right" key={key} padding="30px 0px" aliIt="center" width="100%">
                <Box className="projectcardbox" flexDir="column" width="55%" height="100%" justCont="center">
                    <Heading color='#9DFFFF'  fSize="25px" padding="10px 0" width="100%">{heading}</Heading>
                    <Text>{preview}</Text>
                    <Box flexWrap="wrap" padding="20px 0px">
                    {tech.map((text, index)=>(
                        <Tag key={index}>{text}</Tag>
                    ))}
                    </Box>
                    <CTA onClick={onClick}>Read More</CTA>
                </Box>
                <Image className="projectcardimage" initial={{scale:0.9}} whileHover={{scale: 1.0, border: '2px solid rgba(157, 149, 220, 0.9)', borderRadius: '25px', padding: '10px'}} transition={{ duration: 0.3 }} alt={alt} src={src} width={200} height={200} style={{width:"40%", height:"450px", marginLeft:"20px", objectFit: "cover", borderRadius:"15px"}}/>
            </Box>
        )
    }
}