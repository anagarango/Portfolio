import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Image } from '@/components/globals'
import BrowserModel from '@/components/browserModel'
import TechSlideshow from '@/components/slideshow'
import Card from '@/components/card'
import Contact from '@/components/contact'
import { Projects } from '@/data/projects'
import Skills from '@/data/skills.json'
import { useInView } from 'react-intersection-observer';
import Hello from "@/data/project-list.json"

export default function Home() {
  const [skill, setSkill] = useState(0)

  const r = useRouter()
  const currentYear = new Date().getFullYear();
  const [ref1, inView1] = useInView({threshold: 1.0});
  const [ref2, inView2] = useInView({threshold: 1.0});
  const [ref3, inView3] = useInView({threshold: 1.0});
  const [ref4, inView4] = useInView({threshold: 1.0});
  const [ref5, inView5] = useInView({threshold: 1.0});

  function SelectProject(data){
      r.replace({
        pathname: `/${data.name}`,
        query: data
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
          <Hero id="Home" className="hero" minHeight="100vh" bgPosition="bottom left" src='/Landing.svg' bgRepeat="no-repeat" bgSize="cover" flexDir="row" padding="0px 150px" justCont="center" aliIt="center" priority>
            <Box className="heroCont" flexDir="column" width="50%" minHeight="fit-content" padding="0 45px 0 0">
              <Heading color="#B23C87" fontFamily='Staatliches' padding="10px 0" fSize="25px">FRONT-END DEVELOPER</Heading>
              <Heading color='#EA638D' fSize="65px" padding="10px 0">Ana Arango</Heading>
              <Text padding="50px 0">A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications.</Text>
              <Link href="/#Contact" scroll={false}>
                <CTA>Don't Be A Stranger</CTA>
              </Link>  
            </Box>
            <Box className="heroCont" width="50%">
              <Image initial={{ scale: 0.9 }}
      whileHover={{ scale: 1, rotate: [0, 5, 0, -5, 0] }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }} alt="gif of Ana Arango making faces" src="/Hero.gif" width={150} height={100} style={{width:"100%", height:"fit-content"}} priority></Image>
            </Box>
          </Hero>

          <Container id="About" flexDir="column" width="100%" padding="10px 150px" aliIt="flex-end">
            <Heading ref={ref1} initial={{opacity:0}} animate={inView1 ? {opacity:1} : {opacity:0}} transition={{ duration: 1.5, delay: 1 }} color='#B23C87' fontFamily='Staatliches' padding="10px 0">About Me</Heading>
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
                  }} className='aboutmeimage' src="/aboutme.png" alt="Eagle eye shot of Ana Arango working on her desktop and laptop" width={200} height={200} style={{width:"40%", height:"100%", float:"left", margin:"0px 30px 30px 50px", minWidth:"350px"}} priority/>
                <Text width="100%" textAlign="end" padding="0 0 30px 0"> I’m Ana Arango, {currentYear-2004} year old front-end developer, from Vancouver, Canada.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">From straight of high school, I started my post-secondary education in the Digital Design and Development with no prior knowledge of programming, but after 2 years, I’ve learned many new technologies a front-end developer needs to create functional appealing websites and web-applications.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">Fueled by new ideas, I enjoy designing coding things from scratch as it continues putting new challenges on myself. I’m passionate, expressive, and naturally curious in exploring new techniques and technologies to keep up with the ever-evolving web development landscape.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">I have a strong foundation in design principles and user experience after working on various projects with group mates and clients. Everything I have done, either small tasks or big projects, has led me to where I am today.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0">About 90% the traits of being of ISFJ personality type defines me, as I would describe myself as reliable, supportive, and hardworking. Fun fact, Pam Beesly shares the same personality, so that’s the type of person my employer could expect if they hire me.</Text>
                <Text width="100%" textAlign="end" padding="0 0 30px 0" fontWeight="700">Take a look at my portfolio to see some of my recent work and get in touch if you're interested in working together.</Text>
            </Box>

            <Heading ref={ref2} initial={{opacity:0}} animate={inView2 ? {opacity:1} : {opacity:0}} transition={{ duration: 1.5, delay: 1 }}  color='#9DFFFF' fontFamily='Staatliches' fSize="22px" padding="10px 0" margin="70px 0 10px 0" width="100%">What I Value</Heading>
            <BrowserModel onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={Skills}/>

            

            <Heading ref={ref3} initial={{opacity:0}} animate={inView3 ? {opacity:1} : {opacity:0}} transition={{ duration: 1.5, delay: 1 }}  color='#9DFFFF' fontFamily='Staatliches' fSize="22px" padding="10px 0" margin="70px 0 0 0" width="100%">Tools and Technologies I Use</Heading>
            <TechSlideshow />
            <Box position="relative" top="-60px" height="60px" width="100%" style={{background:"linear-gradient(to right, rgba(10, 0, 44,1) 1%, rgba(163,153,226,0) 15%, rgba(163,153,226,0) 85%,rgba(10, 0, 44, 1) 99%)"}} />
          </Container>
          

          <Container id="Projects" flexDir="column" width="100%" padding="100px 150px 150px 150px">
            <Heading ref={ref4} initial={{opacity:0}} animate={inView4 ? {opacity:1} : {opacity:0}} transition={{ duration: 1.5, delay: 1 }}  color='#B23C87' fontFamily='Staatliches' padding="10px 0">Projects</Heading>
            <Text>These are a few selected projects that I believe show what languages and modern practices I have applied to create easy-to-use and and modern web applications. Feel free to explore the links I attached on each post to explore the web application’s yourself!</Text>
            {Hello.map((o,i)=>{
              if(i % 2 == 0){
                return(
                  <Card key={`a${i}`} alt={o.name} src={o.image} heading={o.name} preview={o.preview} tech={o.tech} onClick={()=>{SelectProject(o)}} />
                )
              } else {
                return(
                  <Card key={`b${i}`} type="right" alt={o.name} src={o.image} heading={o.name} preview={o.preview} tech={o.tech} onClick={()=>{SelectProject(o)}} />
                )
              }
              
            })}
          </Container>

          <Container id="Contact" flexDir="column" width="100%" padding="0px 150px 100px 150px">
            <Heading ref={ref5} initial={{opacity:0}} animate={inView5 ? {opacity:1} : {opacity:0}} transition={{ duration: 1.5, delay: 1 }}  color='#B23C87' fontFamily='Staatliches' padding="10px 0">Wanna Talk?</Heading>
            <Text padding="0 0 50px 0">If you're interested in working on a project together or just wanna reach out to me, fill out the form below. <strong>Ttyl!</strong></Text>
            <Box width="100%" minHeight="250px" border="1px solid grey" borderRadius="10px" flexDir="column">
              <Hero src="/SVG/Browser.svg" bgSize="cover" bgRepeat="no-repeat" width="100%" height="45px" />
              <Contact PUBLICkey={process.env.NEXT_PUBLIC_PRIVATE_API_KEY} />
            </Box>
          </Container>
          

      </main>
    </>
  )
}