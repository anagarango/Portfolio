import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Tag } from '@/components/globals'
import TechCard from '@/components/techCard'
import { useRouter } from "next/router"
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import ProjectList from "@/data/project-list.json"
import BrowserModel from '@/components/browserModel'

export default function Project(){
    const r = useRouter()
    const [project, setProject] = useState([])
    const [skill, setSkill] = useState(0)
    const [collapse, setCollapse] = useState(0)
        


    useEffect(()=>{
        const url = window.location.pathname.split('/').pop();
        for(var x = 0; x < ProjectList.length; x++){
            if(r.query.project == ProjectList[x].name || url == ProjectList[x].name){
                setProject(ProjectList[x])
            }
        }
    },[])


    return(
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

          <Container flexDir="column" width="100%" padding="150px" aliIt="flex-start">
            <Hero src="/blob.svg" bgPosition="center" minHeight="75vh" width="100%" bgSize="contain" bgRepeat="no-repeat" aliIt="center" justCont="center" flexDir="column">
                <Heading color='#9DFFFF' fSize="70px" margin="-125px 0 -20px 0" fontFamily='Staatliches'>{project.name}</Heading>
                <Image alt={project.preview} src={project.image} width={600} height={300} priority style={{width:"75%", height:"45%", borderRadius:"20px", boxShadow:"0px 7px 45px 1px #000000"}} />
            </Hero>
            <Box padding="100px 0 0 0" flexDir="column">
                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 0 0">Project Overview</Heading>
                <Text padding="20px 0 0 0">{project.projectOverview}</Text>
                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 0 0">Role</Heading>
                <Text padding="20px 0 0 0" fontWeight="700">{project.roleName}</Text>
                <Text padding="20px 0 0 0">{project.role}</Text>
                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 0 0">Technologies Used</Heading>
                <Box padding="20px 0 0 0" flexWrap="wrap" justCont="space-between">
                    {project.tech && project.tech.map((o,i)=>(
                        <TechCard key={i} src={o} alt={o} heading={o} />
                    ))}
                </Box>

                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 20px 0">Key Features</Heading>
                <BrowserModel version='project' onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={project.keyFeatures}/>
                

                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 0 0">Design and Development Process</Heading>
                {project.designDevelopmentProcess && project.designDevelopmentProcess.map((o,i)=>(
                    <Box key={i} flexDir="column" width="100%" aliIt="center">
                        <Text padding="20px 0">{o.content}</Text>
                        {o.image && <Image alt={o.image} src={o.image} width={600} height={300} priority style={{width:"75%", height:"45%", borderRadius:"20px"}} />}
                        {o.alt && <Text padding="5px 0 20px 0" fontSize="14px">{o.alt}</Text>}
                        {o.figma && <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)", maxWidth:"800px", width:"100%", borderRadius:"20px", margin:"40px 0 0 0"}}  height="450" src={o.figma} allowFullScreen></iframe>}
                        {o.figmaAlt && <Text fontStyle="italic" padding="5px 0 40px 0" fontSize="14px">{o.figmaAlt}</Text>}
                    </Box>
                ))}
                

                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 0 0">Lessons Learned</Heading>
                {project.lessonsLearned && project.lessonsLearned.map((o,i)=>(
                    <Box key={i} initial={{ height: 'fit-content' }} animate={{ height: collapse === i ? 'auto' : '85px', transition:{ delay: 0.2 } }} transition={{ duration: 0.3 }} width="100%" bgColor="#27274C" borderRadius="20px" margin="10px 0px" padding="20px" flexDir="column">
                        <Box aliIt="center">
                            <Image src={`/Icons/${o.title}.png`} width={45} height={45} priority />
                            <Text padding="0px 30px">{o.title}</Text>
                            <Image src={`/Icons/Arrow.png`} width={20} height={20} style={{ transform: `rotate(${collapse === i ? "90deg" : "0"})`, transition: 'transform 0.1s ease-in-out'}}   onClick={()=>setCollapse(i)} priority />
                        </Box>
                        <AnimatePresence initial={false}>
                        {collapse == i && 
                            <Text initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay: 0.4 } }} exit={{ opacity: 0, transition:{duration: 0.2} }}  padding="30px">{o.content}</Text>
                        }
                        </AnimatePresence>
                    </Box>
                    
                ))}

                <Box padding="20px 0 80px 0" width="100%" justCont="center">
                    <a href={project.github}>
                        <Image alt="github image" className='linkGithub' src="/Github/github.png" width={50} height={50} priority />
                    </a>
                    {project.vercel &&
                        <a href={project.vercel} style={{marginLeft:"10%"}}>
                            <Image alt="live webpage image" className='linkVercel' src="/Vercel/live.png" width={50} height={50} priority />
                        </a>
                    }
                </Box>
            </Box>
            
          </Container>

      </main>
    </>
    )
}