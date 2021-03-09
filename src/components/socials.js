import React from 'react';
import { Text, Box, Container, HStack, Center, ChakraProvider } from '@chakra-ui/react'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { GiEvilBook } from "@react-icons/all-files/gi/GiEvilBook"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

const Socials = () => {
    return (
        <ChakraProvider>
            <Container>
            <Text fontSize="4xl" fontWeight="semibold" textAlign="center">Connect with me</Text><br />
            <Box>
            <Center>
                <HStack flexDirection="row" flexWrap="wrap" spacing={10}>
                <Box>
                    <a href="https://github.com/eilla1"><FaGithub /></a>
                </Box>
                <Box>
                    <a href="https://linkedin.com/in/ellla-x"><FaLinkedin /></a>
                </Box>
                <Box>
                    <a href="mailto:exu6056@gmail.com"><FaEnvelope /></a>
                </Box>
                <Box>
                    <a href="https://scrapbook.hackclub.com/ella"><GiEvilBook /></a>
                </Box>
                </HStack>
            </Center>
            </Box>
            </Container>
    </ChakraProvider>
    )
}

export default Socials
