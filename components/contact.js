import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Form, Text } from './globals';
import Inputs from './input';
// const publicKey = process.env.public_key 

export default function Contact({apiKey}){
  const form = useRef();
  console.log(apiKey)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7fufcnn', 'template_vs93m8o', form.current, apiKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
        <Box flexDir="column" width="100%" maxWidth="400px" padding="15px 0px">
            <Text fontWeight="700">Name</Text>
            <Inputs type="text" name="user_name" placeholder="First and Last Name" />
        </Box>
        <Box flexDir="column" width="100%" maxWidth="400px">
            <Text fontWeight="700">Email</Text>
            <Inputs type="email" name="user_email" placeholder="example@address.com" />
        </Box>
        <Box flexDir="column" width="100%" maxWidth="600px" padding="15px 0px">
            <Text fontWeight="700">Message</Text>
            <Inputs type="textarea" name="message" placeholder="Leave a message" />
        </Box>
        <Inputs type="submit" value="Send"/>
    </Form>
  );
};

export async function getServerSideProps(){

    console.log(process.env.PRIVATE_API_KEY)
  
    return {
      props: {
        // apiKey: api_key
        hello: 'world'
      }
    }
  }