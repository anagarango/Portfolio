import Reveal from "./animationReveal";
import { Heading, Text } from "./globals";

export default function Animate({
  text,
  width="fit-content",
  starting="hiddenFromLeft",
  delay=0.6,
  type,
  ...props
}){
  return (
  <Reveal width={width} starting={starting} delay={delay}>
    {type == "heading" &&  <Heading {...props}>{text}</Heading>}
    {type == "text" &&  <Text {...props}>{text}</Text>}
  </Reveal>
  )
}