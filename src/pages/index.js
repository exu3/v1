import React from 'react';
import Layout from '../components/layout'
import Head from '../components/head'
import { Text, Box, Flex, Image, HStack } from '@chakra-ui/react'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Text fontSize="4xl" fontWeight="extrabold">Hey, I'm Ella.</Text><br />
        <Flex>
          <Box>
            <Text>
              Nice to meet you! I'm a high school junior from the Bay Area. At (Zoom) school, I hangout in several clubs including engineering club, Interact, NHS, among others. Outside of school, I love working on side projects and participating in hackathons. Although my experience primarily lies in front-end web development, I am always interested in learning new skills and building awesome projects. As of February 2021, I have participated in almost a dozen hackathons and won an award at three of them.
            </Text><br />
            <Text>
              When I'm not coding or doing homework, I like to hike in the woods behind my neighborhood and spend time in nature. I also enjoy growing plants and hanging out with my chickens.
            </Text>
          </Box>
          <Box>
            <Image src="https://cloud-1dbtgci6g-hack-club-bot.vercel.app/0wheeeeeeeeeeeeee.png" alt="Person looking at phone" />
          </Box>
        </Flex>
        {/* Temp socials */}
        <Box>
          <HStack spacing={10}>
                <Box>
                    <a href="https://github.com/eilla1"><FaGithub size={30} /></a>
                </Box>
                <Box>
                    <a href="https://linkedin.com/in/ellla-x"><FaLinkedin size={30} /></a>
                </Box>
                <Box>
                    <a href="mailto:exu6056@gmail.com"><FaEnvelope size={30} /></a>
                </Box>
          </HStack>
        </Box>
      </Layout>
  )
}

export default IndexPage