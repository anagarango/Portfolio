import styled from "styled-components";

export const H1 = styled.h1`
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
`
export const H2 = styled.h2`
    color: ${props=>props.color};
    cursor: ${props=>props.cursor};
    width:${props=>props.width};
    font-size:${props=>props.fSize};
    margin:${props=>props.margin || "0px"};
    text-align:${props=>props.textAlign};
    padding:${props=>props.padding };
`
export const H3 = styled.h3`
    color: ${props=>props.color};
    padding:${props=>props.padding};
    cursor: ${props=>props.cursor};
    text-align:${props=>props.textAlign};
    width:${props=>props.width};
    font-size:${props=>props.fSize};
    font-family: 'Staatliches';
`
export const H4 = styled.h4`
    color: ${props=>props.color};
    padding:${props=>props.padding};
    margin:${props=>props.margin};
    text-align:${props=>props.textAlign};
    font-weight:${props=>props.fontWeight};
`

export const Text = styled.p`
    width:${props=>props.width};
    height:${props=>props.height};
    text-align:${props=>props.textAlign};
    margin:${props=>props.margin};
    padding:${props=>props.padding};
    display:flex;
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    color: ${props=>props.color};
    font-weight:${props=>props.fontWeight}
`

export const Image = styled.img`
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
    display:flex;
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    flex-direction:${props=>props.flexDir};
    min-height:${props=>props.minHeight};
`

export const Box = styled.div`
    width:${props=>props.width || "100vw"};
    max-width: ${props=>props.width};
    height:${props=>props.height || "fit-content"};
    min-height:${props=>props.minHeight};
    background-color:${props=>props.bgColor};
    display:flex;
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    padding:${props=>props.padding};
    flex-direction:${props=>props.flexDir};
    margin:${props=>props.margin};
    flex-wrap:${props=>props.flexWrap};
    overflow:${props=>props.overflow};
    border-radius:${props=>props.borderRadius};
    position:${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    right:${props=>props.right};
    bottom:${props=>props.bottom};
    box-shadow:${props=>props.boxShadow};
    z-index:${props=>props.zIndex};
    border:${props=>props.border};
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
  padding:10px 35px;
  background-color:transparent;
  border: 4px solid #9DFFFF;
  border-radius:10px;
  color:#9DFFFF;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
`