'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Header from '@/src/app/components/header'
import Footer from '@/src/app/components/footer'
import { Box, Hero, Container, Text, CTA, Image } from '@/src/app/components/globals'
import BrowserModel from '@/src/app/components/browserModel'
import TechSlideshow from '@/src/app/components/slideshow'
import Card from '@/src/app/components/card'
import Contact from '@/src/app/components/contact'
import Skills from '@/public/data/skills.json'
import ProjectsList from "@/public/data/project-list.json"
import WorkExperienceList from "@/public/data/work-list.json"
import SplashScreen from '@/src/app/components/splashscreen'
import Reveal from '@/src/app/components/animationReveal'
import Animate from '@/src/app/components/heading'
import PageTransition from '@/src/app/components/pageTransition'
import WorkCard from '@/src/app/components/workCard'

export default function Home() {
  const [skill, setSkill] = useState(0)
  const [loading, setLoading] = useState(true)
  const [afterLoad, setAfterLoad] = useState(false)

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    'Home': homeRef,
    'About': aboutRef,
    'WorkExperience': workExperienceRef,
    'Projects': projectsRef,
    'Contact': contactRef
  };

  const currentYear = new Date().getFullYear();

  const handleItemClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(()=>{
    setTimeout(() => {
      setAfterLoad(true)
    }, 10);
    setTimeout(() => {
      setLoading(false)
    }, 4800);
  },[])

  useEffect(() => {
    const targetSection = localStorage.getItem('scrollTo');
    if (refs[targetSection]?.current) {
      refs[targetSection].current.scrollIntoView({ behavior: 'smooth' });
      localStorage.removeItem('scrollTo');
    }
  }, [refs]);

  return (
    <>
      { loading && <SplashScreen /> }
      { afterLoad &&
        <main id="openingmain">
          <Header handleItemClick={handleItemClick} refs={refs}/>
          <Footer/>
          <PageTransition initialState="100vh" animateState="0" exitState="-100vh">
            <Container width="100%" flexDir="column" aliIt="center">
              <Hero ref={homeRef} id="Home" className="hero" minHeight="100vh" bgPosition="bottom left" src='/SVG/Landing.svg' bgRepeat="no-repeat" bgSize="cover" flexDir="row" padding="0px 150px" justCont="center" aliIt="center" width="100%">
                <Box className="heroCont" maxWidth="775px" flexDir="column" width="50%" minHeight="fit-content" padding="0 45px 0 0">
                  <Animate type="heading" delay={3.5} color="#B23C87" id="secondHeading" className="hometitleheading" padding="10px 0" fSize="22px" text="FRONT-END DEVELOPER"/>
                  <Animate id="homenameheading" type="heading" delay={3.5} color='#EA638D' fSize="60px" padding="10px 0" text="Ana Arango"/>
                  <Animate className="hometextheading" type="text" delay={3.5} starting="hiddenFromBottom" padding="50px 0" text="A passionate Front-End Developer with a strong appetite for creating user-centric web applications and software solutions from concept to successful development."/>
                  <Reveal starting="hiddenFromBottom" delay={3.5}>
                    <Link href="/#Contact">
                      <CTA>Don't Be A Stranger</CTA>
                    </Link>  
                  </Reveal>
                  
                </Box>
                <Box className="heroCont" maxWidth="775px" width="50%">
                  <Reveal starting="hiddenFromRight" delay={4} display="flex" justCont="center">
                    <Image initial={{ scale: 0.9 }} whileHover={{ scale: 1, rotate: [0, 5, 0, -5, 0] }} transition={{duration: 0.5, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} alt="gif of Ana Arango making faces" src="/Hero.gif" width={150} height={100} style={{width:"100%", height:"fit-content"}}></Image>
                  </Reveal>
                </Box>
              </Hero>

              <Container ref={aboutRef} id="About" flexDir="column" width="100%" maxWidth="1850px" padding="10px 150px" aliIt="flex-end">
                <Animate id="secondHeading" fSize="25px" type="heading" starting="hiddenFromRight" color='#B23C87' padding="10px 0" text="About Me"/>
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
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">Fresh out of high school, I started my post-secondary education in the Digital Design and Development with no prior knowledge of programming, but after 2 years, I’ve become proficient in many new technologies essential for a front-end developer, to create functional appealing web-applications and software solutions.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">Fueled by new ideas, I enjoy designing and coding things from scratch as it continually presents new challenges for me. I’m passionate, expressive, and naturally curious about exploring new techniques and technologies to keep up with the ever-evolving web development landscape.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">I have a strong foundation in design principles and user experience after collaborating on various projects with teammates and clients.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0">Among my hobbies are painting, kayaking, playing games, and coding (occasionally). I'm trying to get into reading, so I'm waiting to hear a book's blurb that will immediately sell it for me.</Text>
                    <Text width="100%" textAlign="end" padding="0 0 30px 0" fontWeight="700">Take a look at my portfolio to see some of my recent work and get in touch if you're interested in working together.</Text>
                </Box>

                <Animate id="secondHeading" type="heading" starting="hiddenFromLeft" widthReveal="100%" color='#9DFFFF' fSize="20px" padding="10px 0" margin="50px 0 10px 0" text="What I Value" />
                <BrowserModel onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={Skills}/>

                

                <Animate id="secondHeading" type="heading" starting="hiddenFromLeft" widthReveal="100%"  color='#9DFFFF'  fSize="20px" padding="10px 0" margin="50px 0 0 0" text="Tools and Technologies I Use" />
                <TechSlideshow />
                <Box position="relative" top="-100px" height="121px" width="100%" style={{background:"linear-gradient(to right, rgba(10, 0, 44,1) 1%, rgba(163,153,226,0) 15%, rgba(163,153,226,0) 85%,rgba(10, 0, 44, 1) 99%)"}} />
              </Container>

              <Container id="WorkExperience" ref={workExperienceRef} flexDir="column" width="100%" maxWidth="1850px" padding="20px 150px 150px 150px">
                <Animate id="secondHeading" fSize="25px" type="heading" starting="hiddenFromLeft" color='#B23C87' padding="10px 0" text="Work Experience"/>
                {WorkExperienceList.map((o,i)=>{
                  return(
                      <WorkCard type={i} role={o.role} workplace={o.workplace} preview={o.preview} date={o.date} tech={o.tech} link={o.link} />
                  )
                })}
              </Container>
              

              <Container ref={projectsRef} id="Projects" flexDir="column" width="100%" maxWidth="1850px" padding="20px 150px 150px 150px">
                <Animate id="secondHeading" fSize="25px" type="heading" starting="hiddenFromLeft" color='#B23C87' padding="10px 0" text="Projects"/>
                <Text>These are a few selected projects that I believe show what languages and modern practices I have applied to create easy-to-use and and modern web applications. Feel free to explore the links I attached on each post to explore the web application’s yourself!</Text>
                {ProjectsList.map((o,i)=>{
                  return(
                      <Card type={i} alt={o.name} src={o.image} heading={o.name} preview={o.preview} tech={o.tech} />
                  )
                })}
              </Container>

              <Container ref={contactRef} id="Contact" flexDir="column" width="100%" maxWidth="1850px" padding="0px 150px 100px 150px">
                <Animate id="secondHeading" fSize="25px" type="heading" starting="hiddenFromLeft" color='#B23C87' padding="10px 0" text="Wanna Talk?" />
                <Text padding="0 0 50px 0">If you're interested in working on a project together or just wanna reach out to me, fill out the form below. <strong>Ttyl!</strong></Text>
                <Contact PUBLICkey={process.env.NEXT_PUBLIC_PRIVATE_API_KEY} />
              </Container>
            </Container> 
          </PageTransition>
        </main>
      }
    </>
  )
}