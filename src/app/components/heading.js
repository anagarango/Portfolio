import Reveal from "./animationReveal";
import { Heading, Text } from "./globals";

export default function Animate({
  text,
  widthReveal,
  starting="hiddenFromLeft",
  delay=0.3,
  type,
  ...props
}){
  return (
  <Reveal widthReveal={widthReveal} starting={starting} delay={delay}>
    {type == "heading" &&  <Heading {...props}>{text}</Heading>}
    {type == "text" &&  <Text {...props}>{text}</Text>}
  </Reveal>
  )
}