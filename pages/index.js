import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Menu from '@/components/menu'
import { Box, Hero, Container, H1, H3, Text, Span, CTA } from '@/components/globals'
import { Skills } from '@/data/skills'


export default function Home() {
  const [skill, setSkill] = useState(0)

  return (
    <>
      <Head>
        <title>Ana Arango - Front End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {/* <Menu></Menu> */}
        
        <Hero className="hero" minHeight="99vh" src='/Landing.svg' bgRepeat="no-repeat" bgSize="cover" flexDir="row" margin="-100px 0px 0px -10px" justCont="flex-start" aliIt="center" >
          <Box className="heroCont" flexDir="column" width="40%" minHeight="fit-content" margin="300px 50px 0px 50px">
            <H3 color="#B23C87" fSize="25px" padding="10px 0">FRONT-END DEVELOPER</H3>
            <H1 color='#EA638D' fSize="65px" padding="10px 0">Ana Arango</H1>
            <Text padding="50px 0">A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications.</Text>
            <CTA>Don't Be A Stranger</CTA>
          </Box>
          <Box className="heroCont" width="50%">
            <Image src="/Hero.gif" width={150} height={100} style={{width:"100%", height:"fit-content"}}></Image>
          </Box>
        </Hero>

        <Container width="90%" minHeight="200px" margin="0 50px 200px 50px" border="1px solid grey" borderRadius="10px" flexDir="column">
          <Hero src="/SVG/Browser.svg" bgSize="cover" bgRepeat="no-repeat" width="100%" height="45px" >
            <Box width="100%" height="100%" margin="0 0 0 100px" aliIt="center" style={{overflowX: "scroll", whiteSpace: "nowrap"}}>
              {Skills.map((o,i) => (
                <Text onClick={()=>{setSkill(i); console.log(o)}} key={i} cursor="pointer" aliIt="center" height="fit-content" minWidth="fit-content" padding="5px 10px" bgColor={skill === i ? "#A399E2" : "#28284D"} borderRadius="6px" margin="0 10px 0 0">{o.title}</Text>
              ))}
            </Box>
          </Hero>
          <Box flexDir="column" padding="25px">
            <Text fontWeight="700" padding="0 0 15px 0">{Skills[skill].title}</Text>
            <Text padding="0 0 10px 0">{Skills[skill].p1}</Text>
            <Text padding="0 0 10px 0">{Skills[skill].p2}</Text>
            <p style={{color:"white"}}><strong style={{fontWeight:"800", color:"#EA638D"}}>{Skills[skill].projectName}</strong>{Skills[skill].project}</p>
            
          </Box>
        </Container>
        


      </main>
    </>
  )
}
