import { Box } from "./globals"
import Image from "next/image"
import Link from "next/link"

const HeaderImage = [
    "Home",
    "About",
    "Projects",
    "Contact"
]

export default function Header(){
    return(
            <Box width="65px" position="fixed" left="0" top="0"  height="95vh" bgColor="#1E1E41" flexDir="column" aliIt="center" zIndex="5">
                {HeaderImage.map((o,i)=>(
                    <Link key={i} title={o} href={`/#${o}`} scroll={false} style={{display:"flex", margin:"20px 0px"}}>
                        <Image alt={o} className={o} src={`/Icons/${o}.svg`} width={40} height={40} style={{margin:"10px"}} />
                    </Link>
                ))}
                <a title="Resume" href="/AnaArango-Resume.pdf" download style={{ position:"absolute", bottom:15, padding:"10px"}}>
                    <Image alt="Resume" className="Resume" src="/Icons/Resume.svg" width={40} height={40}/>
                </a>
            </Box>
    )
}


