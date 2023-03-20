import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Tag } from '@/components/globals'
import { Skills } from '@/data/skills'
import { motion, AnimatePresence } from "framer-motion";
import BrowserModel from '@/components/browserModel'
import { Projects } from '@/data/projects'
import TechSlideshow from '@/components/slideshow'
import { useRouter } from 'next/router'
import Card from '@/components/card'

export default function Home() {
  const [skill, setSkill] = useState(0)

  const r = useRouter()
  const currentYear = new Date().getFullYear();


  function SelectProject(data){
      r.replace({
        pathname: `/${data.name}`,
        query:{
          name:data.name,
          preview:data.preview,
          tech:data.tech,
          image:data.image,
          figma:data.figma,
          p1:data.p1,
          p2Role:data.p2Role,
          p3: data.p3,
          p4: data.p4,
          github: data.github,
          vercel: data.vercel,
          carousel:data.carousel
        }
    }, `${data.name}`)
  }

  return (
    <>
      <Head>
        <title>Ana Arango - Front End Developer</title>
        <meta name="description" content="A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Icons/Home.svg" />
      </Head>
      
      <main>
        <Header/>
        <Footer/>
          <Hero id="Home" className="hero" minHeight="100vh" bgPosition="bottom left" src='/Landing.svg' bgRepeat="no-repeat" bgSize="cover" flexDir="row" padding="0px 150px" justCont="center" aliIt="center" >
            <Box className="heroCont" flexDir="column" width="50%" minHeight="fit-content" padding="0 45px 0 0">
              <Heading color="#B23C87" fontFamily='Staatliches' padding="10px 0" fSize="25px">FRONT-END DEVELOPER</Heading>
              <Heading color='#EA638D' fSize="65px" padding="10px 0">Ana Arango</Heading>
              <Text padding="50px 0">A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications.</Text>
              <CTA>Don't Be A Stranger</CTA>
            </Box>
            <Box className="heroCont" width="50%">
              <Image alt="gif of Ana Arango making faces" src="/Hero.gif" width={150} height={100} style={{width:"100%", height:"fit-content"}}></Image>
            </Box>
          </Hero>

          <Container id="About" flexDir="column" width="100%" padding="10px 150px" aliIt="flex-end">
            <Heading color='#B23C87' fontFamily='Staatliches' padding="10px 0">About Me</Heading>
            <Box display="inline" width="100%">
                <Image className='aboutmeimage' src="/aboutme.png" alt="Eagle eye shot of Ana Arango working on her desktop and laptop" width={200} height={200} style={{width:"40%", height:"100%", float:"left", margin:"0px 30px 30px 50px", minWidth:"350px"}}/>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">I’m Ana Arango, {currentYear-2004} year old front-end developer, from Vancouver, Canada.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">From straight of high school, I started my post-secondary education in the Digital Design and Development with no prior knowledge of programming, but after 2 years, I’ve learned many new technologies a front-end developer needs to create functional appealing websites and web-applications.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">Fueled by new ideas, I enjoy designing coding things from scratch as it continues putting new challenges on myself. I’m passionate, expressive, and naturally curious in exploring new techniques and technologies to keep up with the ever-evolving web development landscape.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">I have a strong foundation in design principles and user experience after working on various projects with group mates and clients. Everything I have done, either small tasks or big projects, has led me to where I am today.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">About 90% the traits of being of ISFJ personality type defines me, as I would describe myself as reliable, supportive, and hardworking. Fun fact, Pam Beesly shares the same personality, so that’s the type of person my employer could expect if they hire me.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0" fontWeight="700">Take a look at my portfolio to see some of my recent work and get in touch if you're interested in working together.</Text>
            </Box>

            <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" padding="10px 0" margin="70px 0 10px 0" width="100%">What I Value</Heading>
            <BrowserModel onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={Skills}/>

            

            <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" padding="10px 0" margin="70px 0 0 0" width="100%">Tools and Technologies I Use</Heading>
          </Container>

          <TechSlideshow />

          <Container id="Projects" flexDir="column" width="100%" padding="200px 150px">
            <Heading color='#B23C87' fontFamily='Staatliches' padding="10px 0">Projects</Heading>
            <Text>These are a few selected projects that I believe show what languages and modern practices I have applied to create easy-to-use and and modern web applications. Feel free to explore the links I attached on each post to explore the web application’s yourself!</Text>
            {Projects.map((o,i)=>{
              if(i % 2 == 0){
                return(
                  <Card key={i} alt={o.name} src={o.image} heading={o.name} preview={o.preview} tech={o.tech} onClick={()=>{SelectProject(o)}} />
                )
              } else {
                return(
                  <Card type="right" key={i} alt={o.name} src={o.image} heading={o.name} preview={o.preview} tech={o.tech} onClick={()=>{SelectProject(o)}} />
                )
              }
              
            })}
          
          </Container>

      </main>
    </>
  )
}
