import React from "react"
import { Link } from 'gatsby'
import { Box, Button, FormControl, FormLabel, Textarea, Text, Input, Stack } from "@chakra-ui/react"

import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
    return (
        <Layout>
            <Head />
            <Text fontSize="4xl" fontWeight="extrabold">Get in touch</Text>
            <Text>Send me a message using the form below, and I will get back to you in the next few days!</Text><br/>
            <Box w={[300, 400, 500]}>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJEwmMeByLMFiOwSxsYIePtinBvq2vWOi9XV9HkrGPAfK4_Q/formResponse" method="POST" target="_blank">
                    <Stack>
                       <FormControl id="name">
                           <FormLabel>Name</FormLabel>
                           <Input name="entry.2062290229" placeholder="Your name" size="sm" focusBorderColor="orange.200" />
                       </FormControl>
                       <FormControl isRequired>
                           <FormLabel>Email</FormLabel>
                           <Input name="entry.402225089" type="email" placeholder="Email" size="sm" focusBorderColor="orange.200" />
                       </FormControl>
                       <FormControl isRequired>
                           <FormLabel>Message</FormLabel>
                           <Textarea name="entry.1310095174" placeholder="Your message here" size="sm" h="10rem" />
                       </FormControl>
                       <Button w="20%" type="submit">Submit</Button>
                    </Stack>
                </form>
            </Box>
        </Layout>
    )
}

export default Contact