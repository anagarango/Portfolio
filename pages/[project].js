import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Tag } from '@/components/globals'
import TechCard from '@/components/techCard'
import { useRouter } from "next/router"
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
                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Project Overview</Heading>
                <Text padding="20px 0 0 0">{project.projectOverview}</Text>
                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Role</Heading>
                <Text padding="20px 0 0 0" fontWeight="700">{project.roleName}</Text>
                <Text padding="20px 0 0 0">{project.role}</Text>
                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Technologies Used</Heading>
                <Box padding="20px 0 0 0" flexWrap="wrap" justCont="space-between">
                    {project.tech && project.tech.map((o,i)=>(
                        <TechCard key={i} src={o} alt={o} heading={o} />
                    ))}
                </Box>

                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 20px 0">Key Features</Heading>
                <BrowserModel version='project' onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={project.keyFeatures}/>
                

                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Design and Development Process</Heading>
                <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)", maxWidth:"800px", width:"100%"}}  height="450" src={project.figma} allowFullScreen></iframe>

                <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Lessons Learned</Heading>
                {/* <Text padding="20px 0 0 0">{project && project.lessonsLearned[1].title}</Text> */}

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