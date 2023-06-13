import styled from "styled-components";
import { motion } from 'framer-motion';

export const Heading = styled(motion.h1)`
    color: ${props=>props.color};
    padding:${props=>props.padding};
    position:${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    font-size:${props=>props.fSize};
    width:${props=>props.width};
    background-color:${props=>props.bgColor};
    border-radius:${props=>props.borderRadius};
    height:fit-content;
    z-index:${props=>props.zIndex};
    margin-top:${props=>props.marginTop};
    padding-top:${props=>props.paddingTop};
    cursor: ${props=>props.cursor};
    text-align:${props=>props.textAlign};
    font-weight:${props=>props.fontWeight};
    font-family:${props=>props.fontFamily}
`

export const Text = styled.p`
    width:${props=>props.width};
    height:${props=>props.height};
    text-align:${props=>props.textAlign};
    margin:${props=>props.margin};
    padding:${props=>props.padding};
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    color: ${props=>props.color || "white"};
    font-weight:${props=>props.fontWeight};
    background-color:${props=>props.bgColor};
    border-radius:${props=>props.borderRadius};
    min-width: ${props=>props.minWidth};
    max-width: ${props=>props.maxWidth};
    cursor:${props=>props.cursor};
`

export const Span = styled.span`
    width:${props=>props.width};
    height:${props=>props.height};
    text-align:${props=>props.textAlign};
    margin:${props=>props.margin};
    padding:${props=>props.padding};
    display:${props=>props.display || "flex"};
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    color: ${props=>props.color || "white"};
    font-weight:${props=>props.fontWeight};
    background-color:${props=>props.bgColor};
    border-radius:${props=>props.borderRadius};
    min-width: ${props=>props.minWidth};
`

export const Image = styled(motion.img)`
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius:${props=>props.borderRadius};
    padding:${props=>props.padding || "0px"};
    margin:${props=>props.margin || "0px"};
`

export const Hero = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    background-image: url(${props=>props.src});
    background-size: ${props=>props.bgSize};
    background-repeat: ${props=>props.bgRepeat};
    margin:${props=>props.margin};
    background-position: ${props=>props.bgPosition};
    padding:${props=>props.padding};
    position:${props=>props.position};
    top:${props=>props.top};
    right:${props=>props.right};
    transform: ${props=>props.transform};
    z-index:${props=>props.zIndex};
    display:${props=>props.display || "flex"};
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    flex-direction:${props=>props.flexDir};
    min-height:${props=>props.minHeight}; 
    border: ${props=>props.border};
    overflow-y:${props=>props.overflow};
`

export const Box = styled(motion.div)`
    width:${props=>props.width};
    max-width: ${props=>props.maxWidth};
    height:${props=>props.height};
    min-height:${props=>props.minHeight};
    background-color:${props=>props.bgColor};
    display:${props=>props.display || "flex"};
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    padding:${props=>props.padding};
    flex-direction:${props=>props.flexDir};
    margin:${props=>props.margin};
    flex-wrap:${props=>props.flexWrap};
    overflow-x:${props=>props.overflow};
    border-radius:${props=>props.borderRadius};
    position:${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    right:${props=>props.right};
    bottom:${props=>props.bottom};
    box-shadow:${props=>props.boxShadow};
    z-index:${props=>props.zIndex};
    border:${props=>props.border};
    border-top:${props=>props.borderTop};
    transition: ${props=>props.transitionDiv};
`
export const PullQuote = styled.blockquote`
    font-size:22px;
    font-weight:600;
    color:#81C3D7;
    padding:50px;
    text-align:center;
`

export const Container = styled(Box)`
`

export const CTA = styled.button`
  width:fit-content;
  height:fit-content;
  padding:8px 25px;
  background-color:transparent;
  border: 4px solid #9DFFFF;
  border-radius:10px;
  color:#9DFFFF;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #9DFFFF;
    color: #28284D
  }
`

export const Input = styled.input`
  width: 100%;
  max-width: ${props=>props.maxWidth};
  height:fit-content;
  padding:${props=>props.padding};
  background-color: transparent;
  border: ${props=>props.border || "4px solid #EA638D" };
  border-radius:10px;
  color:${props=>props.color || "white"};
  font-size:16px;
  font-weight:${props=>props.fontWeight || 600};
  cursor:${props=>props.cursor};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props=>props.bgColorHover};
    color: ${props=>props.colorHover}
  }
`

export const Tag = styled.button`
  width:fit-content;
  height:fit-content;
  padding:8px;
  background-color: #28284D;
  border-radius:10px;
  border:0px;
  color:#9D95DC;
  font-size:14px;
  font-weight:500;
  margin:2.5px 5px 2.5px 0px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1)
  }
`

export const Form = styled.form`
  margin-top:${props=>props.marginTop || "0px"};
  width:${props=>props.width || "100%"};
  height:${props=>props.height || "100%"};
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px
`

export const Textarea = styled.textarea`
  width:${props=>props.width || "100%"};
  height:fit-content;
  padding:${props=>props.padding};
  background-color:transparent;
  border: ${props=>props.border || "4px solid #EA638D" };
  border-radius:10px;
  color:white;
  font-size:16px;
  font-weight:${props=>props.fontWeight};
  cursor:${props=>props.cursor};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props=>props.bgColorHover};
    color: ${props=>props.colorHover}
  }
`