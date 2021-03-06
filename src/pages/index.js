import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'
import { Text, Box, Flex, Image } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Text fontSize="4xl" fontWeight="extrabold">Hey, I'm Ella.</Text><br />
        <Flex>
          <Box>
            <Text>
              Nice to e-meet you. I'm a high school junior from the Bay Area. At (Zoom) school, I hangout in several clubs including engineering club, Interact, NHS, among others. Outside of school, I love working on side projects and participating in hackathons. Although my experience primarily lies in front-end web development, I am also interested in hardware, UI/UX design, and data science. As of February 2021, I have participated in almost a dozen hackathons and won an award at three of them.
            </Text><br />
            <Text>
              When I'm not coding or doing homework, I like to hike in the woods behind my neighborhood and spend time in nature. I also enjoy growing plants and hanging out with my chickens.
            </Text>
          </Box>
          <Box>
            <Image src="https://cloud-1dbtgci6g-hack-club-bot.vercel.app/0wheeeeeeeeeeeeee.png" alt="Person looking at phone" />
          </Box>
        </Flex>
      </Layout>
  )
}

export default IndexPage