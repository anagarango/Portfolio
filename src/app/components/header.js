import { Box } from "./globals"
import Image from "next/image"
import { useRouter } from "next/navigation";

const HeaderImage = [
    "Home",
    "About",
    "WorkExperience",
    "Projects",
    "Contact",
]

export default function Header({
    height="100vh",
    handleItemClick,
    refs,
    type
}){
  const router = useRouter();

  const handleHeaderScrollItem = (item) => {
    localStorage.setItem("scrollTo", item);
    router.push("/")
  }

    return(
      <Box width="60px" position="fixed" left="0" top="0" height={height} bgColor="#2B255B" flexDir="column" aliIt="center" zIndex="5">
        {HeaderImage.map((o, i) => (
            <div key={i} onClick={() => {type=="project" ? handleHeaderScrollItem(o) : handleItemClick(refs[o])}} style={{ display: 'flex', margin: '18px 0px', cursor:"pointer" }}>
            <Image alt={o} src={`/SVG/${o}.svg`} width={33} height={33}/>
            </div>
        ))}

        <a title="Resume" href="/AnaArango-Resume.pdf" target="_blank" style={{ position: 'absolute', bottom: 55, padding: '10px' }}>
          <Image alt="Resume" className="Resume" src="/SVG/Resume.svg" width={33} height={33} />
        </a>
      </Box>
    )
}


