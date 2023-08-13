import { Box } from "./globals"
import Image from "next/image"
import Link from "next/link"

const HeaderImage = [
    "Home",
    "About",
    "Projects",
    "Contact"
]

export default function Header({
    height="100vh"
}){
    return(
            <Box width="60px" position="fixed" left="0" top="0"  height={height} bgColor="#2B255B" flexDir="column" aliIt="center" zIndex="5">
                {HeaderImage.map((o,i)=>(
                    <Link key={i} title={o} href={`/#${o}`} style={{display:"flex", margin:"18px 0px", scrollBehavior:"smooth"}}>
                        <Image alt={o} className={o} src={`/SVG/${o}.svg`} width={33} height={33} />
                    </Link>
                ))}
                <a title="Resume" href="/AnaArango-Resume.pdf" download style={{ position:"absolute", bottom:55, padding:"10px"}}>
                    <Image alt="Resume" className="Resume" src="/SVG/Resume.svg" width={33} height={33}/>
                </a>
            </Box>
    )
}


