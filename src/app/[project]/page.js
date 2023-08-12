'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '@/src/app/components/header'
import Footer from '../components/footer'
import Link from "next/link"
import { Box, Hero, Container, Heading, Text } from '@/src/app/components/globals'
import TechCard from '@/src/app/components/techCard'
import ProjectList from "@/public/data/project-list.json"
import BrowserModel from '@/src/app/components/browserModel'
import CollapseCard from '@/src/app/components/collapse'
import Contact from '@/src/app/components/contact'
import PageTransition from '@/src/app/components/pageTransition'
import Reveal from '@/src/app/components/animationReveal'



export default function Project(){
    const [project, setProject] = useState([])
    const [skill, setSkill] = useState(0)
    const [collapse, setCollapse] = useState(0)
    const [word, setWord] = useState("")
    const [imageCarousel, setImageCarousel] = useState("")
    var url

    const Links = [
        {image:"YouTube", url:"https://www.youtube.com/channel/UCztvL6zXMKsyyJ1EfNsNpGQ"},
        {image:"GitHub", url:"https://github.com/anagarango"},
        {image:"LinkedIn", url:"https://www.linkedin.com/in/ana-arango-08592122a/"}
    ]


    useEffect(()=>{
        url = window.location.pathname.split('/').pop().replace(/%20/g, " ");
    
        for(var x = 0; x < ProjectList.length; x++){
            if(url == ProjectList[x].name){
                setProject(ProjectList[x])
                setImageCarousel(ProjectList[x].carousel[0])
            }
        }
        
    },[])


    return(
        <>
        <Head>
            <title>{`Ana Arango - ${url}`}</title>
            <meta name="description" content="A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="../favicon.ico" />
        </Head>
        
        <main id='projectMain'>
            <Header/>
            <Footer/>
            <PageTransition>
                <Container width="100%" justCont="center">
                    <Container id="ProjectPage" flexDir="column" width="100%" maxWidth="1800px" padding="150px 150px 50px 150px" aliIt="center">
                        <Hero src="/blob.svg" bgPosition="50% 35%" minHeight="75vh" width="100%" bgSize="contain" bgRepeat="no-repeat" aliIt="center" justCont="center" flexDir="column">
                            <Heading id="secondHeading" color='#9DFFFF' fSize="70px" margin="-125px 0 -20px 0"  textAlign="center">{project.name}</Heading>
                            <Image alt={project.preview || "no image available at the moment"} src={project.image || "/noImage.jpg"} width={600} height={300}  style={{width:"60vw", height:"auto", borderRadius:"15px", boxShadow:"0px 5px 45px 1px #000000", zIndex:"2", minWidth:"200px", maxWidth:"1000px"}} />
                            <Heading id="secondHeading" color='#9DFFFF' fSize="30px"  textAlign="center">{project.date}</Heading>
                        </Hero>
                        <Box position="sticky" zIndex="5" top="0px" width="25vw" minWidth="230px" aliIt="center" maxWidth="330px" bgColor="rgba(43,31,95,0.6)" borderRadius="15px" backdropFilter="blur(20px) saturate(1.5)" justCont="space-between">
                            <a href={project.github} onMouseOver={()=>setWord("GitHub")} onMouseOut={()=>setWord("")} style={{padding:"15px 25px"}}>
                                <Image alt="github image" className='linkGithub' src="/Github/github.png" width={38} height={38}  />
                            </a>
                            <Heading id="secondHeading" color='#EA638D' fontWeight="500" fSize="18px" >{word}</Heading>
                            {project.vercel &&
                                <a href={project.vercel} onMouseOver={()=>setWord("Website")} onMouseOut={()=>setWord("")} style={{padding:"15px 25px"}}>
                                    <Image alt="live webpage image" className='linkVercel' src="/Vercel/live.png" width={38} height={38}  />
                                </a>
                            }
                        </Box>
                        <Box width="100%" flexDir="column">
                            
                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="90px 0 0 0">Project Overview</Heading>
                            <Text padding="20px 0 0 0">{project.projectOverview}</Text>

                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="90px 0 0 0">Role</Heading>
                            <Text padding="20px 0 0 0" fontWeight="700">{project.roleName}</Text>
                            <Text padding="20px 0 0 0">{project.role}</Text>

                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="90px 0 0 0">Technologies Used</Heading>
                            <Box padding="20px 0 0 0" flexWrap="wrap" justCont="space-between">
                                {project.tech && project.tech.map((o,i)=>(
                                    <Reveal key={i} starting="hiddenFromLeft" delay={0.1*i + 0.2}>
                                        <TechCard src={o} alt={o} heading={o} />
                                    </Reveal>
                                ))}
                            </Box>

                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="90px 0 20px 0">Key Features</Heading>
                            <BrowserModel version='project' onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={project.keyFeatures} name={project.name}/>
                            

                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="90px 0 0 0">Design and Development Process</Heading>
                            {project.designDevelopmentProcess && project.designDevelopmentProcess.map((o,i)=>(
                                <Box key={i} flexDir="column" width="100%" aliIt="center">
                                    <Text padding="20px 0">{o.content}</Text>
                                    {o.image && <Image alt={o.image} src={o.image} width={600} height={300}  style={{width:"75%", height:"45%", borderRadius:"15px"}} />}
                                    {o.alt && <Text padding="5px 0 20px 0" fontSize="14px">{o.alt}</Text>}
                                    {o.figma && <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)", width:"100%", borderRadius:"15px", margin:"40px 0 0 0"}}  height="450" src={o.figma} allowFullScreen></iframe>}
                                    {o.figmaAlt && <Text fontStyle="italic" padding="5px 0 40px 0" fontSize="14px">{o.figmaAlt}</Text>}
                                </Box>
                            ))}
                            
                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="80px 0 20px 0">Code Snippets</Heading>
                            <Box width="100%" flexDir="column" aliIt="center">
                                <Box width="100%">
                                    {project.carousel && project.carousel.map((o,i)=>(
                                        <Image key={i} alt={o} src={o} width={600} height={300} onClick={()=>setImageCarousel(o)}  style={{width:`calc(100% / ${project.carousel.length})`, height:"100px", objectFit:"cover", objectPosition: "50% 10%", padding:"0px 2px", filter: o == imageCarousel ? "sepia(0%)  saturate(150%)" : "sepia(100%)", transition: "0.8s ease", borderRadius:"15px", cursor:"pointer"}} />
                                    ))}
                                </Box>
                                {project.carousel && <Image alt={imageCarousel} src={imageCarousel} width={600} height={300}  style={{width:"100%", height:"auto", margin:"20px 0 0 0", maxWidth:"1200px", borderRadius:"15px"}} />}
                            </Box>
                            

                            <Heading id="secondHeading" color='#9DFFFF'  fSize="22px" width="100%" padding="100px 0 15px 0">Lessons Learned</Heading>
                            {project.lessonsLearned && project.lessonsLearned.map((o,i) => (
                                <CollapseCard key={i} index={i} content={o} state={collapse} onClick={()=>setCollapse(i)} />
                            ))}
                        </Box>
                        <Container flexDir="column" width="100%" padding="90px 0">
                            <Heading id="secondHeading"  color='#B23C87'  padding="10px 0">Wanna Talk?</Heading>
                            <Text padding="0 0 50px 0">If you're interested in working on a project together or just wanna reach out to me, fill out the form below. OR check out my socials below. <strong>Ttyl!</strong></Text>
                            <Box width="100%" minHeight="250px" border="1px solid grey" borderRadius="10px" flexDir="column">
                                <Hero src="/SVG/Browser.svg" bgSize="cover" bgRepeat="no-repeat" width="100%" height="45px" />
                                <Contact PUBLICkey={process.env.NEXT_PUBLIC_PRIVATE_API_KEY} />
                            </Box>
                        </Container>
                    </Container>
                </Container>
            </PageTransition>
        </main>
        </>
    )
}