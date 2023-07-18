import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Tag } from '@/components/globals'
import TechCard from '@/components/techCard'
import { useRouter } from "next/router"
import ProjectList from "@/data/project-list.json"
import BrowserModel from '@/components/browserModel'
import CollapseCard from '@/components/collapse'

export default function Project(){
    const r = useRouter()
    const [project, setProject] = useState([])
    const [skill, setSkill] = useState(0)
    const [collapse, setCollapse] = useState(0)
    const [word, setWord] = useState("")
    const [imageCarousel, setImageCarousel] = useState("")
    var url


    useEffect(()=>{
        url = window.location.pathname.split('/').pop().replace(/%20/g, " ");
    
        for(var x = 0; x < ProjectList.length; x++){
            if(r.query.project == ProjectList[x].name || url == ProjectList[x].name){
                setProject(ProjectList[x])
                setImageCarousel(ProjectList[x].carousel[0])
            }
        }
        
    },[])


    return(
        <>
        <Head>
            <title>{`${r.query.project ? r.query.project: url} - Ana Arango`}</title>
            <meta name="description" content="A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/Icons/Home.svg" />
        </Head>
        
        <main id='projectMain'>
            <Header height="100vh" />
            <Container width="100%" justCont="center">
                <Container id="ProjectPage" flexDir="column" width="100%" maxWidth="1800px" padding="150px 150px 50px 150px" aliIt="center">
                    <Hero src="/blob.svg" bgPosition="50% 35%" minHeight="75vh" width="100%" maxWidth="1000px" bgSize="contain" bgRepeat="no-repeat" aliIt="center" justCont="center" flexDir="column">
                        <Heading color='#9DFFFF' fSize="70px" margin="-125px 0 -20px 0" fontFamily='Staatliches'>{project.name}</Heading>
                        <Image alt={project.preview} src={project.image} width={600} height={300} priority style={{width:"60vw", height:"auto", borderRadius:"20px", boxShadow:"0px 5px 45px 1px #000000", zIndex:"2", minWidth:"200px", maxWidth:"1000px"}} />
                        <Heading color='#9DFFFF' fSize="30px" fontFamily='Staatliches'>{project.date}</Heading>
                    </Hero>
                    <Box position="sticky" zIndex="5" top="0px" margin="100px 0 0 0" width="20vw" minWidth="fit-content" aliIt="center" maxWidth="280px" bgColor="rgba(163,153,226,0.2)" borderRadius="20px" backdropFilter="blur(20px) saturate(1.5)" justCont="space-between">
                        <a href={project.github} onMouseOver={()=>setWord("GitHub")} onMouseOut={()=>setWord("")} style={{padding:"20px 30px"}}>
                            <Image alt="github image" className='linkGithub' src="/Github/github.png" width={40} height={40} priority />
                        </a>
                        <Heading padding="0px 10px" color='#EA638D' fontWeight="500" fSize="18px" fontFamily='Staatliches'>{word}</Heading>
                        {project.vercel &&
                            <a href={project.vercel} onMouseOver={()=>setWord("Website")} onMouseOut={()=>setWord("")} style={{padding:"20px 30px"}}>
                                <Image alt="live webpage image" className='linkVercel' src="/Vercel/live.png" width={40} height={40} priority />
                            </a>
                        }
                    </Box>
                    <Box width="100%" flexDir="column">
                        
                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="90px 0 0 0">Project Overview</Heading>
                        <Text padding="20px 0 0 0">{project.projectOverview}</Text>

                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="90px 0 0 0">Role</Heading>
                        <Text padding="20px 0 0 0" fontWeight="700">{project.roleName}</Text>
                        <Text padding="20px 0 0 0">{project.role}</Text>

                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="90px 0 0 0">Technologies Used</Heading>
                        <Box padding="20px 0 0 0" flexWrap="wrap" justCont="space-between">
                            {project.tech && project.tech.map((o,i)=>(
                                <TechCard key={i} src={o} alt={o} heading={o} />
                            ))}
                        </Box>

                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="90px 0 20px 0">Key Features</Heading>
                        <BrowserModel version='project' onClick={(event)=>{setSkill(event.target.getAttribute("value"))}} state={skill} array={project.keyFeatures} name={project.name}/>
                        

                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="90px 0 0 0">Design and Development Process</Heading>
                        {project.designDevelopmentProcess && project.designDevelopmentProcess.map((o,i)=>(
                            <Box key={i} flexDir="column" width="100%" aliIt="center">
                                <Text padding="20px 0">{o.content}</Text>
                                {o.image && <Image alt={o.image} src={o.image} width={600} height={300} priority style={{width:"75%", height:"45%", borderRadius:"20px"}} />}
                                {o.alt && <Text padding="5px 0 20px 0" fontSize="14px">{o.alt}</Text>}
                                {o.figma && <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)", maxWidth:"800px", width:"100%", borderRadius:"20px", margin:"40px 0 0 0"}}  height="450" src={o.figma} allowFullScreen></iframe>}
                                {o.figmaAlt && <Text fontStyle="italic" padding="5px 0 40px 0" fontSize="14px">{o.figmaAlt}</Text>}
                            </Box>
                        ))}
                        
                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="80px 0 20px 0">Code Snippets</Heading>
                        <Box width="100%" flexDir="column" aliIt="center">
                            <Box width="100%">
                                {project.carousel && project.carousel.map((o,i)=>(
                                    <Image key={i} alt={o} src={o} width={600} height={300} onClick={()=>setImageCarousel(o)} priority style={{width:`calc(100% / ${project.carousel.length})`, height:"100px", objectFit:"cover", objectPosition: "50% 10%", padding:"0px 2px", filter: o == imageCarousel ? "sepia(0%)  saturate(150%)" : "sepia(100%)", transition: "0.8s ease"}} />
                                ))}
                            </Box>
                            {project.carousel && <Image alt={imageCarousel} src={imageCarousel} width={600} height={300} priority style={{width:"100%", height:"auto", margin:"20px 0 0 0", maxWidth:"1200px"}} />}
                        </Box>
                        

                        <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="100px 0 15px 0">Lessons Learned</Heading>
                        {project.lessonsLearned && project.lessonsLearned.map((o,i) => (
                            <CollapseCard key={i} index={i} content={o} state={collapse} onClick={()=>setCollapse(i)} />
                        ))}
                    </Box>
                </Container>
            </Container>
        </main>
        </>
    )
}