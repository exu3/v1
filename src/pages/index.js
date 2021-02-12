import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <h1>Hey, I'm Ella.</h1>
      <p>Check out my work <Link to="/projects">here.</Link></p>
    </Layout>
  )
}

export default IndexPage