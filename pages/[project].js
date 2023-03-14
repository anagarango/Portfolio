import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Hero, Container, Heading, Text, CTA, Tag } from '@/components/globals'
import { useRouter } from "next/router"

export default function Project(){
    const r = useRouter()
    const project = r.query

    return(
        <Container>
            <Heading>{project.name}</Heading>
            <Image alt={project.preview} src={project.image} width={150} height={100} style={{width:"400px", height:"fit-content"}} />
            <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src={project.figma} allowfullscreen></iframe>
        </Container>
    )
}