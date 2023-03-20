import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Tag } from '@/components/globals'
import { useRouter } from "next/router"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Project(){
    const r = useRouter()
    const project = r.query
    console.log(project)

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

          <Container minHeight="100vh" id="About" flexDir="column" width="100%" padding="10px 150px 80px 150px" aliIt="flex-start">
            <Heading color='#B23C87' fontFamily='Staatliches' padding="10px 0">{project.name}</Heading>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 4000, disableOnInteraction: true}} pagination={{clickable: true}} navigation={true} loop={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper" effect="fade">
                {project.carousel.map((o,i)=>(
                    <SwiperSlide style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <Image alt={o} src={o} width={600} height={300} priority style={{width:"fit-content", height:"100%"}} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Text padding="50px 0 0 0">{project.p1}</Text>
            <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Role</Heading>
            <Text padding="20px 0 0 0">{project.p2Role}</Text>
            <Text padding="20px 0 0 0">{project.p3}</Text>
            <Text padding="20px 0 0 0">{project.p4}</Text>
            <Heading color='#9DFFFF' fontFamily='Staatliches' fSize="22px" width="100%" padding="60px 0 0 0">Design</Heading>
            <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src={project.figma} allowfullscreen></iframe>
            <Box padding="20px 0 0 0" width="100%" justCont="center">
                <a href={project.github}>
                    <Image alt="github image" className='linkGithub' src="/Github/github.png" width={50} height={50} priority />
                </a>
                {project.vercel &&
                    <a href={project.vercel} style={{marginLeft:"10%"}}>
                        <Image alt="live webpage image" className='linkVercel' src="/Vercel/live.png" width={50} height={50} priority />
                    </a>
                }
            </Box>
          </Container>

      </main>
    </>
    )
}