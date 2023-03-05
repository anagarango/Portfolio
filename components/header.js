import { Container, Box, H4 } from "./globals"
import Image from "next/image"
import Link from "next/link"

const HeaderImage = [
    "About Me",
    "Projects",
    "Coding Experience"
]

export default function Header(){
    const DownloadResume = () => {
        // using Java Script method to get PDF file
        fetch('AnaArangoResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AnaArangoResume.pdf';
                alink.click();
            })
        })
      }
    return(
            <Box width="70px" position="fixed" left="0" top="0"  height="95vh" bgColor="#28284D" flexDir="column" aliIt="center" zIndex="5">
                {HeaderImage.map((o,i)=>(
                    <Link title={o} className="headerLinks" href={`#${o}`} scroll={false} style={{display:"flex", margin:"20px 0px"}}>
                        <Image src={`/Icons/${o}.svg`} width={40} height={40} style={{margin:"10px"}}></Image>
                    </Link>
                ))}
                <Link title="Resume" className="headerLinks" href="#resume" onClick={DownloadResume} style={{ position:"absolute", bottom:15, padding:"10px"}}>
                    <Image src="/Icons/Resume.svg" width={40} height={40}/>
                </Link>
            </Box>
    )
}


