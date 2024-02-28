'use client'

import Image from 'next/image'
import Link from "next/link"
import { useState, useEffect } from 'react'
import { Box, Hero, Container, Heading, Text } from '@/src/app/components/globals'
import Header from '@/src/app/components/header'
import Footer from '../components/footer'
import TechCard from '@/src/app/components/techCard'
import RelatedCard from '@/src/app/components/relatedCard'
import ProjectList from "@/public/data/project-list.json"
import BrowserModel from '@/src/app/components/browserModel'
import CollapseCard from '@/src/app/components/collapse'
import Contact from '@/src/app/components/contact'
import PageTransition from '@/src/app/components/pageTransition'
import Reveal from '@/src/app/components/animationReveal'


async function fetchData() {
  try {
    const currentPagePathname = window.location.pathname.split('/').pop().replace(/%20/g, " ");
    const response = await fetch(`../api/projects?url=${encodeURIComponent(currentPagePathname)}`);
    const data = await response.json();
    return data
    
  } catch (error) {
    console.log('Error fetching file names:', error);
  }  
}



export default function Project(){
    const [project, setProject] = useState({})
    const [skill, setSkill] = useState(0)
    const [collapse, setCollapse] = useState(0)
    const [word, setWord] = useState("")
    const [imageCarousel, setImageCarousel] = useState("")
    // var url


    useEffect(()=>{
      async function loadData() {
        const data = await fetchData();
        setProject(data);
        setImageCarousel(data.carousel[0])
      }
      loadData();

	// url = window.location.pathname.split('/').pop().replace(/%20/g, " ")

    //   for(var x = 0; x < ProjectList.length; x++){
    //     if(url == ProjectList[x].name){
    //         setProject(ProjectList[x])
    //         setImageCarousel(ProjectList[x].carousel[0])
    //     }
    //   }
    },[])


    return(
        <main id='projectMain'>
            <Header type="project"/>
            <Footer/>
            <PageTransition initialState="100vh" animateState="0" exitState="100vh">
                <Container width="100%" justCont="center">
                    <Container id="ProjectPage" flexDir="column" width="100%" maxWidth="1800px" padding="150px 150px 50px 150px" aliIt="center">
                        <Hero src="/SVG/blob.svg" bgPosition="50% 35%" minHeight="75vh" width="100%" bgSize="contain" bgRepeat="no-repeat" aliIt="center" justCont="center" flexDir="column">
                            <Heading id="secondHeading" color='#9DFFFF' fSize="60px" margin="-125px 0 -20px 0"  textAlign="center">{project.name}</Heading>
                            <Image alt={project.preview || "no image available at the moment"} src={project.image || "/noImage.jpg"} width={600} height={300}  style={{width:"60vw", height:"auto", borderRadius:"10px", boxShadow:"0px 5px 45px 1px #000000", zIndex:"2", minWidth:"200px", maxWidth:"1000px"}} />
                            <Heading id="secondHeading" color='#9DFFFF' fSize="25px"  textAlign="center">{project.date}</Heading>
                        </Hero>

                        <Box position="sticky" zIndex="5" top="0px" width="30vw" minWidth="240px" aliIt="center" maxWidth="350px" bgColor="rgba(43,31,95,0.6)" borderRadius="10px" backdropFilter="blur(10px) saturate(1.5)" justCont="space-between">
                            <a href={project.github} target="_blank" onMouseOver={()=>setWord("GitHub")} onMouseOut={()=>setWord("")} style={{margin:"15px 25px"}}>
                                <Image alt="github image" className='linkGithub' src="/Github/github.png" width={35} height={35}  />
                            </a>
                            <Heading id="secondHeading" color='#EA638D' fontWeight="500" fSize="18px" >{word}</Heading>
                            {project.vercel &&
                                <a href={project.vercel} target="_blank" onMouseOver={()=>setWord("Website")} onMouseOut={()=>setWord("")} style={{margin:"15px 25px"}}>
                                    <Image alt="live webpage image" className='linkVercel' src="/Vercel/live.png" width={35} height={35}  />
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
                            <Box padding="20px 0 0 0" flexWrap="wrap" justCont="space-between" gap="10px">
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
                                    <Text padding="30px 0">{o.content}</Text>
                                    {o.image && <Image alt={o.image} src={o.image} width={600} height={300}  style={{width:"100%", height:"auto", borderRadius:"10px"}} />}
                                    {o.alt && <Text padding="5px 0 20px 0" fontSize="14px" textAlign="center">{o.alt}</Text>}
                                    {o.figma && <iframe loading='lazy' src={o.figma} style={{border:"1px solid rgba(0, 0, 0, 0.1)", width:"100%", borderRadius:"10px"}}  height="450" allowFullScreen></iframe>}
                                    {o.figmaAlt && <Text fontStyle="italic" padding="5px 0 20px 0" fontSize="14px" textAlign="center">{o.figmaAlt}</Text>}
                                </Box>
                            ))}
                            
                            <Heading id="secondHeading" color='#9DFFFF' fSize="22px" width="100%" padding="80px 0 20px 0">Code Snippets</Heading>
                            <Box width="100%" flexDir="column" aliIt="center">
                                <Box width="100%">
                                    {project.carousel && project.carousel.map((o,i)=>(
                                        <Image key={i} alt={o} src={o} width={600} height={300} onClick={()=>setImageCarousel(o)}  style={{width:`calc(100% / ${project.carousel.length} - 10px)`, height:"100px", objectFit:"cover", objectPosition: "50% 10%", margin:"0px 5px", border: o == imageCarousel ? "1px solid rgb(157, 149, 220)" : "1px solid transparent", transition: "0.8s ease", borderRadius:"10px", cursor:"pointer", filter: o == imageCarousel ? "sepia(0%)  saturate(150%)" : "sepia(100%)"}} />
                                    ))}
                                </Box>
                                {project.carousel && <Image alt={imageCarousel} src={imageCarousel} width={600} height={300}  style={{width:"100%", height:"auto", margin:"20px 0 0 0", maxWidth:"1200px", borderRadius:"10px"}} />}
                            </Box>

                            <Heading id="secondHeading" color='#9DFFFF' fSize="22px" width="100%" padding="100px 0 15px 0">Lessons Learned</Heading>
                            {project.lessonsLearned && project.lessonsLearned.map((o,i) => (
                                <CollapseCard key={i} index={i} content={o} state={collapse} onClick={()=>setCollapse(i)} />
                            ))}
                        </Box>

						<hr style={{width:"100%", margin:"100px 0", borderWidth:"5px", borderColor:"#B23C87", borderStyle: "dotted none none none"}} />

                        <Container flexDir="column" width="100%">
                            <Heading id="secondHeading" fSize="22px" color='#B23C87' padding="10px 0">Other Projects</Heading>
                            <Box width="100%" borderRadius="10px" flexDir="column">
                                {ProjectList.filter((o) => o.name != project.name).map((filteredObj, i) => (
                                    <Link key={i} href={filteredObj.name} style={{ textDecoration: "none" }}>
                                            <RelatedCard alt={filteredObj.name} src={filteredObj.image} heading={filteredObj.name} preview={filteredObj.preview} />
                                    </Link>
                                ))}
                            </Box>
                        </Container>

                        <Container flexDir="column" width="100%" padding="90px 0">
                            <Heading id="secondHeading" fSize="22px" color='#B23C87'  padding="10px 0">Wanna Talk?</Heading>
                            <Text padding="0 0 50px 0">If you're interested in working on a project together or just wanna reach out to me, fill out the form below. OR check out my socials below. <strong>Ttyl!</strong></Text>
                            <Contact PUBLICkey={process.env.NEXT_PUBLIC_PRIVATE_API_KEY} />
                        </Container>

                    </Container>
                </Container>
            </PageTransition>
        </main>
    )
}