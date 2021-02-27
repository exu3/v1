import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'
import { Text } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Text fontSize="4xl" fontWeight="extrabold">Hey, I'm Ella.</Text>
      <Text>Nice to e-meet you! I'm a high school junior from California, and I'm learning how to code. I love making cool things on the web! In my very limited free time, you can find me hanging out with my chickens, spending time outdoors, or staring out the window.</Text>
      <Text>Check out what I'm up to <Link to="/projects">here.</Link></Text>
    </Layout>
  )
}

export default IndexPage