'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '@/src/app/components/header'
import Footer from '@/src/app/components/footer'
import { Box, Hero, Container, Text, CTA, Image } from '@/src/app/components/globals'
import BrowserModel from '@/src/app/components/browserModel'
import TechSlideshow from '@/src/app/components/slideshow'
import Card from '@/src/app/components/card'
import Contact from '@/src/app/components/contact'
import Skills from '@/public/data/skills.json'
import Projects from "@/public/data/project-list.json"
import SplashScreen from '@/src/app/components/splashscreen'
import Reveal from '@/src/app/components/animationReveal'
import Animate from '@/src/app/components/heading'
import PageTransition from '@/src/app/components/pageTransition'

export default function Home() {
  const [skill, setSkill] = useState(0)
  const [loading, setLoading] = useState(true)
  const [afterLoad, setAfterLoad] = useState(false)

  const currentYear = new Date().getFullYear();

  useEffect(()=>{
    setTimeout(() => {
      setAfterLoad(true)
    }, 10);
    setTimeout(() => {
      setLoading(false)
    }, 4800);
  },[])

  return (
    <>
      <Head>
        <title>Ana Arango - Front End Developer</title>
        <meta name="description" content="A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications." />
        <meta name="keywords" content="front-end developer, web development, portfolio, react, JavaScript, ana arango"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { loading && <SplashScreen /> }
      { afterLoad &&
        <main id="openingmain">
          <Header/>
          <Footer/>
          <PageTransition initialState="100vh" animateState="0" exitState="-100vh">
            <Container width="100%" flexDir="column" aliIt="center">
              <Hero id="Home" className="hero" minHeight="100vh" bgPosition="bottom left" src='/SVG/Landing.svg' bgRepeat="no-repeat" bgSize="cover" flexDir="row" padding="0px 150px" justCont="center" aliIt="center" width="100%">
                <Box className="heroCont" maxWidth="775px" flexDir="column" width="50%" minHeight="fit-content" padding="0 45px 0 0">
                  <Animate type="heading" delay={4.3} color="#B23C87" id="secondHeading" className="hometitleheading" padding="10px 0" fSize="25px" text="FRONT-END DEVELOPER"/>
                  <Animate id="homenameheading" type="heading" delay={4.4} color='#EA638D' fSize="65px" padding="10px 0" text="Ana Arango"/>
                  <Animate className="hometextheading" type="text" delay={4.5} starting="hiddenFromBottom" padding="50px 0" text="A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications."/>
                  <Reveal starting="hiddenFromBottom" delay={4.6}>
                    <Link href="/#Contact" scroll={false}>
                      <CTA>Don't Be A Stranger</CTA>
                    </Link>  
                  </Reveal>
                  
                </Box>
                <Box className="heroCont" maxWidth="775px" width="50%">
                  <Reveal starting="hiddenFromRight" delay={4.5} display="flex" justCont="center">
                    <Image initial={{ scale: 0.9 }} whileHover={{ scale: 1, rotate: [0, 5, 0, -5, 0] }} transition={{duration: 0.5, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} alt="gif of Ana Arango making faces" src="/Hero.gif" width={150} height={100} style={{width:"100%", height:"fit-content"}}></Image>
                  </Reveal>
                </Box>
              </Hero>

              <Container id="About" flexDir="column" width="100%" maxWidth="1850px" padding="10px 150px" aliIt="flex-end">
                <Animate id="secondHeading" type="heading" starting="hiddenFromRight" color='#B23C87' padding="10px 0" text="About Me"/>
                <Box display="inline" width="100%">
                    <Image initial={{ opacity: 1, scale: 0.9 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                          type: "spring",
                          damping: 5,
                          stiffness: 100,
                          restDelta: 0.001
                        }
                      }} className='aboutmeimage' src="/aboutme.png" alt="Eagle eye shot of Ana Arango working on her desktop and laptop" width={200} height={200} style={{width:"40%", height:"100%", float:"left", margin:"0px 30px 30px 0px", minWidth:"350px"}} priority/>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0"> I’m Ana Arango, {currentYear-2003} year old front-end developer, from Vancouver, Canada.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">From straight of high school, I started my post-secondary education in the Digital Design and Development with no prior knowledge of programming, but after 2 years, I’ve learned many new technologies a front-end developer needs to create functional appealing websites and web-applications.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">Fueled by new ideas, I enjoy designing coding things from scratch as it continues putting new challenges on myself. I’m passionate, expressive, and naturally curious in exploring new techniques and technologies to keep up with the ever-evolving web development landscape.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">I have a strong foundation in design principles and user experience after working on various projects with group mates and clients. Everything I have done, either small tasks or big projects, has led me to where I am today.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">About 90% the traits of being of ISFJ personality type defines me, as I would describe myself as reliable, supportive, and hardworking. Fun fact, Pam Beesly shares the same personality, so that’s the type of person my employer could expect if they hire me.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0" fontWeight="700">Take a look at my portfolio to see some of my recent work and get in touch if you're interested in working together.</Text>
                </Box>

                <Animate id="secondHeading" type="heading" starting="hiddenFromLeft" widthReveal="100%" color='#9DFFFF' fSize="22px" padding="10px 0" margin="70px 0 10px 0" text="What I Value" />
                <BrowserModel onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={Skills}/>

                

                <Animate id="secondHeading" type="heading" starting="hiddenFromLeft" widthReveal="100%"  color='#9DFFFF'  fSize="22px" padding="10px 0" margin="70px 0 0 0" text="Tools and Technologies I Use" />
                <TechSlideshow />
                <Box position="relative" top="-100px" height="121px" width="100%" style={{background:"linear-gradient(to right, rgba(10, 0, 44,1) 1%, rgba(163,153,226,0) 15%, rgba(163,153,226,0) 85%,rgba(10, 0, 44, 1) 99%)"}} />
              </Container>
              

              <Container id="Projects" flexDir="column" width="100%" maxWidth="1850px" padding="100px 150px 150px 150px">
                <Animate id="secondHeading" type="heading" starting="hiddenFromLeft" color='#B23C87' padding="10px 0" text="Projects"/>
                <Text>These are a few selected projects that I believe show what languages and modern practices I have applied to create easy-to-use and and modern web applications. Feel free to explore the links I attached on each post to explore the web application’s yourself!</Text>
                {Projects.map((o,i)=>{
                  return(
                    <Reveal starting={i % 2 == 0 ? "hiddenFromLeft" : "hiddenFromRight"}>
                      <Link key={i} href={o.name} imageSrcSet="none" style={{textDecoration:"none"}}>
                        <Card type={i} alt={o.name} src={o.image} heading={o.name} preview={o.preview} tech={o.tech} />
                      </Link>
                    </Reveal>
                  )
                })}
              </Container>

              <Container id="Contact" flexDir="column" width="100%" maxWidth="1850px" padding="0px 150px 100px 150px">
                <Animate id="secondHeading" type="heading" starting="hiddenFromLeft" color='#B23C87' padding="10px 0" text="Wanna Talk?" />
                <Text padding="0 0 50px 0">If you're interested in working on a project together or just wanna reach out to me, fill out the form below. <strong>Ttyl!</strong></Text>
                <Box width="100%" minHeight="250px" border="1px solid grey" borderRadius="10px" flexDir="column">
                  <Hero src="/SVG/Browser.svg" bgSize="cover" bgRepeat="no-repeat" width="100%" height="45px" />
                  <Contact PUBLICkey={process.env.NEXT_PUBLIC_PRIVATE_API_KEY} />
                </Box>
              </Container>
            </Container> 
          </PageTransition>
        </main>
      }
    </>
  )
}