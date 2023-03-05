import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, H1, H3, H4, Text, Span, CTA } from '@/components/globals'
import { Skills } from '@/data/skills'
import { motion, AnimatePresence } from "framer-motion";
import BrowserModel from '@/components/browserModel'
import { Tech } from '@/data/tools'
import TechSlideshow from '@/components/slideshow'

export default function Home() {
  const [skill, setSkill] = useState(0)
  const [skillObject, setSkillObject] = useState(Skills[0])

  const currentYear = new Date().getFullYear();

  // function Browser(){
  //   for(var x = 0; x < Skills.length; x++){
  //     if(skill === Skills[x].title){
  //       setSkillObject(Skills[x])
        
  //     }
  //   }
  // }

  useEffect(()=>{
    // if(refresh){
    //     window.location.replace = "/";
    // }
  },[])
  return (
    <>
      <Head>
        <title>Ana Arango - Front End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header/>
        <Footer/>
        
        <Hero className="hero" minHeight="99vh" src='/Landing.svg' bgRepeat="no-repeat" bgSize="cover" flexDir="row" margin="-100px 0px 0px -10px" justCont="flex-start" aliIt="center" >
          <Box className="heroCont" flexDir="column" width="40%" minHeight="fit-content" margin="300px 50px 0px 50px">
            <H3 color="#B23C87" padding="10px 0">FRONT-END DEVELOPER</H3>
            <H1 color='#EA638D' fSize="65px" padding="10px 0">Ana Arango</H1>
            <Text padding="50px 0">A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications.</Text>
            <CTA>Don't Be A Stranger</CTA>
          </Box>
          <Box className="heroCont" width="50%">
            <Image src="/Hero.gif" width={150} height={100} style={{width:"100%", height:"fit-content"}}></Image>
          </Box>
        </Hero>

        <Container id="CollaboratorFemale" flexDir="column" width="100%" aliIt="flex-end" padding="50px" margin="30px 0 0 0" className='aboutme'>
          <H3 color='#B23C87' padding="10px 0">About Me</H3>
          <Box display="inline" width="100%">
              <Image className='aboutmeimage' src="/aboutme.png" width={200} height={200} style={{width:"40%", height:"100%", float:"left", margin:"0px 30px 30px 50px", minWidth:"350px"}}></Image>
              <Text width="100%" textAlign="end" padding="0 0 30px 0">I’m Ana Arango, {currentYear-2004} year old front-end developer, from Vancouver, Canada.</Text>
              <Text width="100%" textAlign="end" padding="0 0 30px 0">From straight of high school, I started my post-secondary education in the Digital Design and Development with no prior knowledge of programming, but after 2 years, I’ve learned many new technologies a front-end developer needs to create functional appealing websites and web-applications.</Text>
              <Text width="100%" textAlign="end" padding="0 0 30px 0">Fueled by new ideas, I enjoy designing coding things from scratch as it continues putting new challenges on myself. I’m passionate, expressive, and naturally curious in exploring new techniques and technologies to keep up with the ever-evolving web development landscape.</Text>
              <Text width="100%" textAlign="end" padding="0 0 30px 0">I have a strong foundation in design principles and user experience after working on various projects with group mates and clients. Everything I have done, either small tasks or big projects, has led me to where I am today.</Text>
              <Text width="100%" textAlign="end" padding="0 0 30px 0">About 90% the traits of being of ISFJ personality type defines me, as I would describe myself as reliable, supportive, and hardworking. Fun fact, Pam Beesly shares the same personality, so that’s the type of person my employer could expect if they hire me.</Text>
              <Text width="100%" textAlign="end" padding="0 0 30px 0" fontWeight="700">Take a look at my portfolio to see some of my recent work and get in touch if you're interested in working together.</Text>
          </Box>

          <H4 color='#9DFFFF' fSize="25px" padding="10px 0" margin="70px 0 10px 0" width="100%">What I Value</H4>
          <BrowserModel onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={Skills}/>

          <H4 color='#9DFFFF' fSize="25px" padding="10px 0" margin="70px 0 10px 0" width="100%">Tools and Technologies I Use</H4>
          <TechSlideshow/>
        </Container>
        


      </main>
    </>
  )
}
