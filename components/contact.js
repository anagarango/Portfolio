import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Form, Text, Image } from './globals';
import Inputs from './input';
import { motion, AnimatePresence } from "framer-motion"


export default function Contact({
  PUBLICkey
}){
  const form = useRef();
  const [message, setMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7fufcnn', 'template_vs93m8o', form.current, PUBLICkey)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setMessage(true)
          setTimeout(() => {
            setMessage(false)
          }, 6000);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <Form ref={form} onSubmit={sendEmail}>
      {message &&  <AnimatePresence exitBeforeEnter>
            <motion.div  initial={{ x: 400 }} animate={{ x: 0, transition: { duration: 1, delay: 0 }}} exit={{ x: 400 }} style={{display:"flex", position:"fixed", zIndex:"15", left:"85vw", top:"100px", padding:"15px 30px", backgroundColor:"#4BDA4B", alignItems:"center", width:"fit-content"}}> 
                <Image src="/check.png" width={40} height={40} alt="checkmark" margin="0 20px 0 0"/>
                <Text padding="0px" color='white' fontWeight="600">Message Sent!</Text>
            </motion.div>
        </AnimatePresence>}
        <Box flexDir="column" width="100%" maxWidth="400px" padding="15px 0px">
            <Text fontWeight="700">Name</Text>
            <Inputs type="text" name="from_name" placeholder="First and Last Name" />
        </Box>
        <Box flexDir="column" width="100%" maxWidth="400px">
            <Text fontWeight="700">Email</Text>
            <Inputs type="email" name="from_email" placeholder="example@address.com" />
        </Box>
        <Box flexDir="column" width="100%" maxWidth="600px" padding="15px 0px">
            <Text fontWeight="700">Message</Text>
            <Inputs type="textarea" name="message" placeholder="Leave a message" />
        </Box>
        <Inputs type="submit" value="Send"/>
    </Form>
  );
};