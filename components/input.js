import { Input, Textarea } from "./globals"

export default function Inputs({
    type,
    name,
    value,
    placeholder
}){
    if(type == "text" || type == "email"){
        return(
            <Input id="input" type={type} name={name} placeholder={placeholder} padding="7px" fontWeight="400" />
        )
    }

    if(type == "submit"){
        return(
            <Input type={type} value={value} border="4px solid #9DFFFF" bgColorHover="#9DFFFF" colorHover="#28284D" padding="8px 25px" color="#9DFFFF" cursor="pointer" maxWidth="fit-content" />
        )
    }

    if(type == "textarea"){
        return(
            <Textarea name={name} id="input" placeholder={placeholder} padding="7px" fontWeight="400"/>
        )
    }
}